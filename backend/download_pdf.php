<?php
require_once 'config.php';

// Set headers to prevent caching and direct access
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

// Check if token is provided
if (!isset($_GET['token']) || empty($_GET['token'])) {
    http_response_code(403);
    die('Access denied. Invalid or missing token.');
}

$token = $_GET['token'];

try {
    // Get database connection
    $pdo = getDatabaseConnection();
    
    // Verify token exists and is valid (not expired)
    $stmt = $pdo->prepare("SELECT id, email, created_at FROM download_tokens WHERE token = ? AND expires_at > NOW()");
    $stmt->execute([$token]);
    $tokenData = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$tokenData) {
        http_response_code(403);
        die('Access denied. Token expired or invalid.');
    }
    
    // Check if token has already been used (optional security measure)
    $stmt = $pdo->prepare("SELECT used_at FROM download_tokens WHERE token = ? AND used_at IS NOT NULL");
    $stmt->execute([$token]);
    if ($stmt->fetch()) {
        http_response_code(403);
        die('Access denied. Download link has already been used.');
    }
    
    // Mark token as used
    $stmt = $pdo->prepare("UPDATE download_tokens SET used_at = NOW() WHERE token = ?");
    $stmt->execute([$token]);
    
    // PDF file path
    $pdfPath = __DIR__ . '/../public/assets/The 7 Online Assets Every Business Needs.pdf';
    
    if (!file_exists($pdfPath)) {
        http_response_code(404);
        die('File not found.');
    }
    
    // Set headers for PDF download
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="The-7-Online-Assets-Every-Business-Needs.pdf"');
    header('Content-Length: ' . filesize($pdfPath));
    header('Content-Transfer-Encoding: binary');
    header('Accept-Ranges: bytes');
    
    // Output the file
    readfile($pdfPath);
    
    // Log successful download
    error_log("PDF downloaded successfully by: " . $tokenData['email'] . " with token: " . $token);
    
} catch (Exception $e) {
    error_log("PDF download error: " . $e->getMessage());
    http_response_code(500);
    die('An error occurred while processing your request.');
}
?>
