-- SQL script to add phone column to website_leads table
-- Run this in your MySQL database

ALTER TABLE website_leads 
ADD COLUMN phone VARCHAR(15) NOT NULL DEFAULT '' 
AFTER email;

-- Update the column to be after email for better organization
-- ALTER TABLE website_leads MODIFY COLUMN phone VARCHAR(15) NOT NULL AFTER email;
