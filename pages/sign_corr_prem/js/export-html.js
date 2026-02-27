/**
 * sign_corr_prem/js/export-html.js
 *
 * Encapsulates Download HTML behavior for the preview report.
 *
 * Flow summary:
 * 1) Capture all active CSS rules from loaded stylesheets.
 * 2) Clone the current preview DOM.
 * 3) Inline images as compressed data URLs for portability.
 * 4) Build a standalone HTML document and trigger download.
 */

function setupDownloadHtml() {
  const btn = document.getElementById("downloadHtml");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const previewArea = document.querySelector(".preview-area");
    if (!previewArea) return;

    const styles = Array.from(document.styleSheets)
      .map(sheet => {
        try {
          return Array.from(sheet.cssRules)
            .map(rule => rule.cssText)
            .join("");
        } catch {
          return "";
        }
      })
      .join("");

    const clone = previewArea.cloneNode(true);
    const images = clone.querySelectorAll("img");

    for (const img of images) {
      if (!img.src) continue;
      try {
        img.src = await toCompressedDataURL(img.src, 0.7);
      } catch (e) {
        console.warn("Image failed:", img.src);
      }
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Signature Report</title>
<style>${styles}</style>
</head>
<body>${clone.outerHTML}</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const name =
      document.getElementById("r_name")?.textContent
        ?.trim()
        ?.replace(/\s+/g, "_")
        ?.toLowerCase() || "signature_report";

    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

function toCompressedDataURL(url, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = reject;
    img.src = url;
  });
}

window.addEventListener("DOMContentLoaded", setupDownloadHtml);