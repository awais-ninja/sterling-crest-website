# Sterling Crest Accountants Website

Next.js (App Router) marketing website for Sterling Crest Accountants Ltd.

> **Legal review warning**  
> The website privacy policy, cookie policy, terms, regulatory statements and professional claims must be reviewed and confirmed by management or an appropriate legal/compliance professional before public launch.

## Stack

- Next.js 16 (JavaScript only, no TypeScript)
- React 19
- Tailwind CSS 3

## Requirements

- Node.js 20+ recommended

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Business configuration

Update company details in:

```text
src/config/business.js
```

Leave unconfirmed fields as empty strings. Empty values are never shown publicly.

Legal last updated dates and retention wording live in:

```text
src/config/legal.js
```

Service page content lives in:

```text
src/data/services.js
```

## Environment variables

See `.env.example`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical production domain |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Google Apps Script Web App URL (server side only) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional Google Analytics ID |

The site builds safely without the Google Sheets webhook or analytics variables. The contact API returns a controlled error if `GOOGLE_SHEETS_WEBHOOK_URL` is not configured.

Never expose `GOOGLE_SHEETS_WEBHOOK_URL` in client side code.

## Contact form

- Form: `/contact`
- API: `POST /api/contact`
- Success page: `/thank-you`
- Submissions are validated server side and forwarded to a Google Sheet via Google Apps Script
- Includes honeypot field, rate limiting, sanitisation, loading state and accessible errors

### Connect Google Sheets

1. Create a Google Sheet.
2. Rename the first worksheet to:

```text
Website Enquiries
```

3. Add these headings to row 1:

```text
Submitted At
Full Name
Email
Phone
Client Type
Service Required
Preferred Contact Method
Message
Privacy Accepted
Source Page
User Agent
```

4. Open:

```text
Extensions → Apps Script
```

5. Paste the code from:

```text
docs/google-apps-script.js
```

6. Deploy it as a Web App.
7. Set execution access to the owner (Execute as: Me).
8. Allow access for anyone submitting the website form (Who has access: Anyone).
9. Copy the Web App URL.
10. Add it to Vercel (and `.env.local` for local testing) as:

```env
GOOGLE_SHEETS_WEBHOOK_URL=YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL
```

11. Redeploy the website.
12. Submit a test enquiry and confirm that a row appears in the Google Sheet.

## Analytics and cookies

- Analytics is disabled until `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- A consent banner appears only when analytics is configured
- Non essential scripts load only after consent

## Deployment (Vercel)

1. Import the repository into Vercel
2. Set environment variables from `.env.example`
3. Confirm `NEXT_PUBLIC_SITE_URL=https://sterlingcrest.co.uk`
4. Set `GOOGLE_SHEETS_WEBHOOK_URL` to your deployed Apps Script Web App URL
5. Deploy

Preview deployments should not be used as canonical URLs.

## Domain configuration

Production domain:

```text
https://sterlingcrest.co.uk
```

Point DNS to Vercel and verify HTTPS.

## JavaScript only policy

This project must remain JavaScript only:

- Use `.js` / `.jsx` only
- Do not add TypeScript, `tsconfig.json` or `@types/*` packages
