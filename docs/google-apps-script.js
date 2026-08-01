/**
 * Google Apps Script for Sterling Crest website enquiries.
 *
 * Setup:
 * 1. Create a Google Sheet with a worksheet named exactly: Website Enquiries
 * 2. Row 1 headings (optional but recommended):
 *    Timestamp | Full name | Email | Phone | Client type | Service |
 *    Preferred contact | Message | Privacy accepted | Source page | User agent
 * 3. Extensions → Apps Script → replace code with this file.
 * 4. Set SHEET_ID below to your spreadsheet ID
 *    (from the sheet URL: https://docs.google.com/spreadsheets/d/SHEET_ID/edit)
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. After ANY code change: Deploy → Manage deployments → Edit →
 *    Version: New version → Deploy
 * 7. Paste the Web App URL into GOOGLE_SHEETS_WEBHOOK_URL in .env.local
 *
 * The website API only treats the submission as successful when the response is:
 *   { "success": true }
 */
const SHEET_ID = "PASTE_YOUR_SPREADSHEET_ID_HERE";
const SHEET_NAME = "Website Enquiries";

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ success: false, error: "Missing request body" });
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      return jsonResponse_({
        success: false,
        error: 'Sheet "' + SHEET_NAME + '" was not found.',
      });
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.email || "",
      data.phone || "",
      data.clientType || "",
      data.serviceRequired || "",
      data.preferredContactMethod || "",
      data.message || "",
      data.privacyAccepted === true ? "Yes" : "No",
      data.sourcePage || "",
      data.userAgent || "",
    ]);

    return jsonResponse_({ success: true });
  } catch (error) {
    return jsonResponse_({
      success: false,
      error: String((error && error.message) || error || "Submission failed"),
    });
  }
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/** Optional browser check: open the web app URL in a browser. */
function doGet() {
  return jsonResponse_({
    ok: true,
    message: "Sterling Crest enquiry webhook is running.",
  });
}
