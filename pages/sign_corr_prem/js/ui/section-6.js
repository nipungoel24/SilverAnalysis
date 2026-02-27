/**
 * Section 6 module: Graphological Corrections in Handwriting
 *
 * Responsibility:
 * - Render correction blocks with editable title + description
 * - Trigger live preview updates on input changes
 */
export function renderHandwritingCorrectionDescriptions(selectedTitles) {
  const container = document.getElementById("handCorrectionDescriptions");
  container.innerHTML = "";

  selectedTitles.forEach((title) => {
    const block = document.createElement("div");
    block.className = "correction-desc-block";

    const heading = document.createElement("input");
    heading.type = "text";
    heading.value = title;
    heading.className = "editable-mistake-title";
    heading.oninput = () => globalThis.applyFormToReport?.();

    const textarea = document.createElement("textarea");
    textarea.value = title;
    textarea.placeholder = "Edit handwriting correction...";
    textarea.oninput = () => globalThis.applyFormToReport?.();

    block.appendChild(heading);
    block.appendChild(textarea);
    container.appendChild(block);
  });

  globalThis.applyFormToReport?.();
}
