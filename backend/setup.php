<?php
require_once 'config.php';
require_once 'helpers.php';

echo "<h2>Setting up Kaptick Media Backend</h2>";

// Create database tables
echo "<h3>Creating Database Tables...</h3>";
if (createDatabaseTables()) {
    echo "<p style='color: green;'>✓ Database tables created successfully!</p>";
} else {
    echo "<p style='color: red;'>✗ Failed to create database tables</p>";
}

// Create upload directories
echo "<h3>Creating Upload Directories...</h3>";
$directories = [
    'uploads/',
    'uploads/resumes/'
];

foreach ($directories as $dir) {
    if (!file_exists($dir)) {
        if (mkdir($dir, 0755, true)) {
            echo "<p style='color: green;'>✓ Created directory: $dir</p>";
        } else {
            echo "<p style='color: red;'>✗ Failed to create directory: $dir</p>";
        }
    } else {
        echo "<p style='color: blue;'>→ Directory already exists: $dir</p>";
    }
}

// Create .htaccess for uploads directory (security)
$htaccess_content = "# Deny direct access to uploaded files\n";
$htaccess_content .= "Options -Indexes\n";
$htaccess_content .= "# Allow only specific file types\n";
$htaccess_content .= "<FilesMatch \"\\.(pdf|doc|docx)$\">\n";
$htaccess_content .= "    Order Allow,Deny\n";
$htaccess_content .= "    Allow from all\n";
$htaccess_content .= "</FilesMatch>\n";

file_put_contents('uploads/.htaccess', $htaccess_content);
echo "<p style='color: green;'>✓ Created security .htaccess for uploads</p>";

echo "<h3>Setup Complete!</h3>";
echo "<p><strong>Next Steps:</strong></p>";
echo "<ol>";
echo "<li>Test contact form at: <a href='contact.php' target='_blank'>contact.php</a></li>";
echo "<li>Test careers form at: <a href='careers.php' target='_blank'>careers.php</a></li>";
echo "<li>Check database tables in your MySQL panel</li>";
echo "<li>Set up Google Sheets integration in helpers.php</li>";
echo "</ol>";

// Display table information
echo "<h3>Database Tables Created:</h3>";
echo "<ul>";
echo "<li><strong>contact_forms</strong> - Stores contact form submissions</li>";
echo "<li><strong>career_applications</strong> - Stores career applications with resume files</li>";
echo "</ul>";

echo "<h3>Upload Directory Structure:</h3>";
echo "<pre>";
echo "backend/\n";
echo "├── uploads/\n";
echo "│   ├── .htaccess (security)\n";
echo "│   └── resumes/\n";
echo "│       └── [uploaded resume files]\n";
echo "</pre>";
?>
