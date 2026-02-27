import { runLLMForSection } from "./shared.js";

/**
 * Section 5 module: Benefits
 *
 * Thin wrapper around shared LLM runner:
 * - reads pointers from #overallBenefit
 * - sends to configured template
 * - writes generated output back into same field
 * - refreshes preview via global applyFormToReport
 */
export function generateOverallBenefit() {
  runLLMForSection({
    inputId: "overallBenefit",
    outputId: "overallBenefit",
    loaderId: "benefitLoader",
    buttonId: "benefitBtn",
    templateId: "overall_signature_benefit_prem",
    afterRun: globalThis.applyFormToReport
  });
}
