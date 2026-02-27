import { createEditableDropdown } from "./shared.js";

/**
 * Section 2 module: Graphological Mistakes in Handwriting
 *
 * Responsibilities:
 * - Manage category dropdown options
 * - Allow adding new mistake entries into selected category
 * - Render interpretation textareas for selected handwriting mistakes
 * - Persist edits and keep preview in sync
 */
export function refreshHandwritingCategoryDropdown() {
  // Re-populates category <select> from persisted handwriting catalog.
  const select = document.getElementById("handCategory");
  const catalog = globalThis.getHandwritingCatalog();

  select.innerHTML = '<option value="">Select Category</option>';
  Object.keys(catalog).forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

export function addHandwritingCategory(categoryName) {
  // Adds new category bucket into catalog if missing, then refreshes UI options.
  if (!categoryName.trim()) return;

  const catalog = globalThis.getHandwritingCatalog();
  if (!catalog[categoryName]) {
    catalog[categoryName] = {};
    globalThis.saveHandwritingCatalog(catalog);
  }

  refreshHandwritingCategoryDropdown();
}

export function addHandwritingMistake(category, title, description) {
  // Inserts a mistake under current category and refreshes dependent dropdown list.
  if (!category || !title.trim()) return;

  const catalog = globalThis.getHandwritingCatalog();
  if (!catalog[category]) {
    catalog[category] = {};
  }

  catalog[category][title] = description || "";
  globalThis.saveHandwritingCatalog(catalog);

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

export function promptAddHandwritingMistake() {
  // Called from inline HTML button in section 2.
  // Uses prompt() flow to quickly append entries during report creation.
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

export function renderHandMistakeDescriptions(selectedTitles) {
  // Renders editable interpretation textareas under selected handwriting mistakes.
  const container = document.getElementById("handMistakeDescriptions");
  const store = globalThis.getHandMistakeStore();
  const category = document.getElementById("handCategory").value;
  const catalog = globalThis.getHandwritingCatalog();

  container.innerHTML = "";

  selectedTitles.forEach((title) => {
    const block = document.createElement("div");
    block.className = "hmistake-desc-block";

    const label = document.createElement("strong");
    label.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.value = store[title] || catalog[category]?.[title] || "";

    textarea.oninput = () => {
      store[title] = textarea.value;
      globalThis.saveHandMistakeStore(store);
      globalThis.applyFormToReport?.();
    };

    block.appendChild(label);
    block.appendChild(textarea);
    container.appendChild(block);
  });

  globalThis.applyFormToReport?.();
}
