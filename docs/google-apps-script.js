/**
 * Google Apps Script for Sterling Crest website enquiries.
 *
 * Setup:
 * 1. Create a Google Sheet with a worksheet named "Website Enquiries".
 * 2. Add column headings in row 1 (see README).
 * 3. Extensions → Apps Script → paste this file.
 * 4. Deploy → New deployment → Web app.
 * 5. Execute as: Me
 * 6. Who has access: Anyone
 * 7. Copy the Web App URL into GOOGLE_SHEETS_WEBHOOK_URL (server side only).
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Website Enquiries");

    if (!sheet) {
      throw new Error('Sheet "Website Enquiries" was not found.');
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
      data.userAgent || ""
    ]);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: true
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: false,
          error: "Submission failed"
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
