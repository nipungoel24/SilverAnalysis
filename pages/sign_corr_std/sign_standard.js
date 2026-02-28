/**
 * sign_standard.js
 *
 * Purpose:
 * Entry module for the Standard Signature Correction page.
 * This file wires section modules and bootstraps all page features.
 *
 * Section Map:
 * 1) Section-module imports
 * 2) Global bridge for inline HTML handlers
 * 3) Bootstrap and page actions
 */

// -----------------------------------------------------------------------------
// Section 1: Section-module imports
// -----------------------------------------------------------------------------
import { addMistakeItem, removeMistakeItem } from "./js/sections/mistakes.section.js";
import {
  addStrengthItem,
  removeStrengthItem,
  addWeaknessItem,
  removeWeaknessItem
} from "./js/sections/personality.section.js";
import { addCorrectionItem, removeCorrectionItem } from "./js/sections/corrections.section.js";

import { setupImageUploads } from "./js/uploads.js";
import { applyFormToReport } from "./js/report-sync.js";
import { domToPdfBlob, bindPdfActions } from "./js/pdf.js";

// -----------------------------------------------------------------------------
// Section 2: Global bridge for inline HTML handlers
// -----------------------------------------------------------------------------
// HTML still uses onclick attributes. Exposing these globally preserves behavior.
globalThis.addMistakeItem = addMistakeItem;
globalThis.removeMistakeItem = removeMistakeItem;
globalThis.addStrengthItem = addStrengthItem;
globalThis.removeStrengthItem = removeStrengthItem;
globalThis.addWeaknessItem = addWeaknessItem;
globalThis.removeWeaknessItem = removeWeaknessItem;
globalThis.addCorrectionItem = addCorrectionItem;
globalThis.removeCorrectionItem = removeCorrectionItem;

// Expose shared helpers for optional external usage/debugging.
globalThis.applyFormToReport = applyFormToReport;
globalThis.domToPdfBlob = domToPdfBlob;

// -----------------------------------------------------------------------------
// Section 3: Bootstrap and page actions
// -----------------------------------------------------------------------------
setupImageUploads();
bindPdfActions();

document.getElementById("applyBtn")?.addEventListener("click", applyFormToReport);

document.getElementById("resetBtn")?.addEventListener("click", () => {
  if (!confirm("Reset form and report to defaults?")) return;
  location.reload();
});
