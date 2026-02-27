import { setClientName } from "./shared.js";

/**
 * Report sync module.
 *
 * Core responsibility:
 * - read all left-panel inputs/state
 * - update corresponding right-panel report DOM nodes
 *
 * This function is intentionally centralized because many other modules call it
 * after user edits, AI generation, and dropdown/tag changes.
 */
export function applyFormToReport() {
  const clientName = document.getElementById("clientName")?.value || "Add Client Name";
  const reportDate = document.getElementById("reportDate")?.value || "Add Date";
  const reportId = document.getElementById("reportId")?.value || "Add ID";

  setClientName("r_name", clientName);
  document.getElementById("r_date").textContent = reportDate;
  document.getElementById("r_id").textContent = reportId;
  setClientName("r_footer_name", clientName);
  setClientName("r_benefit_name", clientName);
  setClientName("r_overall_name", clientName);
  setClientName("r_hand_mistake_name", clientName, true);
  setClientName("r_hand_correction_name", clientName, true);
  setClientName("r_expert_sugg_name", clientName);

  const mistakesList = document.getElementById("r_mistakes_list");
  mistakesList.innerHTML = "";

  document.querySelectorAll(".mistake-desc-block").forEach((block) => {
    const titleInput = block.querySelector("input.editable-mistake-title");
    const title = titleInput ? titleInput.value.trim() : "Untitled Mistake";
    const desc = block.querySelector("textarea")?.value.trim() || "";

    const li = document.createElement("li");
    li.className = "mistake-item";

    const t = document.createElement("div");
    t.className = "mistake-title";
    t.textContent = title;

    const p = document.createElement("p");
    p.textContent = desc;

    li.appendChild(t);
    li.appendChild(p);
    mistakesList.appendChild(li);
  });

  const handwritingPreview = document.getElementById("r_handwritingMistakes");
  handwritingPreview.innerHTML = "";

  const selectedHandMistakes = (document.getElementById("handMistakes")?.value || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  const handStore = globalThis.getHandMistakeStore();
  selectedHandMistakes.forEach((title, i) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${i + 1}. ${title}</strong><br>${handStore[title] || ""}`;
    handwritingPreview.appendChild(p);
  });

  const strengthsList = document.getElementById("r_strengths_list");
  strengthsList.innerHTML = "";

  const strengths = (document.getElementById("strengths")?.value || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  strengths.forEach((val) => {
    const li = document.createElement("li");
    li.textContent = val;
    strengthsList.appendChild(li);
  });

  const handCorrectionsPreview = document.getElementById("r_handwritingCorrections");
  handCorrectionsPreview.innerHTML = "";

  document
    .querySelectorAll("#handCorrectionDescriptions .correction-desc-block")
    .forEach((block, i) => {
      const titleInput = block.querySelector("input.editable-mistake-title");
      const titleText = titleInput ? titleInput.value.trim() : "";
      const ta = block.querySelector("textarea");
      const descText = ta ? ta.value.trim() : "";

      const p = document.createElement("p");
      p.innerHTML = `<strong>${i + 1}. ${titleText}</strong><br/>${descText}`;
      handCorrectionsPreview.appendChild(p);
    });

  const weaknessesList = document.getElementById("r_weaknesses_list");
  weaknessesList.innerHTML = "";

  const weaknesses = (document.getElementById("weaknesses")?.value || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  weaknesses.forEach((val) => {
    const li = document.createElement("li");
    li.textContent = val;
    weaknessesList.appendChild(li);
  });

  document.getElementById("r_overall").textContent =
    document.getElementById("overallAssessment")?.value || "";

  const correctionsList = document.getElementById("r_corrections_list");
  correctionsList.innerHTML = "";

  const selectedCorrections = (document.getElementById("corrections")?.value || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  const correctionStore = globalThis.getSignatureCorrectionStore();
  selectedCorrections.forEach((title) => {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = title;

    const p = document.createElement("p");
    p.textContent = correctionStore[title] || "";

    li.appendChild(strong);
    li.appendChild(p);
    correctionsList.appendChild(li);
  });

  document.getElementById("r_overallbenefit").textContent =
    document.getElementById("overallBenefit")?.value || "";
  document.getElementById("r_affirmation").textContent =
    document.getElementById("phase3")?.value || "";
  document.getElementById("r_expert_rec").textContent =
    document.getElementById("expertRec")?.value || "";
}
