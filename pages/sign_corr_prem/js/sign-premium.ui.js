/**
 * sign_corr_prem/js/sign-premium.ui.js
 *
 * UI orchestration for form controls, dropdown behavior, uploads,
 * live preview synchronization, and AI trigger handlers.
 *
 * Notes:
 * - Functions here rely on constants from `sign-premium.constants.js`.
 * - Storage helpers are provided by `store.js`.
 */
function addHandwritingMistake(category, title, description) {
  if (!category || !title.trim()) return;

  const catalog = getHandwritingCatalog();

  if (!catalog[category]) {
    catalog[category] = {};
  }

  catalog[category][title] = description || "";

  saveHandwritingCatalog(catalog);

  // 🔥 refresh dependent dropdown
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
function renderHandwritingCorrectionDescriptions(selectedTitles) {
  const container = document.getElementById("handCorrectionDescriptions");
  const store = getHandwritingCorrectionStore();

  container.innerHTML = "";

  selectedTitles.forEach(title => {
    const block = document.createElement("div");
    block.className = "correction-desc-block";

    const heading = document.createElement("strong");
    heading.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.value = title; // editable correction text
    textarea.placeholder = "Edit handwriting correction…";

    textarea.oninput = () => {
      applyFormToReport();
    };

    block.appendChild(heading);
    block.appendChild(textarea);
    container.appendChild(block);
  });

  applyFormToReport();
}
function refreshHandwritingCategoryDropdown() {
  const select = document.getElementById("handCategory");
  const catalog = getHandwritingCatalog();

  select.innerHTML = `<option value="">Select Category</option>`;

  Object.keys(catalog).forEach(cat => {
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

const signatureCorrectionTitles = Object.keys(
  getSignatureCorrectionStore()
);




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
function addCorrectionItem() {
  const container = document.getElementById("sign_corrections_list");
  const uid = Date.now();

  const item = document.createElement("div");
  item.className = "sign_correction_item";

  item.innerHTML = `
    <div class="tag-input-wrapper">
      <div id="corrTagContainer_${uid}" class="tag-container"></div>
      <input
        type="text"
        id="corrInput_${uid}"
        placeholder="Search or add correction title..."
      />
      <div id="corrDropdown_${uid}" class="dropdown"></div>

      <!-- hidden value holder -->
      <textarea
        id="corrTitle_${uid}"
        class="sign_correction_title"
        style="display:none;"
      ></textarea>
    </div>

    <div class="correction-desc-wrapper">
      <textarea
        id="corrDesc_${uid}"
        class="sign_correction_desc"
        placeholder="Enter correction description"
      ></textarea>

      <button type="button" class="save-btn">Save</button>
      <span class="save-status"></span>
    </div>

    <button type="button" class="remove-btn">Remove</button>
  `;

  container.appendChild(item);

  const store = getSignatureCorrectionStore();
  const descBox = item.querySelector(`#corrDesc_${uid}`);
  const status = item.querySelector(".save-status");

  // 🔥 SAME dropdown logic as mistakes
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

  // SAVE DESCRIPTION (EXACT SAME AS MISTAKES)
  item.querySelector(".save-btn").onclick = () => {
    const title = item.querySelector(".sign_correction_title").value.trim();
    if (!title) {
      alert("Select a correction title first");
      return;
    }

    store[title] = descBox.value.trim();
    saveSignatureCorrectionStore(store);

    status.textContent = "✓ Saved";
    status.style.color = "green";

    setTimeout(() => (status.textContent = ""), 1500);
    applyFormToReport();
  };

  // REMOVE
  item.querySelector(".remove-btn").onclick = () => item.remove();
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

  // === backend selection (same as your other tools) ===
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
    // STEP 1: fetch template
    const tRes = await fetch(`${targetURL}/ai_automations_handler/fetch-data/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": apiKey
      },
      body: JSON.stringify({
        template_id: templateId,
        pointers: text
      })
    });

    const tData = await tRes.json();

    // STEP 2: run LLM
    const llmRes = await fetch(`${targetURL}/ai_automations_handler/process-llm/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": apiKey
      },
      body: JSON.stringify({
        system_template: tData.system_template,
        pointers: tData.pointers
      })
    });

    const llmData = await llmRes.json();

    // 🔥 THIS IS THE CRITICAL LINE
    inputEl.value = llmData.output;

    // 🔥 FORCE PREVIEW UPDATE
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

// Drop down function for strengths and weaknesses
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

  const list =
    JSON.parse(localStorage.getItem(listKey)) ||
    [...defaultList];

  let selected = textarea.value
    ? textarea.value.split(",").map(v => v.trim())
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
    selected.forEach(val => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.innerHTML = `
        ${val}
        <button type="button" class="tag-remove">×</button>
      `;
      tag.querySelector("button").onclick = () => {
        selected = selected.filter(v => v !== val);
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

    const matches = list.filter(v =>
      v.toLowerCase().includes(query)
    );

    matches.forEach(item => {
      const row = document.createElement("div");
      row.className = "dropdown-row";
      row.innerHTML = `
        <span>${item}</span>
        ${allowRemove ? `<button class="dropdown-remove">✕</button>` : ""}
      `;

      row.querySelector("span").onclick = () => {
        addTag(item);
        input.value = "";
        dropdown.innerHTML = "";
      };

      if (allowRemove) {
        row.querySelector(".dropdown-remove").onclick = e => {
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
      add.innerHTML = `➕ Add "<strong>${input.value}</strong>"`;
      add.onclick = () => {
  const title = input.value.trim();
  if (!title) return;

  const desc = prompt(
    `Enter graphological interpretation for:\n"${title}"`
  );

  const store = getSignatureMistakeStore();
  store[title] = desc || "";
  saveSignatureMistakeStore(store);

  list.push(title);
  localStorage.setItem(listKey, JSON.stringify(list));

  addTag(title);
  input.value = "";
  dropdown.innerHTML = "";
};

      dropdown.appendChild(add);
    }
  });

  document.addEventListener("click", e => {
    if (!dropdown.contains(e.target) && !input.contains(e.target)) {
      dropdown.innerHTML = "";
    }
  });

  renderTags();
}
// adding mistakes in current signature item 

function addMistakeItem() {
  const container = document.getElementById("sign_mistakes_list");

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
  removeBtn.textContent = " Remove";
  removeBtn.onclick = function() {
    removeMistakeItem(removeBtn);
  };

  item.appendChild(title);
  item.appendChild(desc);
  item.appendChild(removeBtn);

  container.appendChild(item);
}

// Removing mistakes in current signature item 
function removeMistakeItem(button) {
  const item = button.parentElement;
  item.remove();
}


// adding strengths keywords 
function addStrengthItem() {
  const container = document.getElementById('strengths_list');
  const div = document.createElement('div');
  div.className = 'strength_item';
  div.innerHTML = `
    <input type="text" placeholder="Enter a strength" class="strength_title"/>
    <button type="button" onclick="removeStrengthItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

//Removing strength keywords
function removeStrengthItem(btn) {
  btn.parentElement.remove();
}

// adding Weaknesses keywords
function addWeaknessItem() {
  const container = document.getElementById('weaknesses_list');
  const div = document.createElement('div');
  div.className = 'weakness_item';
  div.innerHTML = `
    <input type="text" placeholder="Enter a weakness" class="weakness_title"/>
    <button type="button" onclick="removeWeaknessItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

//Removing weakness keywords

function removeWeaknessItem(btn) {
  btn.parentElement.remove();
}

// Add new signature correction input
function addCorrectionItem() {
  const container = document.getElementById('sign_corrections_list');
  const div = document.createElement('div');
  div.className = 'sign_correction_item';
  div.innerHTML = `
    <input type="text" placeholder="Enter Title of correction" class="sign_correction_title"/>
    <textarea placeholder="Enter description of correction" class="sign_correction_desc"></textarea>
    <button type="button" onclick="removeCorrectionItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

// Remove signature correction input
function removeCorrectionItem(btn) {
  btn.parentElement.remove();
}


// image helpers
function readImageFile(file, cb) {
  const reader = new FileReader();
  reader.onload = e => cb(e.target.result);
  reader.readAsDataURL(file);
}



// ===== REUSABLE UPLOAD FUNCTIONS =====

function createSingleImageUpload(uploadId, previewId, reportUpdateFunction) {
  const uploadElement = document.getElementById(uploadId);
  
  uploadElement.addEventListener('change', (e) => {
    const f = e.target.files[0];
    const previewElement = document.getElementById(previewId);
    
    if (!f) {
      previewElement.textContent = 'No image';
      return;
    }
    
    readImageFile(f, (data) => {
      previewElement.innerHTML = '<img style="max-width:100%;height:auto;" src="' + data + '" />';
      reportUpdateFunction(data);
    });
  });
}

// Generic report image setter with placeholder handling
function createReportImageSetter(imgId, placeholderId) {
  return function(dataUrl) {
    const img = document.getElementById(imgId);
    const placeholder = document.getElementById(placeholderId);
    
    img.src = dataUrl;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  };
}

// Multiple images upload handler (for section 3)
function createMultipleImageUpload(uploadId, previewId, reportContainerId, maxImages = 3) {
  const uploadElement = document.getElementById(uploadId);
  
  uploadElement.addEventListener('change', (e) => {
    const files = Array.from(e.target.files).slice(0, maxImages);
    const previewElement = document.getElementById(previewId);
    
    if (files.length === 0) {
      previewElement.textContent = 'No images';
      return;
    }
    
    previewElement.textContent = files.length + ' image(s) selected';
    
    // Show thumbnails in report container
    const container = document.getElementById(reportContainerId);
    container.innerHTML = '';
    
    files.forEach(f => {
      readImageFile(f, data => {
        const img = document.createElement('img');
        img.src = data;
        img.style.maxWidth = '220px';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        img.className = 'report-img';
        container.appendChild(img);
      });
    });
  });
}



// Create report setter functions
const setReportMainImage = createReportImageSetter('r_main_img', 'r_main_placeholder');
const setReportHandwritingImage = createReportImageSetter('r_handwriting_img', 'r_handwriting_placeholder');
const setReportHandwritingCorrectionImage = createReportImageSetter('r_handwritingCorrection_img', 'r_handwritingCorrection_placeholder');

// Setup all single image uploads
createSingleImageUpload('uploadMain', 'mainPreview', setReportMainImage);
createSingleImageUpload('uploadMainHandwriting', 'mainPreviewHandwriting', setReportHandwritingImage);
createSingleImageUpload('uploadCorrectHandwriting', 'PreviewCorrectHandwriting', setReportHandwritingCorrectionImage);

// Setup multiple image upload
createMultipleImageUpload('uploadThree', 'threePreview', 'r_corrected_imgs', 3);


// To add a new single image upload, just add these two lines:
// const setReportNewImage = createReportImageSetter('r_new_img', 'r_new_placeholder');
// createSingleImageUpload('uploadNew', 'newPreview', setReportNewImage);


// apply button populates the report DOM from the form
document.getElementById('applyBtn').addEventListener('click', applyFormToReport);

// reusable function for handling names 
    /**
 * Set a name inside a span by ID.
 * Handles possessive forms automatically if needed.
 *
 * @param {string} spanId - The ID of the span element.
 * @param {string} name - The name to insert.
 * @param {boolean} possessive - Whether to append possessive form ('s or ').
 */

function setClientName(spanId, name, possessive = false) {
    const span = document.getElementById(spanId);
    if (!span) return;
  
    let finalName = name.trim();
  
    if (possessive) {
      finalName = finalName.endsWith("s") ? finalName + "'" : finalName + "'s";
    }
  
    span.textContent = finalName;
  }
  

  function applyFormToReport() {
    const clientName = document.getElementById('clientName').value || '—';
    const reportDate = document.getElementById('reportDate').value || '—';
    const reportId = document.getElementById('reportId').value || '—';

    // Set client information
    setClientName('r_name', clientName);
    document.getElementById('r_date').textContent = reportDate;
    document.getElementById('r_id').textContent = reportId;
    setClientName('r_footer_name', clientName);
    setClientName('r_benefit_name', clientName);
    setClientName('r_overall_name', clientName);
    setClientName('r_hand_mistake_name', clientName, true);
    setClientName('r_hand_correction_name', clientName, true);
    setClientName('r_expert_sugg_name', clientName);

    // Mistakes in signature
    
   const list = document.getElementById("r_mistakes_list");
list.innerHTML = "";

document.querySelectorAll(".mistake-desc-block").forEach(block => {
  const title = block.querySelector("strong").textContent;
  const desc = block.querySelector("textarea").value.trim();

  const li = document.createElement("li");
  li.className = "mistake-item";

  const t = document.createElement("div");
  t.className = "mistake-title";
  t.textContent = title;

  const p = document.createElement("p");
  p.textContent = desc;

  li.appendChild(t);
  li.appendChild(p);
  list.appendChild(li);
});
const preview = document.getElementById("r_handwritingMistakes");
preview.innerHTML = "";
// ======================
// Handwriting Mistakes (PREVIEW)
// ======================

const selected = document
  .getElementById("handMistakes")
  .value
  .split(",")
  .map(v => v.trim())
  .filter(Boolean);

const Hstore = getHandMistakeStore();

selected.forEach((title, i) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${i + 1}. ${title}</strong><br>${Hstore[title] || ""}`;
  preview.appendChild(p);
});



    // ======================
    // Strengths (DROPDOWN)
    // ======================

    const sList = document.getElementById('r_strengths_list');
    sList.innerHTML = '';

    const strengths = document
      .getElementById('strengths')
      .value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);

    strengths.forEach(val => {
      const li = document.createElement('li');
      li.textContent = val;
      sList.appendChild(li);
    });

    // ======================
// Handwriting Corrections (PREVIEW)
// ======================
const hcPreview = document.getElementById("r_handwritingCorrections");
hcPreview.innerHTML = "";

const handwritingCorrections = document
  .getElementById("handCorrections")
  .value
  .split(",")
  .map(v => v.trim())
  .filter(Boolean);

handwritingCorrections.forEach((text, i) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${i + 1}. ${text}</strong>`;
  hcPreview.appendChild(p);
});
    // ======================
    // Weaknesses (DROPDOWN)
    // ======================
    const wList = document.getElementById('r_weaknesses_list');
    wList.innerHTML = '';

    const weaknesses = document
      .getElementById('weaknesses')
      .value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);

    weaknesses.forEach(val => {
      const li = document.createElement('li');
      li.textContent = val;
      wList.appendChild(li);
    });
    
    // Overall assessment
    document.getElementById('r_overall').textContent =
  document.getElementById('overallAssessment').value || '';
    // Corrections made in signature
    const corrList = document.getElementById("r_corrections_list");
corrList.innerHTML = "";

const selectedCorrections = document
  .getElementById("corrections")
  .value
  .split(",")
  .map(v => v.trim())
  .filter(Boolean);

const store = getSignatureCorrectionStore();

selectedCorrections.forEach(title => {
  const li = document.createElement("li");

  const strong = document.createElement("strong");
  strong.textContent = title;

  const p = document.createElement("p");
  p.textContent = store[title] || "";

  li.appendChild(strong);
  li.appendChild(p);

  corrList.appendChild(li);
});
    // Additional fields
    document.getElementById('r_overallbenefit').textContent = document.getElementById('overallBenefit').value;
    document.getElementById('r_affirmation').textContent = document.getElementById('phase3').value;
    const cpreview = document.getElementById("r_handwritingCorrections");
    cpreview.innerHTML = "";

    document
      .querySelectorAll("#handCorrectionDescriptions textarea")
      .forEach((ta, i) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${i + 1}.</strong> ${ta.value}`;
        cpreview.appendChild(p);
      });
    document.getElementById('r_expert_rec').textContent = document.getElementById('expertRec').value;
}


// RESET BUTTON
document.getElementById('resetBtn').addEventListener('click', ()=>{
  if(!confirm('Reset form and report to defaults?')) return;
  location.reload();
});
const categorySelect = document.getElementById("handCategory");

Object.keys(handwritingMistakeCatalog).forEach(cat => {
  const opt = document.createElement("option");
  opt.value = cat;
  opt.textContent = cat;
  categorySelect.appendChild(opt);
});
categorySelect.addEventListener("change", () => {
  const category = categorySelect.value;
  if (!category) return;

  createEditableDropdown({
    inputId: "handMistakeInput",
    dropdownId: "handMistakeDropdown",
    tagContainerId: "handMistakeTagContainer",
    textareaId: "handMistakes",
    listKey: "handMistakeTemp", // temp list
    defaultList: Object.keys(handwritingMistakeCatalog[category]),
    allowAdd: false,
    allowRemove: false,
    onChange: renderHandMistakeDescriptions
  });
});
function renderHandMistakeDescriptions(selectedTitles) {
  const container = document.getElementById("handMistakeDescriptions");
  const store = getHandMistakeStore();
  const category = document.getElementById("handCategory").value;

  container.innerHTML = "";

  selectedTitles.forEach(title => {
    const block = document.createElement("div");
    block.className = "hmistake-desc-block";

    const label = document.createElement("strong");
    label.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.value =
      store[title] ||
      handwritingMistakeCatalog[category]?.[title] ||
      "";

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
function renderCorrectionDescriptions(selectedTitles) {
  const container = document.getElementById("correctionDescriptions");
  const store = getSignatureCorrectionStore();

  container.innerHTML = "";

  selectedTitles.forEach(title => {
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
      status.textContent = "● Unsaved";
      status.style.color = "#d39e00";
    };

    saveBtn.onclick = () => {
      store[title] = textarea.value.trim();
      saveSignatureCorrectionStore(store);
      applyFormToReport();

      status.textContent = "✓ Saved";
      status.style.color = "green";
      setTimeout(() => (status.textContent = ""), 1500);
    };

    block.appendChild(heading);
    block.appendChild(textarea);
    block.appendChild(saveBtn);
    block.appendChild(status);

    container.appendChild(block);
  });
  applyFormToReport();
}
function renderMistakeDescriptions(selectedTitles) {
  const container = document.getElementById("mistakeDescriptions");
  const store = getSignatureMistakeStore();

  container.innerHTML = "";

  selectedTitles.forEach(title => {
    const block = document.createElement("div");
    block.className = "mistake-desc-block";

    const heading = document.createElement("strong");
    heading.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.className = "sign_mistake_desc";
    textarea.placeholder = "Enter graphological interpretation...";
    textarea.value = store[title] || "";

    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "save-desc-btn";
    saveBtn.textContent = "Save";

    const status = document.createElement("span");
    status.className = "save-status";
    status.style.marginLeft = "8px";

    // 🔁 Auto-save while typing
    textarea.oninput = () => {
      store[title] = textarea.value;
      saveSignatureMistakeStore(store);
      applyFormToReport();

      status.textContent = "● Unsaved changes";
      status.style.color = "#d39e00";
    };

    // 💾 Explicit Save button
    saveBtn.onclick = () => {
      store[title] = textarea.value;
      saveSignatureMistakeStore(store);
      applyFormToReport();

      status.textContent = "✓ Saved";
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

