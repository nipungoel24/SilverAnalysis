/**
 * shared.js
 *
 * Purpose:
 * Small reusable utilities shared by multiple sign_corr_std modules.
 *
 * Section Map:
 * 1) File helpers
 * 2) Text/name helpers
 */

// -----------------------------------------------------------------------------
// Section 1: File Helpers
// -----------------------------------------------------------------------------
/**
 * Reads a local File object and returns a base64 data URL via callback.
 *
 * Used by upload modules to preview images and store report-ready image data
 * without requiring server upload.
 */
export function readImageFile(file, cb) {
  const reader = new FileReader();
  reader.onload = (e) => cb(e.target.result);
  reader.readAsDataURL(file);
}

// -----------------------------------------------------------------------------
// Section 2: Text/Name Helpers
// -----------------------------------------------------------------------------
/**
 * Sets text content for a target span and optionally converts the name
 * into possessive form (e.g., "Chris" -> "Chris'", "Nina" -> "Nina's").
 *
 * This keeps name-format rules centralized so report sections remain consistent.
 */
export function setClientName(spanId, name, possessive = false) {
  const span = document.getElementById(spanId);
  if (!span) return;

  let finalName = (name || "").trim();
  if (possessive) {
    finalName = finalName.endsWith("s") ? `${finalName}'` : `${finalName}'s`;
  }

  span.textContent = finalName;
}

