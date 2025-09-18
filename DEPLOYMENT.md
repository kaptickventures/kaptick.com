# Kaptick Media - Backend Deployment Instructions

## Overview
Your backend is now ready! Here's what we've created:

### ✅ **What's Done**
1. **PHP Backend** - Complete backend system for form handling
2. **Database Integration** - MySQL database setup with your credentials
3. **CORS Support** - Proper headers for React app communication
4. **Form Handlers** - Contact form and career application handlers
5. **Google Sheets Ready** - Prepared for Google Sheets/Drive integration
6. **React Forms Updated** - All forms now point to your PHP backend

---

## 📁 **Files Created**
```
backend/
├── config.php          # Database connection & helpers
├── contact.php          # Contact form handler
├── careers.php          # Career applications handler  
├── helpers.php          # Google Sheets/Drive integration (ready)
├── setup.php           # Database table creator
└── README.md           # Documentation
```

---

## 🚀 **Deployment Steps**

### 1. **Upload Backend Files**
- Upload the entire `backend/` folder to your Hostinger `public_html/` directory
- Final structure: `public_html/backend/config.php`, etc.

### 2. **Set Directory Permissions**
```bash
# On your Hostinger file manager or via SSH:
chmod 755 backend/
chmod 755 backend/uploads/
chmod 755 backend/uploads/resumes/
```

### 3. **Create Database Tables**
- Visit: `https://kaptick.com/backend/setup.php`
- This will create the required MySQL tables

### 4. **Update React Form URLs**
✅ **COMPLETED** - All URLs have been updated to use `kaptick.com`:
- `src/components/ContactForm.tsx` → `https://kaptick.com/backend/contact.php`
- `src/pages/Careers.tsx` → `https://kaptick.com/backend/careers.php`
- `src/pages/WebDevelopmentLanding.tsx` → `https://kaptick.com/backend/contact.php`

### 5. **Build and Deploy React App**
```bash
npm run build
# Upload the dist/ folder contents to public_html/
# Upload .htaccess to public_html/ (already created)
```

---

## 🗄️ **Database Tables Created**

### `contact_forms` table:
- id, name, email, phone, subject, message, created_at, sheets_synced

### `career_applications` table:  
- id, name, email, position, portfolio, message, resume_file, drive_file_url, created_at, sheets_synced

---

## 🔗 **API Endpoints**

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/backend/contact.php` | POST | Contact form submissions |
| `/backend/careers.php` | POST | Career applications |
| `/backend/setup.php` | GET | Create database tables |

---

## ✅ **Testing**

1. **Database Connection**: Visit `/backend/setup.php`
2. **Contact Form**: Submit a test contact form
3. **Career Form**: Submit a test career application
4. **Check Database**: Verify data appears in your MySQL tables

---

## 🔮 **Next Steps (Optional)**

### Google Sheets Integration:
1. Get Google Sheets API credentials
2. Update functions in `helpers.php`
3. Enable automatic sync to your Google Sheet

### Email Notifications:
1. Configure email settings in `helpers.php`
2. Get notifications when forms are submitted

---

## 🐛 **Troubleshooting**

### Common Issues:
- **404 errors**: Check file paths and permissions
- **Database errors**: Verify credentials in `config.php`
- **CORS errors**: Ensure backend URL matches in React forms
- **File uploads**: Check `uploads/` directory permissions

### Debug Mode:
- Check PHP error logs in Hostinger control panel
- Add `error_reporting(E_ALL);` to `config.php` for detailed errors

---

## 📞 **Support**

If you encounter issues:
1. Check Hostinger error logs
2. Verify all files uploaded correctly
3. Ensure database credentials are correct
4. Test endpoints individually

---

**🎉 Your backend is production-ready! Deploy it and your forms will work seamlessly.**
