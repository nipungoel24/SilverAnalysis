/**
 * Legacy compatibility helpers.
 *
 * These utilities are preserved so existing inline handlers and older flows
 * still work even though newer section modules provide richer editors.
 */
export function addMistakeItem() {
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

export function removeMistakeItem(button) {
  button.parentElement?.remove();
}

export function addStrengthItem() {
  const container = document.getElementById("strengths_list");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "strength_item";
  div.innerHTML = '<input type="text" placeholder="Enter a strength" class="strength_title"/><button type="button" onclick="removeStrengthItem(this)">Remove</button>';
  container.appendChild(div);
}

export function removeStrengthItem(btn) {
  btn.parentElement?.remove();
}

export function addWeaknessItem() {
  const container = document.getElementById("weaknesses_list");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "weakness_item";
  div.innerHTML = '<input type="text" placeholder="Enter a weakness" class="weakness_title"/><button type="button" onclick="removeWeaknessItem(this)">Remove</button>';
  container.appendChild(div);
}

export function removeWeaknessItem(btn) {
  btn.parentElement?.remove();
}
