import { readImageFile } from "./shared.js";

/**
 * uploads.js
 *
 * Purpose:
 * Handles all upload-input listeners and report image rendering.
 *
 * Section Map:
 * 1) Single image upload helpers (main signature, optional handwriting)
 * 2) Multiple image upload helper (corrected samples)
 * 3) Bootstrap function to wire all upload fields
 */

// -----------------------------------------------------------------------------
// Section 1: Single Image Upload Helpers
// -----------------------------------------------------------------------------
/**
 * Generic listener for a single file input.
 * - Reads selected image
 * - Updates local preview panel
 * - Forwards data URL to report updater callback
 */
export function createSingleImageUpload(uploadId, previewId, reportUpdateFunction) {
  const uploadElement = document.getElementById(uploadId);

  uploadElement.addEventListener("change", (e) => {
    const f = e.target.files[0];
    const previewElement = document.getElementById(previewId);

    if (!f) {
      previewElement.textContent = "No image";
      return;
    }

    readImageFile(f, (data) => {
      previewElement.innerHTML = '<img style="max-width:100%;height:auto;" src="' + data + '" />';
      reportUpdateFunction(data);
    });
  });
}

/**
 * Returns a function that updates a report image + placeholder visibility.
 * This keeps the upload layer generic and report-specific DOM updates isolated.
 */
export function createReportImageSetter(imgId, placeholderId) {
  return function (dataUrl) {
    const img = document.getElementById(imgId);
    const placeholder = document.getElementById(placeholderId);

    img.src = dataUrl;
    img.style.display = "block";
    placeholder.style.display = "none";
  };
}

// -----------------------------------------------------------------------------
// Section 2: Multiple Image Upload Helper
// -----------------------------------------------------------------------------
/**
 * Listener for multiple image uploads (corrected signature samples).
 * Only first `maxImages` are consumed to keep layout predictable.
 */
export function createMultipleImageUpload(uploadId, previewId, reportContainerId, maxImages = 3) {
  const uploadElement = document.getElementById(uploadId);

  uploadElement.addEventListener("change", (e) => {
    const files = Array.from(e.target.files).slice(0, maxImages);
    const previewElement = document.getElementById(previewId);

    if (files.length === 0) {
      previewElement.textContent = "No images";
      return;
    }

    previewElement.textContent = files.length + " image(s) selected";

    const container = document.getElementById(reportContainerId);
    container.innerHTML = "";

    files.forEach((f) => {
      readImageFile(f, (data) => {
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

// -----------------------------------------------------------------------------
// Section 3: Upload Bootstrap
// -----------------------------------------------------------------------------
/**
 * Wires all upload controls used in the standard flow.
 * Handwriting uploads are intentionally kept commented to preserve
 * existing business flow behavior from the previous implementation.
 */
export function setupImageUploads() {
  const setReportMainImage = createReportImageSetter("r_main_img", "r_main_placeholder");

  createSingleImageUpload("uploadMain", "mainPreview", setReportMainImage);
  // Preserved behavior: handwriting uploads are disabled in standard flow.
  // createSingleImageUpload("uploadMainHandwriting", "mainPreviewHandwriting", createReportImageSetter("r_handwriting_img", "r_handwriting_placeholder"));
  // createSingleImageUpload("uploadCorrectHandwriting", "PreviewCorrectHandwriting", createReportImageSetter("r_handwritingCorrection_img", "r_handwritingCorrection_placeholder"));
  createMultipleImageUpload("uploadThree", "threePreview", "r_corrected_imgs", 3);
}

