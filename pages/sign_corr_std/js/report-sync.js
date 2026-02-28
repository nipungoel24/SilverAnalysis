import { syncClientIdentitySection } from "./sections/client-identity.section.js";
import { syncMistakesSection } from "./sections/mistakes.section.js";
import {
  syncPersonalityListsSection,
  syncOverallAssessmentSection
} from "./sections/personality.section.js";
import { syncCorrectionsSection } from "./sections/corrections.section.js";
import { syncClosingSection } from "./sections/closing.section.js";

/**
 * report-sync.js
 *
 * Purpose:
 * Section orchestrator for form -> report synchronization.
 * Each business section owns its own file, and this module only runs them
 * in deterministic order.
 *
 * Section Order:
 * 1) Client identity
 * 2) Signature mistakes
 * 3) Personality (lists + overall)
 * 4) Signature corrections
 * 5) Closing narrative
 */
export function applyFormToReport() {
  syncClientIdentitySection();
  syncMistakesSection();
  syncPersonalityListsSection();
  syncOverallAssessmentSection();
  syncCorrectionsSection();
  syncClosingSection();
}
