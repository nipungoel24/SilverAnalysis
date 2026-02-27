/**
 * Shared UI utilities used across multiple report sections.
 *
 * This module intentionally contains cross-cutting helpers only:
 * 1) file reading for image uploads
 * 2) name formatting helpers used by preview/report sync
 * 3) reusable dropdown/tag input engine
 * 4) generic LLM request runner used by different buttons
 *
 * NOTE:
 * Storage helpers (get/save) are attached globally from `store.js`.
 */

export function readImageFile(file, cb) {
  // Converts image file -> base64 data URL for immediate preview rendering.
  const reader = new FileReader();
  reader.onload = (e) => cb(e.target.result);
  reader.readAsDataURL(file);
}

export function setClientName(spanId, name, possessive = false) {
  // Updates one preview/report name field and optionally applies possessive form.
  const span = document.getElementById(spanId);
  if (!span) return;

  let finalName = (name || "").trim();
  if (possessive) {
    finalName = finalName.endsWith("s") ? `${finalName}'` : `${finalName}'s`;
  }
  span.textContent = finalName;
}

export function createEditableDropdown({
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
  // Generic searchable multi-select with:
  // - a suggestion dropdown
  // - selected value chips
  // - a hidden textarea sink used as "single source of selected values"
  // - optional add/remove entries persisted in localStorage listKey
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
    // Keep hidden textarea in sync so downstream code can read one canonical field.
    textarea.value = selected.join(", ");
    onChange(selected);
  }

  function renderTags() {
    tagContainer.innerHTML = "";
    selected.forEach((val) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.innerHTML = `${val}<button type="button" class="tag-remove">x</button>`;
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
      row.innerHTML = `<span>${item}</span>${allowRemove ? '<button class="dropdown-remove">x</button>' : ""}`;

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
      // Add-new flow is primarily used by signature mistakes where each new title
      // also needs an initial description entry in signature mistake store.
      const add = document.createElement("div");
      add.className = "dropdown-add";
      add.innerHTML = `+ Add "<strong>${input.value}</strong>"`;
      add.onclick = () => {
        const title = input.value.trim();
        if (!title) return;

        const desc = prompt(`Enter graphological interpretation for:\n"${title}"`);

        const store = globalThis.getSignatureMistakeStore();
        store[title] = desc || "";
        globalThis.saveSignatureMistakeStore(store);

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
