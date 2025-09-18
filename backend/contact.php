<?php
require_once 'config.php';
require_once 'notifications.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

try {
    // Get database connection
    $pdo = getDatabaseConnection();
    
    // Get JSON data
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if (!$data) {
        throw new Exception('Invalid JSON data');
    }
    
    // Validate required fields
    $required_fields = ['name', 'email'];
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }
    
    // Validate email
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email address');
    }
    
    // Prepare data for insertion - handle both contact form structures
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'] ?? '';
    
    // Handle different form types
    if (isset($data['service'])) {
        // Main contact form (with service dropdown)
        $service = $data['service'] ?? '';
        $website = $data['website'] ?? '';
        $description = $data['description'] ?? '';
        $subject = $service; // Use service as subject
        $message = "Service: $service\nWebsite: $website\nDescription: $description";
    } else {
        // Simple contact form or other forms
        $service = '';
        $website = '';
        $description = $data['message'] ?? '';
        $subject = $data['subject'] ?? 'Contact Form Submission';
        $message = $data['message'] ?? '';
    }
    
    // Insert into database
    $stmt = $pdo->prepare("
        INSERT INTO contact_forms 
        (name, email, phone, service, website, description, subject, message, created_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
    ");
    
    $result = $stmt->execute([
        $name,
        $email,
        $phone,
        $service,
        $website,
        $description,
        $subject,
        $message
    ]);
    
    if ($result) {
        // Send notification email to admins
        $email_sent = sendNotificationEmail('contact', $data);
        
        echo json_encode([
            'success' => true,
            'message' => 'Contact form submitted successfully',
            'email_notification' => $email_sent ? 'sent' : 'failed'
        ]);
    } else {
        throw new Exception('Failed to save contact form');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
