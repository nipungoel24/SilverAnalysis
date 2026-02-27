import { createEditableDropdown } from "./shared.js";

/**
 * Section 1 module: Mistakes in Signature
 *
 * Responsibilities:
 * - Initialize the "mistakes" dropdown/tag selector
 * - Render editable blocks for each selected mistake
 * - Persist title/description updates back to signature mistake store
 * - Trigger report preview refresh after any change
 */
export function initSignatureMistakeDropdown() {
  const store = globalThis.getSignatureMistakeStore();

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

export function renderMistakeDescriptions(selectedTitles) {
  // Builds the dynamic editor list below "Mistakes in Signature" in left panel.
  const container = document.getElementById("mistakeDescriptions");
  const store = globalThis.getSignatureMistakeStore();
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
      // If title key changes, remap existing description to new key in store.
      const newTitle = heading.value.trim();
      if (newTitle && newTitle !== currentTitleKey) {
        store[newTitle] = store[currentTitleKey];
        delete store[currentTitleKey];
        currentTitleKey = newTitle;

        globalThis.saveSignatureMistakeStore(store);
        globalThis.applyFormToReport?.();

        status.textContent = "Title Updated";
        status.style.color = "#28a745";
        setTimeout(() => {
          status.textContent = "";
        }, 1500);
      }
    };

    textarea.oninput = () => {
      // Live persistence + live preview updates while user types.
      store[currentTitleKey] = textarea.value;
      globalThis.saveSignatureMistakeStore(store);
      globalThis.applyFormToReport?.();

      status.textContent = "Unsaved changes";
      status.style.color = "#d39e00";
    };

    saveBtn.onclick = () => {
      // Explicit save keeps UX parity with other sections that have Save buttons.
      store[currentTitleKey] = textarea.value;
      globalThis.saveSignatureMistakeStore(store);
      globalThis.applyFormToReport?.();

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

  globalThis.applyFormToReport?.();
}
