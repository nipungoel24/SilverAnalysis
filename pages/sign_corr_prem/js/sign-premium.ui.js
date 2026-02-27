/**
 * sign_corr_prem/js/sign-premium.ui.js
 *
 * Purpose:
 * UI orchestration for sign_corr_prem.html including dropdown/tag behavior,
 * image uploads, AI triggers, and form-to-preview synchronization.
 *
 * Dependencies:
 * - Data constants from `sign-premium.constants.js`
 * - Storage helpers from `store.js`
 *
 * ---------------------------------------------------------------------------
 * FUNCTIONS BY SECTION (sign_corr_prem.html)
 * ---------------------------------------------------------------------------
 * Shared / Cross-section:
 * - readImageFile
 * - setClientName
 * - createEditableDropdown
 * - runLLMForSection
 * - applyFormToReport
 *
 * Section 1: Mistakes in Signature
 * - initSignatureMistakeDropdown
 * - renderMistakeDescriptions
 *
 * Section 2: Graphological Mistakes in Handwriting
 * - refreshHandwritingCategoryDropdown
 * - addHandwritingCategory
 * - addHandwritingMistake
 * - promptAddHandwritingMistake
 * - renderHandMistakeDescriptions
 *
 * Section 3: Personality
 * - (uses createEditableDropdown + applyFormToReport)
 *
 * Section 4: Corrected Signature
 * - renderCorrectionDescriptions
 * - addCorrectionItem
 * - removeCorrectionItem
 *
 * Section 5: Benefits
 * - generateOverallBenefit
 *
 * Section 6: Graphological Corrections in Handwriting
 * - renderHandwritingCorrectionDescriptions
 *
 * Legacy compatibility helpers:
 * - addMistakeItem / removeMistakeItem
 * - addStrengthItem / removeStrengthItem
 * - addWeaknessItem / removeWeaknessItem
 *
 * Upload/image pipeline:
 * - createReportImageSetter
 * - createSingleImageUpload
 * - createMultipleImageUpload
 *
 * Initialization / event wiring:
 * - category dropdown event binding
 * - apply/reset button binding
 */

// ---------------------------------------------------------------------------
// Shared / Cross-section Utilities
// ---------------------------------------------------------------------------

function readImageFile(file, cb) {
  const reader = new FileReader();
  reader.onload = (e) => cb(e.target.result);
  reader.readAsDataURL(file);
}

function setClientName(spanId, name, possessive = false) {
  const span = document.getElementById(spanId);
  if (!span) return;

  let finalName = (name || "").trim();
  if (possessive) {
    finalName = finalName.endsWith("s") ? `${finalName}'` : `${finalName}'s`;
  }
  span.textContent = finalName;
}

