<?php
// Email notification functions for Kaptick Media
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer classes
require_once __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';
require_once __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';

function sendNotificationEmail($type, $data) {
    // Email configuration
    $from_email = "no-reply@kaptick.com";
    $from_name = "Kaptick Media Website";
    $admin_emails = [
        "nikhil@kaptick.com",
        "harsh@kaptick.com"
    ];
    
    // Set up email content based on type
    switch ($type) {
        case 'contact':
            $subject = "New Contact Form Submission - Kaptick Media";
            $message = buildContactEmailContent($data);
            break;
        case 'career':
            $subject = "New Career Application - Kaptick Media";
            $message = buildCareerEmailContent($data);
            break;
        default:
            return false;
    }
    
    $mail = new PHPMailer(true);
    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = $from_email;
        $mail->Password = 'pEuYPaGYydTn222!';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        // Recipients
        $mail->setFrom($from_email, $from_name);
        foreach ($admin_emails as $admin_email) {
            $mail->addAddress($admin_email);
        }

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("PHPMailer Error: " . $mail->ErrorInfo);
        return false;
    }
}

function buildContactEmailContent($data) {
    $html = "<!DOCTYPE html>";
    $html .= "<html><head><meta charset='UTF-8'><title>Contact Form Submission</title></head>";
    $html .= "<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>";
    
    $html .= "<div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;'>";
    $html .= "<h2 style='color: #e31e24; text-align: center; margin-bottom: 30px;'>New Contact Form Submission</h2>";
    
    $html .= "<table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>";
    $html .= "<tr style='background-color: #f8f9fa;'>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;'>Name:</td>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd;'>" . htmlspecialchars($data['name']) . "</td>";
    $html .= "</tr>";
    
    $html .= "<tr>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Email:</td>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd;'><a href='mailto:" . htmlspecialchars($data['email']) . "'>" . htmlspecialchars($data['email']) . "</a></td>";
    $html .= "</tr>";
    
    if (!empty($data['phone'])) {
        $html .= "<tr style='background-color: #f8f9fa;'>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Phone:</td>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd;'><a href='tel:" . htmlspecialchars($data['phone']) . "'>" . htmlspecialchars($data['phone']) . "</a></td>";
        $html .= "</tr>";
    }
    
    if (!empty($data['service'])) {
        $html .= "<tr>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Service:</td>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd;'>" . htmlspecialchars($data['service']) . "</td>";
        $html .= "</tr>";
    }
    
    if (!empty($data['website'])) {
        $html .= "<tr style='background-color: #f8f9fa;'>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Website:</td>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd;'><a href='" . htmlspecialchars($data['website']) . "' target='_blank'>" . htmlspecialchars($data['website']) . "</a></td>";
        $html .= "</tr>";
    }
    
    if (!empty($data['description']) || !empty($data['message'])) {
        $message_content = $data['description'] ?? $data['message'] ?? '';
        $html .= "<tr>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;'>Message:</td>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd;'>" . nl2br(htmlspecialchars($message_content)) . "</td>";
        $html .= "</tr>";
    }
    
    $html .= "<tr style='background-color: #f8f9fa;'>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Submitted:</td>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd;'>" . date('Y-m-d H:i:s T') . "</td>";
    $html .= "</tr>";
    $html .= "</table>";
    
    $html .= "<div style='text-align: center; margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 5px;'>";
    $html .= "<p style='margin: 0; color: #0066cc;'><strong>Quick Actions:</strong></p>";
    $html .= "<p style='margin: 5px 0 0 0;'>";
    $html .= "<a href='mailto:" . htmlspecialchars($data['email']) . "?subject=Re: Your inquiry about " . ($data['service'] ?? 'our services') . "' style='color: #e31e24; text-decoration: none; margin-right: 15px;'>Reply to Client</a>";
    if (!empty($data['phone'])) {
        $html .= "<a href='tel:" . htmlspecialchars($data['phone']) . "' style='color: #e31e24; text-decoration: none;'>Call Client</a>";
    }
    $html .= "</p>";
    $html .= "</div>";
    
    $html .= "</div>";
    $html .= "</body></html>";
    
    return $html;
}

