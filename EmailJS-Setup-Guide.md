# EmailJS Setup Guide for UMD MUAS Website

This guide will help you set up EmailJS to handle the contact and sponsor form submissions on your website.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from client-side JavaScript, without requiring a backend server. It's perfect for static websites and React applications.

## Setup Process

### 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows up to 200 emails per month, which should be sufficient for most small websites

### 2. Connect an Email Service

1. In your EmailJS dashboard, go to "Email Services" and click "Add New Service"
2. Choose a service provider (Gmail, Outlook, Yahoo, etc.)
3. Follow the authentication steps to connect your email account
4. Give your service a name (e.g., "UMD MUAS Contact")
5. Note the **Service ID** - you'll need this later

### 3. Create Email Templates

You'll need to create two email templates: one for the contact form and one for the sponsor form.

#### For Contact Form:

1. Go to "Email Templates" and click "Create New Template"
2. Use a descriptive name like "Contact Form Template"
3. Design your email template. Here's a basic example:

   **Subject:**
   ```
   New Contact Form Message from {{from_name}}
   ```

   **Content:**
   ```html
   <h2>New Contact Message</h2>
   <p><strong>From:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Subject:</strong> {{subject}}</p>
   <h3>Message:</h3>
   <p>{{message}}</p>
   ```

4. Test the template to make sure it works correctly
5. Note the **Template ID** - you'll need this later

#### For Sponsor Form:

1. Create another template called "Sponsor Form Template"
2. Design the template:

   **Subject:**
   ```
   New Sponsorship Inquiry from {{from_name}} at {{company}}
   ```

   **Content:**
   ```html
   <h2>New Sponsorship Inquiry</h2>
   <p><strong>From:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Company:</strong> {{company}}</p>
   <h3>Message:</h3>
   <p>{{message}}</p>
   ```

3. Test the template and note the **Template ID**

### 4. Update Your React Components

#### In the Contact.js file:

1. Update the EmailJS configuration in the `handleSubmit` function:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',  // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID', // Replace with your Contact Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'   // Replace with your Public Key
);
```

#### In the Sponsors.js file:

1. Update the EmailJS configuration in the `handleSubmit` function:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',  // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID', // Replace with your Sponsor Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'   // Replace with your Public Key
);
```

### 5. Get Your Public Key

1. In the EmailJS dashboard, go to "Account" > "API Keys"
2. Copy your Public Key
3. Replace 'YOUR_PUBLIC_KEY' in both components with this value

### 6. Testing The Forms

1. After implementing the changes, test both forms to make sure they send emails correctly
2. Check your email to verify that the emails are formatted correctly

## Additional Recommendations

### Spam Prevention

To prevent spam submissions:
- Consider adding a CAPTCHA to your forms using reCAPTCHA
- Add rate limiting for IP addresses if spam becomes an issue

### Form Error Handling

The current implementation has basic error handling, but you may want to add more specific error messages for different types of failures (network issues, validation problems, etc.)

### Email Templates

Customize your email templates further to match your brand and include any additional information you might need.

## Alternative Approaches

If you need more advanced features or higher volume:

1. **Server API**: Create a backend API to handle form submissions
2. **Form Services**: Use services like Formspree or GetForm
3. **Netlify Forms**: If hosting on Netlify, use their built-in form handling

## Support

If you encounter any issues:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/contact/](https://www.emailjs.com/contact/) 