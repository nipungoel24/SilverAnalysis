(function () {
  function toCompressedDataURL(url, quality) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = url;
    });
  }

  function setupDownloadHtml() {
    var btn = document.getElementById("downloadHtml");
    if (!btn) return;

    btn.addEventListener("click", async function () {
      var previewArea = document.querySelector(".preview-area");
      if (!previewArea) return;

      var styles = Array.from(document.styleSheets)
        .map(function (ss) {
          try {
            return Array.from(ss.cssRules)
              .map(function (rule) {
                return rule.cssText;
              })
              .join("");
          } catch (_e) {
            return "";
          }
        })
        .join("");

      var clone = previewArea.cloneNode(true);
      var images = clone.querySelectorAll("img");

      for (var i = 0; i < images.length; i++) {
        var img = images[i];
        try {
          var dataUrl = await toCompressedDataURL(img.src, 0.7);
          img.src = dataUrl;
        } catch (_e2) {
          console.warn("Could not inline image", img.src);
        }
      }

      var htmlContent = "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "<meta charset=\"utf-8\">\n" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
        "<title>Signature Analysis Snapshot</title>\n" +
        "<style>\n" +
        styles +
        "\n#printBtn { display:inline-block; padding:10px 15px; margin:10px 0; background:teal; color:#fff; border:none; cursor:pointer; font-size:16px; }\n" +
        "</style>\n" +
        "</head>\n" +
        "<body>\n" +
        clone.outerHTML +
        "\n</body>\n" +
        "</html>";

      var blob = new Blob([htmlContent], { type: "text/html" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");

      var nameEl = document.getElementById("r_name") || {};
      var filename = (nameEl.textContent || "signature_analysis")
        .trim()
        .replace(/\s+/g, "_")
        .toLowerCase();

      a.href = url;
      a.download = filename + ".html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  document.addEventListener("DOMContentLoaded", setupDownloadHtml);
})();