/**
 * client-identity.section.js
 *
 * Purpose:
 * Owns the full "client identity" section sync from form inputs to report header/footer.
 *
 * Maintainer note:
 * If developer A is updating name/date/report-id behavior, all related DOM sync logic
 * is isolated in this file so other sections are not affected.
 */

import { setClientName } from "../shared.js";

/**
 * Syncs client metadata fields to all report placeholders.
 */
export function syncClientIdentitySection() {
  const clientName = document.getElementById("clientName")?.value || "—";
  const reportDate = document.getElementById("reportDate")?.value || "—";
  const reportId = document.getElementById("reportId")?.value || "—";

  setClientName("r_name", clientName);
  document.getElementById("r_date").textContent = reportDate;
  document.getElementById("r_id").textContent = reportId;

  // Shared name placeholders used across multiple report sections.
  setClientName("r_footer_name", clientName);
  setClientName("r_benefit_name", clientName);
  setClientName("r_overall_name", clientName);
  setClientName("r_hand_mistake_name", clientName, true);
  setClientName("r_hand_correction_name", clientName, true);
  setClientName("r_expert_sugg_name", clientName);
}

