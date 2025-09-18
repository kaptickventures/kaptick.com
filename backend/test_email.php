<?php
require_once 'notifications.php';

echo "<h2>PHPMailer SMTP Email Test - Kaptick Media</h2>";

echo "<h3>Testing PHPMailer SMTP configuration...</h3>";

echo "<div style='background:#f5f5f5;padding:10px;margin:10px 0;border-radius:5px;'>";
if (testEmailConfiguration()) {
    echo "<p style='color: green;'>✅ PHPMailer SMTP test email sent successfully!</p>";
    echo "<p>Check the inboxes of nikhil@kaptick.com and harsh@kaptick.com for the test email.</p>";
} else {
    echo "<p style='color: red;'>❌ PHPMailer SMTP test email failed to send.</p>";
    echo "<p>Please check your SMTP configuration and server error logs.</p>";
}
echo "</div>";

echo "<h3>Email Configuration Details:</h3>";
echo "<ul>";
echo "<li><strong>SMTP Host:</strong> smtp.hostinger.com</li>";
echo "<li><strong>SMTP Port:</strong> 465 (SSL)</li>";
echo "<li><strong>From Email:</strong> no-reply@kaptick.com</li>";
echo "<li><strong>Recipients:</strong> nikhil@kaptick.com, harsh@kaptick.com</li>";
echo "<li><strong>Email Type:</strong> HTML formatted via PHPMailer</li>";
echo "<li><strong>Authentication:</strong> SMTP with SSL encryption</li>";
echo "</ul>";

echo "<h3>Next Steps:</h3>";
echo "<ol>";
echo "<li>If test email succeeded, your PHPMailer SMTP notifications are working!</li>";
echo "<li>Submit a real contact form or career application to test</li>";
echo "<li>Check spam folders if emails don't arrive</li>";
echo "<li>Monitor server error logs for any PHPMailer issues</li>";
echo "</ol>";
?>
