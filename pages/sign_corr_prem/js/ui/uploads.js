import { readImageFile } from "./shared.js";

/**
 * Uploads module.
 *
 * Bridges left-panel file inputs to right-panel report image containers.
 * Keeps upload-related responsibilities isolated from section text logic.
 */
export function createReportImageSetter(imgId, placeholderId) {
  return function setReportImage(dataUrl) {
    const img = document.getElementById(imgId);
    const placeholder = document.getElementById(placeholderId);
    if (!img || !placeholder) return;

    img.src = dataUrl;
    img.style.display = "block";
    placeholder.style.display = "none";
  };
}

export function createSingleImageUpload(uploadId, previewId, reportUpdateFunction) {
  // Handles single image uploader lifecycle: select -> preview -> report image update.
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

export function createMultipleImageUpload(uploadId, previewId, reportContainerId, maxImages = 3) {
  // Handles multi-image corrected signature uploads (limited to maxImages).
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

export function setupImageUploads() {
  // Central bootstrap used by hub module to wire all image upload fields once.
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
}
