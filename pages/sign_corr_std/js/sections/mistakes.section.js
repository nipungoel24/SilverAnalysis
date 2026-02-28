/**
 * mistakes.section.js
 *
 * Purpose:
 * Owns everything related to Signature Mistakes:
 * - dynamic add/remove inputs in the form
 * - syncing those inputs into report mistake cards
 */

// -----------------------------------------------------------------------------
// Form-side actions (used by inline onclick in HTML)
// -----------------------------------------------------------------------------

/** Adds one mistake input block (title + description + remove button). */
export function addMistakeItem() {
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
  removeBtn.onclick = function () {
    removeMistakeItem(removeBtn);
  };

  item.appendChild(title);
  item.appendChild(desc);
  item.appendChild(removeBtn);
  container.appendChild(item);
}

/** Removes the mistake block associated with the clicked remove button. */
export function removeMistakeItem(button) {
  button.parentElement?.remove();
}

// -----------------------------------------------------------------------------
// Report-side sync
// -----------------------------------------------------------------------------

/**
 * Copies the editable mistakes from form list to the report preview list.
 */
export function syncMistakesSection() {
  const mistakesList = document.getElementById("r_mistakes_list");
  mistakesList.innerHTML = "";

  const items = document.querySelectorAll("#sign_mistakes_list .sign_mistake_item");
  items.forEach((item) => {
    const titleText = item.querySelector(".sign_mistake_title")?.value.trim() || "";
    const descText = item.querySelector(".sign_mistake_desc")?.value.trim() || "";

    if (!titleText && !descText) return;

    const li = document.createElement("li");
    li.className = "mistake-item";

    if (titleText) {
      const title = document.createElement("div");
      title.className = "mistake-title";
      title.textContent = titleText;
      li.appendChild(title);
    }

    if (descText) {
      const p = document.createElement("p");
      p.textContent = descText;
      li.appendChild(p);
    }

    mistakesList.appendChild(li);
  });
}

