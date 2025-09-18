<?php
require_once 'config.php';

// Include PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';
require_once __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';

// Set headers for CORS
header("Access-Control-Allow-Origin: https://kaptick.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

try {
    // Get input data
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        sendError('Invalid JSON data');
    }

    // Validate required fields
    validateRequired($input, 'name', 'Name');
    validateRequired($input, 'phone', 'Phone number');
    validateRequired($input, 'budget', 'Budget');
    
    // Validate phone number (only digits, 10-15 characters)
    if (!preg_match('/^[0-9]{10,15}$/', $input['phone'])) {
        sendError('Please provide a valid phone number (10-15 digits)');
    }
    // Sanitize input data
    $data = [
        'name' => sanitizeInput($input['name']),
        'phone' => sanitizeInput($input['phone']),
        'budget' => sanitizeInput($input['budget']),
        'sourcePage' => sanitizeInput($input['sourcePage'] ?? 'Website Development Landing')
    ];
    
    // Insert into database
    $pdo = getDatabaseConnection();
    $sql = "INSERT INTO website_leads (name, phone, budget, source_page, submitted_at) 
            VALUES (:name, :phone, :budget, :source_page, NOW())";
    $stmt = $pdo->prepare($sql);
    $result = $stmt->execute([
        ':name' => $data['name'],
        ':phone' => $data['phone'],
        ':budget' => $data['budget'],
        ':source_page' => $data['sourcePage']
    ]);
    
    if (!$result) {
        sendError('Failed to save lead information');
    }
    
    // Get the inserted lead ID
    $data['leadId'] = $pdo->lastInsertId();
    
    // Send admin notification email
    sendWebsiteLeadNotification($data);
    
    sendSuccess('Thank you! Your request has been submitted successfully. Check your email for your free guide and we\'ll be in touch within 48 hours with your custom Website Preview.');
    
} catch (Exception $e) {
    error_log("Website leads error: " . $e->getMessage());
    sendError('An error occurred while processing your request. Please try again.');
}

// Function to generate secure download token
function generateDownloadToken($email, $leadId) {
    try {
        $pdo = getDatabaseConnection();
        
        // Generate unique token
        $token = bin2hex(random_bytes(32));
        
        // Set expiration time (48 hours from now)
        $expiresAt = date('Y-m-d H:i:s', strtotime('+48 hours'));
        
        // Insert token into database
        $stmt = $pdo->prepare("INSERT INTO download_tokens (token, email, lead_id, expires_at) VALUES (?, ?, ?, ?)");
        $stmt->execute([$token, $email, $leadId, $expiresAt]);
        
        return $token;
    } catch (Exception $e) {
        error_log("Token generation error: " . $e->getMessage());
        return null;
    }
}

// Function to send user confirmation email with Google Drive PDF link

// Function to send admin notification email
// Minimal admin notification email for new lead
function sendWebsiteLeadNotification($data) {
    $from_email = "no-reply@kaptick.com";
    $from_name = "Kaptick Media Website";
    $admin_emails = [
        "nikhil@kaptick.com",
        "harsh@kaptick.com"
    ];
    $subject = "New Website Development Lead";
    $message = "<h2>New Website Development Lead</h2>"
        . "<p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>"
        . "<p><strong>Phone:</strong> " . htmlspecialchars($data['phone']) . "</p>"
        . "<p><strong>Budget:</strong> " . htmlspecialchars($data['budget']) . "</p>"
        . "<p><strong>Source:</strong> " . htmlspecialchars($data['sourcePage']) . "</p>"
        . "<p><strong>Lead ID:</strong> #" . $data['leadId'] . "</p>"
        . "<p><strong>Submitted:</strong> " . date('Y-m-d H:i:s') . "</p>";
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = $from_email;
        $mail->Password = 'pEuYPaGYydTn222!';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;
        $mail->setFrom($from_email, $from_name);
        foreach ($admin_emails as $admin_email) {
            $mail->addAddress($admin_email);
        }
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->send();
    } catch (Exception $e) {
        error_log("Admin notification email failed: " . $mail->ErrorInfo);
    }
}
?>
