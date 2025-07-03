# EmailJS Setup Guide

## Overview
The contact form uses EmailJS to send emails directly from the frontend. This requires setting up environment variables for configuration.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS](https://emailjs.com) and create an account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key from the Integration tab

### 2. Environment Variables
Create a `.env` file in your project root with the following variables:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 3. Vercel Deployment
In your Vercel dashboard, add these environment variables:
- Go to Project Settings > Environment Variables
- Add each variable with its corresponding value
- Redeploy your application

### 4. EmailJS Template Variables
Your EmailJS template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Recipient name (carbonprint)

### 5. Example Template
```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent via carbonprint contact form
```

## Security Note
- Environment variables starting with `VITE_` are exposed to the client
- EmailJS Public Key is safe to expose as it's designed for frontend use
- Never expose your EmailJS Private Key 