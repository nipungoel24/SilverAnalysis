/**
 * personality.section.js
 *
 * Purpose:
 * Owns personality-related inputs and report sync:
 * - strengths list
 * - weaknesses list
 * - overall assessment paragraph
 */

export async function runLLMForSection({
  inputId,
  outputId,
  loaderId,
  buttonId,
  templateId,
  afterRun
}) {
  // Standard AI generation flow:
  // 1) fetch template payload from backend
  // 2) run LLM with returned system template
  // 3) write output back into source textarea
  // 4) invoke optional callback to refresh report preview
  const inputEl = document.getElementById(inputId);
  const loader = document.getElementById(loaderId);
  const button = document.getElementById(buttonId);

  if (!inputEl) {
    console.error("Input not found:", inputId);
    return;
  }

  const text = inputEl.value.trim();
  if (!text) {
    alert("Please enter some input first.");
    return;
  }

  loader.style.display = "inline-block";
  button.classList.add("disabled");

  let targetURL = "";
  let apiKey = "";
  const host = window.location.hostname;

  if (host === "menkadev.github.io") {
    targetURL = "https://exploreemebackend-1056855884926.us-central1.run.app";
    apiKey = "ek8pfnyVmlvvjyKGf665rhHpioob2hrORjw0BxwH";
  } else {
    targetURL = "http://127.0.0.1:8000";
    apiKey = "yhW10OA9omHFZS9nrcKfNJhhXM6umfpCWpScxkWx";
  }

  try {
    const tRes = await fetch(`${targetURL}/ai_automations_handler/fetch-data/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey
      },
      body: JSON.stringify({ template_id: templateId, pointers: text })
    });

    const tData = await tRes.json();

    const llmRes = await fetch(`${targetURL}/ai_automations_handler/process-llm/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey
      },
      body: JSON.stringify({
        system_template: tData.system_template,
        pointers: tData.pointers
      })
    });

    const llmData = await llmRes.json();
    inputEl.value = llmData.output;

    if (typeof afterRun === "function") {
      afterRun();
    }
  } catch (err) {
    console.error("LLM error:", err);
    alert("Something went wrong while generating text.");
  } finally {
    loader.style.display = "none";
    button.classList.remove("disabled");
  }
}

export function generate() {
  runLLMForSection({
    inputId: "overallBenefit",
    outputId: "overallBenefit",
    loaderId: "benefitLoader",
    buttonId: "benefitBtn",
    templateId: "overall_signature_benefit_prem",
    afterRun: globalThis.applyFormToReport
  });
}

// -----------------------------------------------------------------------------
// Strengths: form actions + sync
// -----------------------------------------------------------------------------

export function addStrengthItem() {
  const container = document.getElementById("strengths_list");
  const div = document.createElement("div");
  div.className = "strength_item";
  div.innerHTML = `
    <input type="text" placeholder="Enter a strength" class="strength_title"/>
    <button type="button" onclick="removeStrengthItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

export function removeStrengthItem(btn) {
  btn.parentElement?.remove();
}

// -----------------------------------------------------------------------------
// Weaknesses: form actions + sync
// -----------------------------------------------------------------------------

export function addWeaknessItem() {
  const container = document.getElementById("weaknesses_list");
  const div = document.createElement("div");
  div.className = "weakness_item";
  div.innerHTML = `
    <input type="text" placeholder="Enter a weakness" class="weakness_title"/>
    <button type="button" onclick="removeWeaknessItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

export function removeWeaknessItem(btn) {
  btn.parentElement?.remove();
}

/** Sync strengths and weaknesses lists to report preview. */
export function syncPersonalityListsSection() {
  const sList = document.getElementById("r_strengths_list");
  sList.innerHTML = "";

  const strengthInputs = document.querySelectorAll("#strengths_list .strength_title");
  strengthInputs.forEach((input) => {
    const value = input.value.trim();
    if (!value) return;

    const li = document.createElement("li");
    li.textContent = value;
    sList.appendChild(li);
  });

  const wList = document.getElementById("r_weaknesses_list");
  wList.innerHTML = "";

  const weaknessInputs = document.querySelectorAll("#weaknesses_list .weakness_title");
  weaknessInputs.forEach((input) => {
    const value = input.value.trim();
    if (!value) return;

    const li = document.createElement("li");
    li.textContent = value;
    wList.appendChild(li);
  });
}

/** Syncs the overall personality assessment paragraph. */
export function syncOverallAssessmentSection() {
  const input = document.getElementById("overallAssessment");
  document.getElementById("r_overall").textContent = input?.value || "";
}