function createEditableDropdown({
  inputId,
  dropdownId,
  tagContainerId,
  textareaId,
  listKey,
  defaultList,
  allowAdd = true,
  allowRemove = true,
  onChange = () => {}
}) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  const tagContainer = document.getElementById(tagContainerId);
  const textarea = document.getElementById(textareaId);

  if (!input || !dropdown || !tagContainer || !textarea) {
    console.warn("Dropdown init skipped:", inputId);
    return;
  }

  const list = JSON.parse(localStorage.getItem(listKey)) || [...defaultList];
  let selected = textarea.value
    ? textarea.value.split(",").map((v) => v.trim()).filter(Boolean)
    : [];

  function saveList() {
    localStorage.setItem(listKey, JSON.stringify(list));
  }

  function syncTextarea() {
    textarea.value = selected.join(", ");
    onChange(selected);
  }

  function renderTags() {
    tagContainer.innerHTML = "";
    selected.forEach((val) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.innerHTML = `${val}<button type="button" class="tag-remove">�</button>`;
      tag.querySelector("button").onclick = () => {
        selected = selected.filter((v) => v !== val);
        renderTags();
      };
      tagContainer.appendChild(tag);
    });
    syncTextarea();
  }

  function addTag(val) {
    if (!selected.includes(val)) {
      selected.push(val);
      renderTags();
    }
  }

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    dropdown.innerHTML = "";
    if (!query) return;

    const matches = list.filter((v) => v.toLowerCase().includes(query));

    matches.forEach((item) => {
      const row = document.createElement("div");
      row.className = "dropdown-row";
      row.innerHTML = `<span>${item}</span>${allowRemove ? '<button class="dropdown-remove">?</button>' : ""}`;

      row.querySelector("span").onclick = () => {
        addTag(item);
        input.value = "";
        dropdown.innerHTML = "";
      };

      if (allowRemove) {
        row.querySelector(".dropdown-remove").onclick = (e) => {
          e.stopPropagation();
          list.splice(list.indexOf(item), 1);
          saveList();
          input.dispatchEvent(new Event("input"));
        };
      }

      dropdown.appendChild(row);
    });

    if (!matches.length && allowAdd) {
      const add = document.createElement("div");
      add.className = "dropdown-add";
      add.innerHTML = `? Add "<strong>${input.value}</strong>"`;
      add.onclick = () => {
        const title = input.value.trim();
        if (!title) return;

        const desc = prompt(`Enter graphological interpretation for:\n"${title}"`);

        const store = getSignatureMistakeStore();
        store[title] = desc || "";
        saveSignatureMistakeStore(store);

        list.push(title);
        saveList();

        addTag(title);
        input.value = "";
        dropdown.innerHTML = "";
      };
      dropdown.appendChild(add);
    }
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !input.contains(e.target)) {
      dropdown.innerHTML = "";
    }
  });

  renderTags();
}

