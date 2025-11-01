# HMZ Iraq - Setup Guide

## Email Configuration

The contact forms on the website send emails to both `sales@hmziraq.services` and `hasanalzein2024@gmail.com`.

### Setting Up Email (SMTP)

1. **Create `.env.local` file** in the root directory:

```bash
cp .env.example .env.local
```

2. **Configure your SMTP settings** in `.env.local`:

#### Option 1: Gmail (Recommended for Testing)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
```

**To get Gmail App Password:**
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification (enable if not already)
3. Scroll to "App Passwords"
4. Generate new app password for "Mail"
5. Copy the 16-character password to `.env.local`

#### Option 2: Custom SMTP (Production)

For production, use a professional email service:
- **SendGrid**: [sendgrid.com](https://sendgrid.com)
- **Mailgun**: [mailgun.com](https://mailgun.com)
- **AWS SES**: [aws.amazon.com/ses](https://aws.amazon.com/ses/)

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

### Testing Email

1. Start development server:
```bash
npm run dev
```

2. Visit any page with contact form (e.g., homepage)
3. Fill out and submit the form
4. Check both email addresses for the message

### Production Deployment

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add all SMTP variables from `.env.local`
4. Redeploy your application

### Contact Information

The following contact information is displayed across the site:
- **Email**: sales@hmziraq.services
- **Secondary Email**: hasanalzein2024@gmail.com
- **Phone**: +964 70 106 0083

These are hardcoded in `src/components/ContactInfo.tsx` - update them if needed.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── [lang]/              # Language-specific routes
│   └── api/contact/         # Email API endpoint
├── components/
│   ├── ContactForm.tsx      # Contact form component
│   ├── ContactInfo.tsx      # Contact info display
│   └── SchemaMarkup.tsx     # SEO schema
├── content/                 # Content data
│   ├── businessTypes.ts     # 198 business types
│   ├── services.ts          # 88 digital services
│   ├── iraqiKeywords.ts     # Iraqi dialect keywords
│   └── blogPosts.ts         # Blog content
└── globals.css              # Global styles + animations

```

## Features

✅ **Dramatic UI Improvements**
- Modern gradient backgrounds
- Smooth animations and transitions
- Card hover effects
- Glass morphism effects
- Responsive design

✅ **Contact Forms**
- Present on every page
- Real-time validation
- Success/error feedback
- Context-aware (pre-fills service/business/city info)

✅ **Email Integration**
- Sends to both sales emails automatically
- Beautiful HTML email templates
- Includes form context and user details

✅ **Contact Information Display**
- Phone and email on all pages
- Three display variants (header/footer/inline)
- Click-to-call and click-to-email functionality

✅ **SEO Optimization**
- 17.4M+ potential pages
- Dynamic meta tags
- Schema.org markup
- Sitemap generation
- ISR (Incremental Static Regeneration)

## Support

For issues or questions, contact:
- Email: hasanalzein2024@gmail.com
- Phone: +964 70 106 0083
