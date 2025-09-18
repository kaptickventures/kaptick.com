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
    $required_fields = ['name', 'email', 'position', 'message'];
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }
    
    // Handle resume file upload
    $resume_filename = null;
    $resume_path = null;
    
    if (!empty($data['resumeBase64']) && !empty($data['resumeFileName'])) {
        // Create uploads directory if it doesn't exist
        $upload_dir = 'uploads/resumes/';
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0755, true);
        }
        
        // Generate unique filename
        $file_extension = pathinfo($data['resumeFileName'], PATHINFO_EXTENSION);
        $unique_filename = uniqid() . '_' . time() . '.' . $file_extension;
        $resume_filename = $data['resumeFileName'];
        $resume_path = $upload_dir . $unique_filename;
        
        // Decode and save file
        $file_data = base64_decode($data['resumeBase64']);
        if (file_put_contents($resume_path, $file_data) === false) {
            throw new Exception('Failed to save resume file');
        }
    }
    
    // Insert into database
    $stmt = $pdo->prepare("
        INSERT INTO career_applications 
        (name, email, position, portfolio, message, resume_filename, resume_path, created_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
    ");
    
    $result = $stmt->execute([
        $data['name'],
        $data['email'],
        $data['position'],
        $data['portfolio'] ?? '',
        $data['message'],
        $resume_filename,
        $resume_path
    ]);
    
    if ($result) {
        // Send notification email to admins
        $notification_data = array_merge($data, [
            'resume_filename' => $resume_filename
        ]);
        $email_sent = sendNotificationEmail('career', $notification_data);
        
        echo json_encode([
            'success' => true,
            'message' => 'Application submitted successfully',
            'application_id' => $pdo->lastInsertId(),
            'email_notification' => $email_sent ? 'sent' : 'failed'
        ]);
    } else {
        throw new Exception('Failed to save application');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
