# Resend API Setup Guide

## Overview
This guide explains how to set up Resend API for sending emails through a Vercel serverless function. This approach keeps API keys secure on the server-side and never exposes them to the client.

## Prerequisites
- A Vercel account and project
- A Resend account (free tier available)
- Node.js project with TypeScript support

## Installation

### Step 1: Install Required Packages
```bash
npm install resend @vercel/node
```

### Step 2: Create API Route
Create a serverless function at `api/send-email.ts` (or `api/send-email.js` for JavaScript):

```typescript
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ 
      error: 'Email configuration not found. Please configure environment variables.' 
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Helper function to escape HTML
    const escapeHtml = (text: string) => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    // Get recipient email from environment variable
    const recipientEmail = process.env.RESEND_TO_EMAIL || 'your-default@example.com';

    // Escape user input to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: recipientEmail,
      replyTo: email,
      subject: `New message from ${safeName} - Your Site Name`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      text: `
New contact form submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
      `,
    });

    if (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
```

### Step 3: Update Frontend Contact Form
Update your contact form component to call the API route:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send email');
    }

    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    setError('Error sending message. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
```

## Resend Account Setup

### Step 1: Create Resend Account
1. Go to [Resend](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### Step 2: Domain Verification (Optional for Testing)
For testing, you can use the default `onboarding@resend.dev` email address.

For production:
1. Go to Domains in Resend dashboard
2. Add your domain
3. Add the required DNS records (SPF, DKIM, DMARC)
4. Wait for domain verification
5. Use your verified domain email for `RESEND_FROM_EMAIL`

## Environment Variables Setup

### Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variables:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=your-verified-email@yourdomain.com
RESEND_TO_EMAIL=recipient@yourdomain.com
```

**Variable Descriptions:**
- `RESEND_API_KEY` (Required) - Your Resend API key from the dashboard
- `RESEND_FROM_EMAIL` (Optional) - Email address to send from. Defaults to `onboarding@resend.dev` if not set
- `RESEND_TO_EMAIL` (Optional) - Email address to receive contact form submissions. Set your default recipient email

### Local Development
For local development, create a `.env.local` file (make sure it's in `.gitignore`):

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com
```

**Important:** Never commit `.env` files to version control. Add to `.gitignore`:
```
.env
.env.local
.env.*
!.env.example
```

## File Structure
```
your-project/
├── api/
│   └── send-email.ts          # Serverless function
├── src/
│   └── components/
│       └── Contact.tsx         # Contact form component
├── .env.local                  # Local environment variables (gitignored)
└── package.json
```

## Customization

### Email Template
Modify the email template in `api/send-email.ts`:
- Change the `subject` line to match your site name
- Customize the HTML and text email templates
- Adjust field names to match your form structure

### Form Fields
Update the API route and frontend form to match your needs:
- Add or remove fields (e.g., company, subject)
- Modify validation rules
- Customize error messages

### Error Messages
Customize error messages in both:
- API route (`api/send-email.ts`) - Server-side error messages
- Contact form component - Client-side error messages

## Security Features
- ✅ API key stored server-side only (never exposed to client)
- ✅ Email validation on both client and server
- ✅ HTML escaping to prevent XSS attacks
- ✅ Rate limiting handled by Vercel
- ✅ CORS protection via Vercel serverless functions
- ✅ Input sanitization and validation

## Testing

### Test the Setup
1. Fill out the contact form on your site
2. Check the recipient email inbox
3. Verify the email was received correctly
4. Check Vercel function logs in the dashboard if there are issues

### Vercel Function Logs
1. Go to Vercel dashboard
2. Navigate to your project
3. Click on **Functions** tab
4. View logs for `/api/send-email`

## Troubleshooting

### Email Not Sending
- **Check API key:** Verify `RESEND_API_KEY` is correctly set in Vercel
- **Check logs:** Review Vercel function logs for error messages
- **Verify email format:** Ensure email addresses are valid
- **Test with default email:** Try using `onboarding@resend.dev` for `RESEND_FROM_EMAIL`

### Domain Not Verified
- Use `onboarding@resend.dev` for testing
- For production, verify your domain in Resend dashboard
- Check DNS records are correctly configured

### CORS Errors
- Vercel serverless functions handle CORS automatically
- Ensure you're calling `/api/send-email` from the same domain
- Check that the API route is accessible

### 500 Internal Server Error
- Verify all environment variables are set in Vercel
- Check that `RESEND_API_KEY` is valid
- Review Vercel function logs for detailed error messages

## API Route Requirements

### Request Format
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Your message here"
}
```

### Response Format
**Success (200):**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error (400/500):**
```json
{
  "error": "Error message here"
}
```

## Next Steps
1. Customize the email template to match your brand
2. Add additional form fields if needed
3. Set up domain verification for production
4. Configure email templates in Resend dashboard (optional)
5. Add rate limiting or spam protection if needed

## Additional Resources
- [Resend Documentation](https://resend.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Resend API Reference](https://resend.com/docs/api-reference)
