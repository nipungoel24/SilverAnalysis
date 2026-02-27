/**
 * sign-premium.ui.js (module hub)
 *
 * Module hub responsibilities:
 * 1) Import section-specific modules from ./ui/*
 * 2) Expose required functions on `globalThis` so:
 *    - inline HTML onclick handlers continue to work
 *    - non-module scripts (e.g., sign-premium.pdf.js) can call shared methods
 * 3) Run one-time UI bootstrapping (dropdown/listeners/uploads)
 */

import { createEditableDropdown } from "./ui/shared.js";
import { initSignatureMistakeDropdown } from "./ui/section-1.js";
import {
  refreshHandwritingCategoryDropdown,
  promptAddHandwritingMistake,
  renderHandMistakeDescriptions
} from "./ui/section-2.js";
import {
  renderCorrectionDescriptions,
  addCorrectionItem,
  removeCorrectionItem
} from "./ui/section-4.js";
import { generateOverallBenefit } from "./ui/section-5.js";
import { renderHandwritingCorrectionDescriptions } from "./ui/section-6.js";
import {
  addMistakeItem,
  removeMistakeItem,
  addStrengthItem,
  removeStrengthItem,
  addWeaknessItem,
  removeWeaknessItem
} from "./ui/legacy.js";
import { setupImageUploads } from "./ui/uploads.js";
import { applyFormToReport } from "./ui/report-sync.js";

// Public bridge surface for legacy/global consumers.
// This prevents breaking existing HTML/pdfs while internally using ES modules.
globalThis.createEditableDropdown = createEditableDropdown;
globalThis.initSignatureMistakeDropdown = initSignatureMistakeDropdown;
globalThis.renderCorrectionDescriptions = renderCorrectionDescriptions;
globalThis.renderHandwritingCorrectionDescriptions = renderHandwritingCorrectionDescriptions;
globalThis.applyFormToReport = applyFormToReport;
globalThis.generateOverallBenefit = generateOverallBenefit;
globalThis.promptAddHandwritingMistake = promptAddHandwritingMistake;

globalThis.addCorrectionItem = addCorrectionItem;
globalThis.removeCorrectionItem = removeCorrectionItem;
globalThis.addMistakeItem = addMistakeItem;
globalThis.removeMistakeItem = removeMistakeItem;
globalThis.addStrengthItem = addStrengthItem;
globalThis.removeStrengthItem = removeStrengthItem;
globalThis.addWeaknessItem = addWeaknessItem;
globalThis.removeWeaknessItem = removeWeaknessItem;

// Compatibility value consumed by older flows.
globalThis.signatureCorrectionTitles = Object.keys(globalThis.getSignatureCorrectionStore());

// Bootstrap UI modules.
refreshHandwritingCategoryDropdown();
setupImageUploads();

const categorySelect = document.getElementById("handCategory");
if (categorySelect) {
  categorySelect.addEventListener("change", () => {
    const category = categorySelect.value;
    if (!category) return;

    const currentCatalog = globalThis.getHandwritingCatalog();

    createEditableDropdown({
      inputId: "handMistakeInput",
      dropdownId: "handMistakeDropdown",
      tagContainerId: "handMistakeTagContainer",
      textareaId: "handMistakes",
      listKey: "handMistakeTemp",
      defaultList: Object.keys(currentCatalog[category] || {}),
      allowAdd: false,
      allowRemove: false,
      onChange: renderHandMistakeDescriptions
    });
  });
}

document.getElementById("applyBtn")?.addEventListener("click", applyFormToReport);
document.getElementById("resetBtn")?.addEventListener("click", () => {
  if (!confirm("Reset form and report to defaults?")) return;
  location.reload();
});
