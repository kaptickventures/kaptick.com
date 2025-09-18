<?php
require_once 'config.php';

try {
    $pdo = getDatabaseConnection();
    
    // Create download_tokens table
    $sql = "CREATE TABLE IF NOT EXISTS download_tokens (
        id INT AUTO_INCREMENT PRIMARY KEY,
        token VARCHAR(64) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL,
        lead_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP NOT NULL,
        used_at TIMESTAMP NULL,
        INDEX idx_token (token),
        INDEX idx_expires (expires_at)
    )";
    
    $pdo->exec($sql);
    echo "✅ download_tokens table created successfully!\n";
    
    // Clean up expired tokens (older than 7 days)
    $cleanupSql = "DELETE FROM download_tokens WHERE expires_at < DATE_SUB(NOW(), INTERVAL 7 DAY)";
    $pdo->exec($cleanupSql);
    echo "✅ Cleaned up expired tokens.\n";
    
} catch (Exception $e) {
    echo "❌ Error creating table: " . $e->getMessage() . "\n";
}
?>