async function runLLMForSection({
  inputId,
  outputId,
  loaderId,
  buttonId,
  templateId,
  afterRun
}) {
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

// ---------------------------------------------------------------------------
// Section 1: Mistakes in Signature
// ---------------------------------------------------------------------------

function initSignatureMistakeDropdown() {
  const store = getSignatureMistakeStore();

  createEditableDropdown({
    inputId: "mistakesInput",
    dropdownId: "mistakesDropdown",
    tagContainerId: "mistakesTagContainer",
    textareaId: "mistakes",
    listKey: "signatureMistakeKeys",
    defaultList: Object.keys(store),
    allowAdd: true,
    allowRemove: true,
    onChange: renderMistakeDescriptions
  });
}

function renderMistakeDescriptions(selectedTitles) {
  const container = document.getElementById("mistakeDescriptions");
  const store = getSignatureMistakeStore();

  container.innerHTML = "";

  selectedTitles.forEach((title) => {
    const block = document.createElement("div");
    block.className = "mistake-desc-block";

    let currentTitleKey = title;

    const heading = document.createElement("input");
    heading.type = "text";
    heading.value = currentTitleKey;
    heading.className = "editable-mistake-title";

    const textarea = document.createElement("textarea");
    textarea.className = "sign_mistake_desc";
    textarea.placeholder = "Enter graphological interpretation...";
    textarea.value = store[currentTitleKey] || "";

    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "save-desc-btn";
    saveBtn.textContent = "Save";

    const status = document.createElement("span");
    status.className = "save-status";
    status.style.marginLeft = "8px";

    heading.onchange = () => {
      const newTitle = heading.value.trim();
      if (newTitle && newTitle !== currentTitleKey) {
        store[newTitle] = store[currentTitleKey];
        delete store[currentTitleKey];
        currentTitleKey = newTitle;

        saveSignatureMistakeStore(store);
        applyFormToReport();

        status.textContent = "Title Updated";
        status.style.color = "#28a745";
        setTimeout(() => {
          status.textContent = "";
        }, 1500);
      }
    };

    textarea.oninput = () => {
      store[currentTitleKey] = textarea.value;
      saveSignatureMistakeStore(store);
      applyFormToReport();

      status.textContent = "Unsaved changes";
      status.style.color = "#d39e00";
    };

    saveBtn.onclick = () => {
      store[currentTitleKey] = textarea.value;
      saveSignatureMistakeStore(store);
      applyFormToReport();

      status.textContent = "Saved";
      status.style.color = "#28a745";
      setTimeout(() => {
        status.textContent = "";
      }, 1500);
    };

    block.appendChild(heading);
    block.appendChild(textarea);
    block.appendChild(saveBtn);
    block.appendChild(status);
    container.appendChild(block);
  });

  applyFormToReport();
}

// ---------------------------------------------------------------------------
// Section 2: Graphological Mistakes in Handwriting
// ---------------------------------------------------------------------------

function refreshHandwritingCategoryDropdown() {
  const select = document.getElementById("handCategory");
  const catalog = getHandwritingCatalog();

  select.innerHTML = '<option value="">Select Category</option>';
  Object.keys(catalog).forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

function addHandwritingCategory(categoryName) {
  if (!categoryName.trim()) return;

  const catalog = getHandwritingCatalog();
  if (!catalog[categoryName]) {
    catalog[categoryName] = {};
    saveHandwritingCatalog(catalog);
  }

  refreshHandwritingCategoryDropdown();
}

function addHandwritingMistake(category, title, description) {
  if (!category || !title.trim()) return;

  const catalog = getHandwritingCatalog();
  if (!catalog[category]) {
    catalog[category] = {};
  }

  catalog[category][title] = description || "";
  saveHandwritingCatalog(catalog);

  createEditableDropdown({
    inputId: "handMistakeInput",
    dropdownId: "handMistakeDropdown",
    tagContainerId: "handMistakeTagContainer",
    textareaId: "handMistakes",
    listKey: "handMistakeTemp",
    defaultList: Object.keys(catalog[category]),
    allowAdd: false,
    allowRemove: false,
    onChange: renderHandMistakeDescriptions
  });
}

function promptAddHandwritingMistake() {
  const category = document.getElementById("handCategory").value;
  if (!category) {
    alert("Select a category first");
    return;
  }

  const title = prompt("Enter handwriting mistake title:");
  if (!title) return;

  const desc = prompt("Enter graphological interpretation:");
  addHandwritingMistake(category, title, desc);
}

function renderHandMistakeDescriptions(selectedTitles) {
  const container = document.getElementById("handMistakeDescriptions");
  const store = getHandMistakeStore();
  const category = document.getElementById("handCategory").value;

  container.innerHTML = "";

  selectedTitles.forEach((title) => {
    const block = document.createElement("div");
    block.className = "hmistake-desc-block";

    const label = document.createElement("strong");
    label.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.value = store[title] || handwritingMistakeCatalog[category]?.[title] || "";

    textarea.oninput = () => {
      store[title] = textarea.value;
      saveHandMistakeStore(store);
      applyFormToReport();
    };

    block.appendChild(label);
    block.appendChild(textarea);
    container.appendChild(block);
  });

  applyFormToReport();
}

// ---------------------------------------------------------------------------
// Section 3: Personality (dropdown-driven via shared engine)
// ---------------------------------------------------------------------------
// No section-specific creator function required beyond dropdown initialization in pdf.js.

// ---------------------------------------------------------------------------
// Section 4: Corrected Signature
// ---------------------------------------------------------------------------

function renderCorrectionDescriptions(selectedTitles) {
  const container = document.getElementById("correctionDescriptions");
  const store = getSignatureCorrectionStore();

  container.innerHTML = "";

  selectedTitles.forEach((title) => {
    const block = document.createElement("div");
    block.className = "correction-desc-block";

    const heading = document.createElement("strong");
    heading.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.className = "sign_correction_desc";
    textarea.value = store[title] || "";

    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.textContent = "Save";

    const status = document.createElement("span");

    textarea.oninput = () => {
      status.textContent = "Unsaved";
      status.style.color = "#d39e00";
    };

    saveBtn.onclick = () => {
      store[title] = textarea.value.trim();
      saveSignatureCorrectionStore(store);
      applyFormToReport();

      status.textContent = "Saved";
      status.style.color = "green";
      setTimeout(() => {
        status.textContent = "";
      }, 1500);
    };

    block.appendChild(heading);
    block.appendChild(textarea);
    block.appendChild(saveBtn);
    block.appendChild(status);
    container.appendChild(block);
  });

  applyFormToReport();
}

function addCorrectionItem() {
  const container = document.getElementById("sign_corrections_list");
  if (!container) return;

  const uid = Date.now();
  const item = document.createElement("div");
  item.className = "sign_correction_item";

  item.innerHTML = `
    <div class="tag-input-wrapper">
      <div id="corrTagContainer_${uid}" class="tag-container"></div>
      <input type="text" id="corrInput_${uid}" placeholder="Search or add correction title..." />
      <div id="corrDropdown_${uid}" class="dropdown"></div>
      <textarea id="corrTitle_${uid}" class="sign_correction_title" style="display:none;"></textarea>
    </div>

    <div class="correction-desc-wrapper">
      <textarea id="corrDesc_${uid}" class="sign_correction_desc" placeholder="Enter correction description"></textarea>
      <button type="button" class="save-btn">Save</button>
      <span class="save-status"></span>
    </div>

    <button type="button" class="remove-btn">Remove</button>
  `;

  container.appendChild(item);

  const store = getSignatureCorrectionStore();
  const descBox = item.querySelector(`#corrDesc_${uid}`);
  const status = item.querySelector(".save-status");

  createEditableDropdown({
    inputId: `corrInput_${uid}`,
    dropdownId: `corrDropdown_${uid}`,
    tagContainerId: `corrTagContainer_${uid}`,
    textareaId: `corrTitle_${uid}`,
    listKey: "signatureCorrectionTitles",
    defaultList: Object.keys(store),
    allowAdd: true,
    allowRemove: true,
    onChange: ([title]) => {
      descBox.value = store[title] || "";
      applyFormToReport();
    }
  });

  item.querySelector(".save-btn").onclick = () => {
    const title = item.querySelector(".sign_correction_title").value.trim();
    if (!title) {
      alert("Select a correction title first");
      return;
    }

    store[title] = descBox.value.trim();
    saveSignatureCorrectionStore(store);

    status.textContent = "Saved";
    status.style.color = "green";
    setTimeout(() => {
      status.textContent = "";
    }, 1500);

    applyFormToReport();
  };

  item.querySelector(".remove-btn").onclick = () => item.remove();
}

function removeCorrectionItem(btn) {
  btn.parentElement?.remove();
}

// ---------------------------------------------------------------------------
// Section 5: Benefits
// ---------------------------------------------------------------------------

function generateOverallBenefit() {
  runLLMForSection({
    inputId: "overallBenefit",
    outputId: "overallBenefit",
    loaderId: "benefitLoader",
    buttonId: "benefitBtn",
    templateId: "overall_signature_benefit_prem",
    afterRun: applyFormToReport
  });
}

// ---------------------------------------------------------------------------
// Section 6: Graphological Corrections in Handwriting
// ---------------------------------------------------------------------------

function renderHandwritingCorrectionDescriptions(selectedTitles) {
  const container = document.getElementById("handCorrectionDescriptions");
  container.innerHTML = "";

  selectedTitles.forEach((title) => {
    const block = document.createElement("div");
    block.className = "correction-desc-block";

    // 1. The Editable Title
    const heading = document.createElement("input");
    heading.type = "text";
    heading.value = title;
    heading.className = "editable-mistake-title"; // Same CSS class from earlier
    
    // 🔥 LIVE SYNC: Updates preview while you type the title
    heading.oninput = () => applyFormToReport();

    // 2. The Textarea Description
    const textarea = document.createElement("textarea");
    textarea.value = title;
    textarea.placeholder = "Edit handwriting correction...";
    
    // 🔥 LIVE SYNC: Updates preview while you type the description
    textarea.oninput = () => applyFormToReport();

    block.appendChild(heading);
    block.appendChild(textarea);
    container.appendChild(block);
  });

  applyFormToReport();
} 

// ---------------------------------------------------------------------------
// Legacy Compatibility Helpers (kept for backward compatibility)
// ---------------------------------------------------------------------------

function addMistakeItem() {
  const container = document.getElementById("sign_mistakes_list");
  if (!container) return;

  const item = document.createElement("div");
  item.classList.add("sign_mistake_item");

  const title = document.createElement("input");
  title.type = "text";
  title.placeholder = "Enter Title of sign mistake";
  title.classList.add("sign_mistake_title");

  const desc = document.createElement("textarea");
  desc.placeholder = "Enter description of sign mistake pointer";
  desc.classList.add("sign_mistake_desc");

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => removeMistakeItem(removeBtn);

  item.appendChild(title);
  item.appendChild(desc);
  item.appendChild(removeBtn);
  container.appendChild(item);
}

function removeMistakeItem(button) {
  button.parentElement?.remove();
}

function addStrengthItem() {
  const container = document.getElementById("strengths_list");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "strength_item";
  div.innerHTML = '<input type="text" placeholder="Enter a strength" class="strength_title"/><button type="button" onclick="removeStrengthItem(this)">Remove</button>';
  container.appendChild(div);
}

function removeStrengthItem(btn) {
  btn.parentElement?.remove();
}

function addWeaknessItem() {
  const container = document.getElementById("weaknesses_list");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "weakness_item";
  div.innerHTML = '<input type="text" placeholder="Enter a weakness" class="weakness_title"/><button type="button" onclick="removeWeaknessItem(this)">Remove</button>';
  container.appendChild(div);
}

function removeWeaknessItem(btn) {
  btn.parentElement?.remove();
}

// ---------------------------------------------------------------------------
// Upload / Image Pipeline (Sections 1,2,4,6)
// ---------------------------------------------------------------------------

function createReportImageSetter(imgId, placeholderId) {
  return function setReportImage(dataUrl) {
    const img = document.getElementById(imgId);
    const placeholder = document.getElementById(placeholderId);
    if (!img || !placeholder) return;

    img.src = dataUrl;
    img.style.display = "block";
    placeholder.style.display = "none";
  };
}

function createSingleImageUpload(uploadId, previewId, reportUpdateFunction) {
  const uploadElement = document.getElementById(uploadId);
  if (!uploadElement) return;

  uploadElement.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const previewElement = document.getElementById(previewId);
    if (!previewElement) return;

    if (!file) {
      previewElement.textContent = "No image";
      return;
    }

    readImageFile(file, (data) => {
      previewElement.innerHTML = `<img style="max-width:100%;height:auto;" src="${data}" />`;
      reportUpdateFunction(data);
    });
  });
}

