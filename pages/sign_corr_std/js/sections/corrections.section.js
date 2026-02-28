/**
 * corrections.section.js
 *
 * Purpose:
 * Owns signature corrections section:
 * - dynamic add/remove correction blocks in form
 * - syncing corrections to report preview list
 */

// -----------------------------------------------------------------------------
// Form-side actions
// -----------------------------------------------------------------------------

export function addCorrectionItem() {
  const container = document.getElementById("sign_corrections_list");
  const div = document.createElement("div");
  div.className = "sign_correction_item";
  div.innerHTML = `
    <input type="text" placeholder="Enter Title of correction" class="sign_correction_title"/>
    <textarea placeholder="Enter description of correction" class="sign_correction_desc"></textarea>
    <button type="button" onclick="removeCorrectionItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

export function removeCorrectionItem(btn) {
  btn.parentElement?.remove();
}

// -----------------------------------------------------------------------------
// Report-side sync
// -----------------------------------------------------------------------------

export function syncCorrectionsSection() {
  const corrList = document.getElementById("r_corrections_list");
  corrList.innerHTML = "";

  const corrItems = document.querySelectorAll("#sign_corrections_list .sign_correction_item");
  corrItems.forEach((item) => {
    const title = item.querySelector(".sign_correction_title")?.value.trim() || "";
    const desc = item.querySelector(".sign_correction_desc")?.value.trim() || "";

    if (!title && !desc) return;

    const li = document.createElement("li");
    if (title && desc) {
      li.innerHTML = `<strong>${title}:</strong> ${desc}`;
    } else if (title) {
      li.textContent = title;
    } else {
      li.textContent = desc;
    }

    corrList.appendChild(li);
  });
}

