/**
 * closing.section.js
 *
 * Purpose:
 * Owns final narrative fields in report preview:
 * - overall benefit
 * - affirmation
 * - expert recommendation
 */

export function syncClosingSection() {
  document.getElementById("r_overallbenefit").textContent =
    document.getElementById("overallBenefit")?.value || "";

  document.getElementById("r_affirmation").textContent =
    document.getElementById("phase3")?.value || "";

  document.getElementById("r_expert_rec").textContent =
    document.getElementById("expertRec")?.value || "";
}