function createMultipleImageUpload(uploadId, previewId, reportContainerId, maxImages = 3) {
  const uploadElement = document.getElementById(uploadId);
  if (!uploadElement) return;

  uploadElement.addEventListener("change", (e) => {
    const files = Array.from(e.target.files).slice(0, maxImages);
    const previewElement = document.getElementById(previewId);
    const container = document.getElementById(reportContainerId);
    if (!previewElement || !container) return;

    if (!files.length) {
      previewElement.textContent = "No images";
      return;
    }

    previewElement.textContent = `${files.length} image(s) selected`;
    container.innerHTML = "";

    files.forEach((file) => {
      readImageFile(file, (data) => {
        const img = document.createElement("img");
        img.src = data;
        img.style.maxWidth = "220px";
        img.style.height = "auto";
        img.style.borderRadius = "8px";
        img.className = "report-img";
        container.appendChild(img);
      });
    });
  });
}

const setReportMainImage = createReportImageSetter("r_main_img", "r_main_placeholder");
const setReportHandwritingImage = createReportImageSetter("r_handwriting_img", "r_handwriting_placeholder");
const setReportHandwritingCorrectionImage = createReportImageSetter(
  "r_handwritingCorrection_img",
  "r_handwritingCorrection_placeholder"
);

createSingleImageUpload("uploadMain", "mainPreview", setReportMainImage);
createSingleImageUpload("uploadMainHandwriting", "mainPreviewHandwriting", setReportHandwritingImage);
createSingleImageUpload("uploadCorrectHandwriting", "PreviewCorrectHandwriting", setReportHandwritingCorrectionImage);
createMultipleImageUpload("uploadThree", "threePreview", "r_corrected_imgs", 3);

