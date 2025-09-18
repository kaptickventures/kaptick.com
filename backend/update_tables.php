<?php
require_once 'config.php';

echo "<h2>Updating Database Tables for Kaptick Media</h2>";

try {
    $pdo = getDatabaseConnection();
    
    echo "<h3>Updating contact_forms table...</h3>";
    
    // Check if columns exist and add them if they don't
    $columns_to_add = [
        'service' => 'VARCHAR(255)',
        'website' => 'VARCHAR(500)', 
        'description' => 'TEXT'
    ];
    
    foreach ($columns_to_add as $column => $type) {
        try {
            // Try to add the column
            $pdo->exec("ALTER TABLE contact_forms ADD COLUMN $column $type");
            echo "<p style='color: green;'>✓ Added column: $column</p>";
        } catch (PDOException $e) {
            if (strpos($e->getMessage(), 'Duplicate column') !== false) {
                echo "<p style='color: blue;'>→ Column already exists: $column</p>";
            } else {
                echo "<p style='color: red;'>✗ Error adding column $column: " . $e->getMessage() . "</p>";
            }
        }
    }
    
    // Make subject and message columns nullable
    try {
        $pdo->exec("ALTER TABLE contact_forms MODIFY COLUMN subject VARCHAR(500) NULL");
        $pdo->exec("ALTER TABLE contact_forms MODIFY COLUMN message TEXT NULL");
        echo "<p style='color: green;'>✓ Updated subject and message columns to be nullable</p>";
    } catch (PDOException $e) {
        echo "<p style='color: orange;'>→ Note: " . $e->getMessage() . "</p>";
    }
    
    echo "<h3>Table structure updated successfully!</h3>";
    echo "<p>Your contact form should now work properly.</p>";
    
    // Show current table structure
    echo "<h3>Current contact_forms table structure:</h3>";
    $stmt = $pdo->query("DESCRIBE contact_forms");
    $columns = $stmt->fetchAll();
    
    echo "<table border='1' style='border-collapse: collapse; margin: 10px 0;'>";
    echo "<tr><th>Column</th><th>Type</th><th>Null</th><th>Key</th><th>Default</th></tr>";
    foreach ($columns as $col) {
        echo "<tr>";
        echo "<td>" . $col['Field'] . "</td>";
        echo "<td>" . $col['Type'] . "</td>";
        echo "<td>" . $col['Null'] . "</td>";
        echo "<td>" . $col['Key'] . "</td>";
        echo "<td>" . $col['Default'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    
} catch (Exception $e) {
    echo "<p style='color: red;'>Error: " . $e->getMessage() . "</p>";
}

echo "<h3>Next Steps:</h3>";
echo "<ul>";
echo "<li>Test your contact form again</li>";
echo "<li>Test your careers form</li>";
echo "<li>Check that data is being saved in the database</li>";
echo "</ul>";
?>
