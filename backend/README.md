# Kaptick Media Backend

This PHP backend handles form submissions for the Kaptick Media website.

## Files Structure

```
backend/
├── config.php          # Database connection and helper functions
├── contact.php          # Contact form handler
├── careers.php          # Career application handler
├── helpers.php          # Google Sheets/Drive integration helpers
├── setup.php           # Database table creation script
└── uploads/            # Directory for uploaded files
    └── resumes/        # Resume files storage
```

## Database Tables

### contact_forms
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- name (VARCHAR(255), NOT NULL)
- email (VARCHAR(255), NOT NULL)
- phone (VARCHAR(20), NULLABLE)
- subject (VARCHAR(500), NOT NULL)
- message (TEXT, NOT NULL)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- sheets_synced (BOOLEAN, DEFAULT FALSE)

### career_applications
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- name (VARCHAR(255), NOT NULL)
- email (VARCHAR(255), NOT NULL)
- position (VARCHAR(255), NOT NULL)
- portfolio (VARCHAR(500), NOT NULL)
- message (TEXT, NOT NULL)
- resume_file (VARCHAR(500), NULLABLE)
- drive_file_id (VARCHAR(255), NULLABLE)
- drive_file_url (VARCHAR(500), NULLABLE)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- sheets_synced (BOOLEAN, DEFAULT FALSE)

## API Endpoints

### POST /backend/contact.php
Handles contact form submissions.

**Request Body (JSON):**
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "subject": "Business Inquiry",
    "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
    "success": true,
    "message": "Contact form submitted successfully",
    "data": {
        "id": 1,
        "timestamp": "2024-08-24 12:00:00"
    }
}
```

### POST /backend/careers.php
Handles career application submissions.

**Request Body (JSON with base64 file):**
```json
{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "position": "Web Development Intern",
    "portfolio": "https://github.com/jane",
    "message": "I'm excited to apply for this position.",
    "resumeBase64": "base64_encoded_file_content",
    "resumeFileName": "resume.pdf",
    "resumeMimeType": "application/pdf"
}
```

**Response:**
```json
{
    "success": true,
    "message": "Career application submitted successfully",
    "data": {
        "id": 1,
        "timestamp": "2024-08-24 12:00:00"
    }
}
```

## Setup Instructions

1. **Upload files to Hostinger:**
   - Upload all PHP files to your `public_html/backend/` directory
   - Ensure `uploads/` directory has write permissions (755 or 775)

2. **Run setup script:**
   - Visit `https://yourdomain.com/backend/setup.php` to create database tables

3. **Update React forms:**
   - Change form submission URLs to use your PHP endpoints
   - Update CORS settings if needed

4. **Configure Google Integration:**
   - Set up Google Sheets/Drive API credentials
   - Update functions in `helpers.php`

## Security Notes

- All inputs are sanitized and validated
- Prepared statements prevent SQL injection
- File uploads are restricted and have unique names
- CORS headers allow cross-origin requests
- Error logging helps with debugging

## Next Steps

1. Test the endpoints with your React forms
2. Set up Google Sheets/Drive API integration
3. Configure email notifications
4. Set up automated backups for uploaded files