// ---------------------------------------------------------------------------
// Main Sync: Form -> Preview Report
// ---------------------------------------------------------------------------

function applyFormToReport() {
  const clientName = document.getElementById("clientName")?.value || "Add Client Name";
  const reportDate = document.getElementById("reportDate")?.value || "Add Date";
  const reportId = document.getElementById("reportId")?.value || "Add ID";

  // Header + identity block
  setClientName("r_name", clientName);
  document.getElementById("r_date").textContent = reportDate;
  document.getElementById("r_id").textContent = reportId;
  setClientName("r_footer_name", clientName);
  setClientName("r_benefit_name", clientName);
  setClientName("r_overall_name", clientName);
  setClientName("r_hand_mistake_name", clientName, true);
  setClientName("r_hand_correction_name", clientName, true);
  setClientName("r_expert_sugg_name", clientName);

  // Section 1 preview
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

  // Section 2 preview
  const handwritingPreview = document.getElementById("r_handwritingMistakes");
  handwritingPreview.innerHTML = "";

  const selectedHandMistakes = (document.getElementById("handMistakes")?.value || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  const handStore = getHandMistakeStore();
  selectedHandMistakes.forEach((title, i) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${i + 1}. ${title}</strong><br>${handStore[title] || ""}`;
    handwritingPreview.appendChild(p);
  });

  // Section 3 preview: strengths
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

  // Section 6 preview
  const handCorrectionsPreview = document.getElementById("r_handwritingCorrections");
  handCorrectionsPreview.innerHTML = "";

  document
      .querySelectorAll("#handCorrectionDescriptions .correction-desc-block")
      .forEach((block, i) => {
        
        // Get the title from the new input field
        const titleInput = block.querySelector("input.editable-mistake-title");
        const titleText = titleInput ? titleInput.value.trim() : "";
        
        // Get the description from the textarea
        const ta = block.querySelector("textarea");
        const descText = ta ? ta.value.trim() : "";

        // Combine them in the preview element
        const p = document.createElement("p");
        p.innerHTML = `<strong>${i + 1}. ${titleText}</strong><br/>${descText}`;
        
        handCorrectionsPreview.appendChild(p);
      });   

  // Section 3 preview: weaknesses
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

  // Section 3 preview: overall
  document.getElementById("r_overall").textContent =
    document.getElementById("overallAssessment")?.value || "";

  // Section 4 preview
  const correctionsList = document.getElementById("r_corrections_list");
  correctionsList.innerHTML = "";

  const selectedCorrections = (document.getElementById("corrections")?.value || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  const correctionStore = getSignatureCorrectionStore();
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

  // Section 5/7/8 preview
  document.getElementById("r_overallbenefit").textContent =
    document.getElementById("overallBenefit")?.value || "";
  document.getElementById("r_affirmation").textContent =
    document.getElementById("phase3")?.value || "";
  document.getElementById("r_expert_rec").textContent =
    document.getElementById("expertRec")?.value || "";
}

// ---------------------------------------------------------------------------
// Initialization / Event Wiring
// ---------------------------------------------------------------------------

const signatureCorrectionTitles = Object.keys(getSignatureCorrectionStore());

refreshHandwritingCategoryDropdown();

const categorySelect = document.getElementById("handCategory");
if (categorySelect) {
  categorySelect.addEventListener("change", () => {
    const category = categorySelect.value;
    if (!category) return;

    const currentCatalog = getHandwritingCatalog();

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