function buildCareerEmailContent($data) {
    $html = "<!DOCTYPE html>";
    $html .= "<html><head><meta charset='UTF-8'><title>Career Application</title></head>";
    $html .= "<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>";
    
    $html .= "<div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;'>";
    $html .= "<h2 style='color: #e31e24; text-align: center; margin-bottom: 30px;'>New Career Application</h2>";
    
    $html .= "<table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>";
    $html .= "<tr style='background-color: #f8f9fa;'>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;'>Name:</td>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd;'>" . htmlspecialchars($data['name']) . "</td>";
    $html .= "</tr>";
    
    $html .= "<tr>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Email:</td>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd;'><a href='mailto:" . htmlspecialchars($data['email']) . "'>" . htmlspecialchars($data['email']) . "</a></td>";
    $html .= "</tr>";
    
    $html .= "<tr style='background-color: #f8f9fa;'>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Position:</td>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd;'><strong style='color: #e31e24;'>" . htmlspecialchars($data['position']) . "</strong></td>";
    $html .= "</tr>";
    
    if (!empty($data['portfolio'])) {
        $html .= "<tr>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Portfolio:</td>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd;'><a href='" . htmlspecialchars($data['portfolio']) . "' target='_blank'>" . htmlspecialchars($data['portfolio']) . "</a></td>";
        $html .= "</tr>";
    }
    
    if (!empty($data['resume_filename'])) {
        $html .= "<tr style='background-color: #fff3cd;'>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Resume:</td>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd;'>";
    $html .= "<strong>" . htmlspecialchars($data['resume_filename']) . "</strong><br>";
        $html .= "<small style='color: #666;'>File saved on server. Access via backend panel.</small>";
        $html .= "</td>";
        $html .= "</tr>";
    }
    
    if (!empty($data['message'])) {
        $html .= "<tr>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;'>Cover Letter:</td>";
        $html .= "<td style='padding: 12px; border: 1px solid #ddd;'>" . nl2br(htmlspecialchars($data['message'])) . "</td>";
        $html .= "</tr>";
    }
    
    $html .= "<tr style='background-color: #f8f9fa;'>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd; font-weight: bold;'>Submitted:</td>";
    $html .= "<td style='padding: 12px; border: 1px solid #ddd;'>" . date('Y-m-d H:i:s T') . "</td>";
    $html .= "</tr>";
    $html .= "</table>";
    
    $html .= "<div style='text-align: center; margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 5px;'>";
    $html .= "<p style='margin: 0; color: #0066cc;'><strong>Quick Actions:</strong></p>";
    $html .= "<p style='margin: 5px 0 0 0;'>";
    $html .= "<a href='mailto:" . htmlspecialchars($data['email']) . "?subject=Re: Your application for " . htmlspecialchars($data['position']) . " position' style='color: #e31e24; text-decoration: none; margin-right: 15px;'>Reply to Candidate</a>";
    if (!empty($data['portfolio'])) {
        $html .= "<a href='" . htmlspecialchars($data['portfolio']) . "' target='_blank' style='color: #e31e24; text-decoration: none;'>View Portfolio</a>";
    }
    $html .= "</p>";
    $html .= "</div>";
    
    $html .= "</div>";
    $html .= "</body></html>";
    
    return $html;
}

// Test email function (for debugging)
function testEmailConfiguration() {
    $test_data = [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'service' => 'Website Development',
        'message' => 'This is a test email to verify the PHPMailer SMTP notification system is working correctly.'
    ];
    
    $result = sendNotificationEmail('contact', $test_data);
    
    if ($result) {
        echo "✅ Test email sent successfully using PHPMailer SMTP!";
    } else {
        echo "❌ Test email failed. Check error logs for details.";
    }
    
    return $result;
}
?>
