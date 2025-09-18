<?php
require_once 'config.php';

// Google Sheets integration functions (placeholder for now)
function sendToGoogleSheets($data) {
    // TODO: Implement Google Sheets API integration
    // This will send form data to your Google Sheet
    
    // For now, just log the data
    error_log('Google Sheets data: ' . json_encode($data));
    
    return true;
}

// Google Drive integration functions (placeholder for now)
function uploadToGoogleDrive($file_path) {
    // TODO: Implement Google Drive API integration
    // This will upload resume files to your Google Drive folder
    
    if (!file_exists($file_path)) {
        return null;
    }
    
    // For now, just log the file path
    error_log('Google Drive upload: ' . $file_path);
    
    return 'https://drive.google.com/file/d/placeholder_id/view';
}

// Email notification functions
function sendEmailNotification($type, $data) {
    // TODO: Implement email notifications
    // This will send email alerts when forms are submitted
    
    $to = 'careers@kaptick.com';
    $subject = ($type === 'contact') ? 'New Contact Form Submission' : 'New Career Application';
    
    $message = "New {$type} form submission:\n\n";
    $message .= "Name: {$data['name']}\n";
    $message .= "Email: {$data['email']}\n";
    
    if ($type === 'contact') {
        $message .= "Subject: {$data['subject']}\n";
        $message .= "Phone: {$data['phone']}\n";
        $message .= "Message: {$data['message']}\n";
    } else {
        $message .= "Position: {$data['position']}\n";
        $message .= "Portfolio: {$data['portfolio']}\n";
        $message .= "Message: {$data['message']}\n";
        $message .= "Resume: {$data['resume_file']}\n";
    }
    
    $message .= "\nSubmitted at: {$data['timestamp']}";
    
    // Use PHP's mail() function or a service like SendGrid
    // mail($to, $subject, $message);
    
    error_log("Email notification: {$subject}");
    
    return true;
}

// Utility function to create database tables
function createDatabaseTables() {
    try {
        $pdo = getDatabaseConnection();
        
        // Create contact_forms table
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS contact_forms (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20),
                service VARCHAR(255),
                website VARCHAR(500),
                description TEXT,
                subject VARCHAR(500),
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                sheets_synced BOOLEAN DEFAULT FALSE,
                INDEX idx_email (email),
                INDEX idx_created_at (created_at)
            )
        ");
        
        // Create career_applications table
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS career_applications (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                position VARCHAR(255) NOT NULL,
                portfolio VARCHAR(500),
                message TEXT,
                resume_filename VARCHAR(255),
                resume_path VARCHAR(500),
                drive_file_id VARCHAR(255),
                drive_file_url VARCHAR(500),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                sheets_synced BOOLEAN DEFAULT FALSE,
                INDEX idx_email (email),
                INDEX idx_position (position),
                INDEX idx_created_at (created_at)
            )
        ");
        
        return true;
    } catch (PDOException $e) {
        error_log('Database table creation error: ' . $e->getMessage());
        return false;
    }
}

// Admin function to sync unsent data to Google Sheets
function syncPendingToSheets() {
    try {
        $pdo = getDatabaseConnection();
        
        // Get unsynced contact forms
        $stmt = $pdo->query("SELECT * FROM contact_forms WHERE sheets_synced = FALSE ORDER BY id ASC");
        $contacts = $stmt->fetchAll();
        
        foreach ($contacts as $contact) {
            $sheets_data = [
                'form_type' => 'contact',
                'id' => $contact['id'],
                'name' => $contact['name'],
                'email' => $contact['email'],
                'phone' => $contact['phone'],
                'subject' => $contact['subject'],
                'message' => $contact['message'],
                'timestamp' => $contact['created_at']
            ];
            
            if (sendToGoogleSheets($sheets_data)) {
                // Mark as synced
                $update_stmt = $pdo->prepare("UPDATE contact_forms SET sheets_synced = TRUE WHERE id = ?");
                $update_stmt->execute([$contact['id']]);
            }
        }
        
        // Get unsynced career applications
        $stmt = $pdo->query("SELECT * FROM career_applications WHERE sheets_synced = FALSE ORDER BY id ASC");
        $applications = $stmt->fetchAll();
        
        foreach ($applications as $app) {
            $sheets_data = [
                'form_type' => 'career',
                'id' => $app['id'],
                'name' => $app['name'],
                'email' => $app['email'],
                'position' => $app['position'],
                'portfolio' => $app['portfolio'],
                'message' => $app['message'],
                'resume_file' => $app['resume_file'],
                'drive_file_url' => $app['drive_file_url'],
                'timestamp' => $app['created_at']
            ];
            
            // Upload to Drive if not already uploaded
            if ($app['resume_file'] && !$app['drive_file_url']) {
                $drive_url = uploadToGoogleDrive($app['resume_file']);
                if ($drive_url) {
                    $update_stmt = $pdo->prepare("UPDATE career_applications SET drive_file_url = ? WHERE id = ?");
                    $update_stmt->execute([$drive_url, $app['id']]);
                    $sheets_data['drive_file_url'] = $drive_url;
                }
            }
            
            if (sendToGoogleSheets($sheets_data)) {
                // Mark as synced
                $update_stmt = $pdo->prepare("UPDATE career_applications SET sheets_synced = TRUE WHERE id = ?");
                $update_stmt->execute([$app['id']]);
            }
        }
        
        return true;
    } catch (PDOException $e) {
        error_log('Sync error: ' . $e->getMessage());
        return false;
    }
}
?>
