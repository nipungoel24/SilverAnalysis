import { createEditableDropdown } from "./shared.js";

/**
 * Section 4 module: Corrected Signature
 *
 * Responsibilities:
 * - Render editable description blocks for selected correction titles
 * - Support dynamic add/remove correction cards
 * - Persist correction descriptions to signature correction store
 */
export function renderCorrectionDescriptions(selectedTitles) {
  // Generates left-panel editable blocks for each selected correction title.
  const container = document.getElementById("correctionDescriptions");
  const store = globalThis.getSignatureCorrectionStore();

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
      globalThis.saveSignatureCorrectionStore(store);
      globalThis.applyFormToReport?.();

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

  globalThis.applyFormToReport?.();
}

export function addCorrectionItem() {
  // Legacy-compatible dynamic row builder with searchable correction title picker.
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

  const store = globalThis.getSignatureCorrectionStore();
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
      globalThis.applyFormToReport?.();
    }
  });

  item.querySelector(".save-btn").onclick = () => {
    // Persist selected correction description and update preview.
    const title = item.querySelector(".sign_correction_title").value.trim();
    if (!title) {
      alert("Select a correction title first");
      return;
    }

    store[title] = descBox.value.trim();
    globalThis.saveSignatureCorrectionStore(store);

    status.textContent = "Saved";
    status.style.color = "green";
    setTimeout(() => {
      status.textContent = "";
    }, 1500);

    globalThis.applyFormToReport?.();
  };

  item.querySelector(".remove-btn").onclick = () => item.remove();
}

export function removeCorrectionItem(btn) {
  // Generic row removal utility for correction cards.
  btn.parentElement?.remove();
}
