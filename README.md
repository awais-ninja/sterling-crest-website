# Sterling Crest Accountants

Next.js website for [Sterling Crest Accountants](https://www.sterlingcrest.co.uk).

## SEO and Local Search Setup

### Preferred domain

`https://www.sterlingcrest.co.uk`

### Google Analytics and Tag Manager

Public IDs (also overridable via env):

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ZPV6WDL4E5
NEXT_PUBLIC_GTM_ID=GTM-TL93BP5Z
```

- Tags are always present in the page so Google can verify them
- Google Consent Mode defaults to `analytics_storage: denied`
- Storage is granted only after the visitor accepts analytics cookies
- Do not send names, emails, phone numbers or enquiry messages
- If GTM also fires the same GA4 ID, disable that GTM tag to avoid double counting

**Do not add fake reviews, ratings, memberships, accreditations or local office locations.**
