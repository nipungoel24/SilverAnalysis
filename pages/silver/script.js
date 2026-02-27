// Initialize sections
const sections = [
    { title: "Analysis of Strength, Weakness and Behavioural Patterns", topics: ["Strengths", "Weakness", "Behavioural Patterns"] },
    { title: "Analysis of Monetary Aspects, Abroad Settlement", topics: ["Monetary Aspects", "Abroad Settlement"] },
    { title: "Analysis of Mental and Physical Health", topics: ["Mental Health", "Physical Health"] },
    { title: "Analysis of Job & Business Opportunities and Government Job Possibilities", topics: ["Job Opportunities", "Business Opportunities", "Possibilities of Govt Job"] }
];

// Create sections dynamically
const container = document.getElementById("sections");

sections.forEach(section => {
    let sectionTitleDiv = document.createElement("div");
    sectionTitleDiv.className = "section";
    sectionTitleDiv.innerHTML = `<h2>${section.title}</h2>`;
    container.appendChild(sectionTitleDiv);

    section.topics.forEach(topic => {
        let sectionDiv = document.createElement("div");
        sectionDiv.className = "section";
        sectionDiv.innerHTML = `<h2>${topic}</h2><textarea id="${topic.replace(/ /g, '-')}" placeholder="Enter ${topic} details..."></textarea>`;
        container.appendChild(sectionDiv);
    });
});

// Event Listeners
document.getElementById("signature-upload").addEventListener("change", previewSignature);
document.getElementById("pdf-upload").addEventListener("change", handlePDFUpload);
document.getElementById("download-btn").addEventListener("click", downloadPDF);
document.getElementById("view-btn").addEventListener("click", viewPDF);

function previewSignature(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById("signature-preview");
            img.src = e.target.result;
            img.style.display = "block";
            document.getElementById("signature-status").innerText = "Signature Uploaded ✅";
        };
        reader.readAsDataURL(file);
    }
}

function handlePDFUpload(event) {
    const files = event.target.files;
    if (files.length > 0) {
        document.getElementById("remedy-status").innerText = "Remedy PDFs Uploaded ✅";
    }
}

// Loader functions
function showLoader() {
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('content').style.opacity = '0.5';
    document.getElementById('content').style.pointerEvents = 'none';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.opacity = '1';
    document.getElementById('content').style.pointerEvents = 'auto';
}

// PDF Generation Functions
function generatePDF(callback) {
    showLoader();
    
    try {
        const { jsPDF } = window.jspdf;
        let doc = new jsPDF({
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        });

        let marginLeft = 20;
        let maxWidth = 170;
        let lineHeight = 7;
        let safeMarginBottom = 270;
        let y;
        let pageNumber = 1;

        // Load images first
        let coverImage = new Image();
        coverImage.src = "../../assets/shared/page1.png";
        let logoImage = new Image();
        logoImage.src = "../../assets/shared/logo.png";

        // Wait for both images to load before proceeding
        let imagesLoaded = 0;
        function checkImagesLoaded() {
            imagesLoaded++;
            if (imagesLoaded === 2) {
                generatePDFContent();
            }
        }

        coverImage.onload = checkImagesLoaded;
        logoImage.onload = checkImagesLoaded;

        function generatePDFContent() {
            try {
                // Add cover page
                doc.addImage(coverImage, "PNG", 0, 0, 210, 297);
                
                // Add user name if provided
                let userName = document.getElementById("user-name").value.trim();
                if (userName.length > 0) {
                    doc.setFont("times", "bold");
                    doc.setFontSize(60);
                    doc.setTextColor(255, 212, 35);
                    
                    let splitName = doc.splitTextToSize(userName, 160);
                    if (splitName.length > 1) {
                        let nameY = 245;
                        doc.text(splitName[0], 32, nameY - 20);
                        doc.text(splitName[1], 32, nameY);
                    } else {
                        doc.text(splitName[0], 32, 245);
                    }
                }
                
                addPageNumber(doc, pageNumber);
                pageNumber++;

                // Add content sections
                sections.forEach((section, index) => {
                    doc.addPage();
                    doc.rect(0, 0, 210, 297, "F"); 
                    addHeader(doc, logoImage);

                    doc.setFont("times", "bold");
                    doc.setFontSize(24);
                    doc.setTextColor(255, 212, 35);
                    let titleText = doc.splitTextToSize(section.title, maxWidth);
                    let titleHeight = titleText.length * 10;
                    let titleY = (297 - titleHeight) / 2;

                    titleText.forEach(line => {
                        let textWidth = doc.getTextWidth(line);
                        doc.text(line, (210 - textWidth) / 2, titleY);
                        titleY += 10;
                    });

                    addPageNumber(doc, pageNumber);
                    pageNumber++;

                    y = 50;

                    doc.addPage();
                    doc.rect(0, 0, 210, 297, "F");
                    addHeader(doc, logoImage);

                    let hasContent = false;

                    section.topics.forEach(title => {
                        let text = document.getElementById(title.replace(/ /g, '-')).value.trim();
                        if (text.length === 0) return;
                        hasContent = true;

                        if (y + 15 > safeMarginBottom) {
                            addPageNumber(doc, pageNumber);
                            pageNumber++;
                            doc.addPage();
                            doc.rect(0, 0, 210, 297, "F");
                            addHeader(doc, logoImage);
                            y = 50;
                        }

                        doc.setFont("times", "bold");
                        doc.setFontSize(24);
                        doc.setTextColor(255, 212, 35);
                        let topicWidth = doc.getTextWidth(title);
                        doc.text(title, (210 - topicWidth) / 2, y);
                        y += 13;

                        doc.setFont("times", "normal");
                        doc.setFontSize(20);
                        doc.setTextColor(255, 255, 255);
                        
                        let splitText = doc.splitTextToSize(text, maxWidth);
                        splitText.forEach(line => {
                            if (y + lineHeight > safeMarginBottom) {
                                addPageNumber(doc, pageNumber);
                                pageNumber++;
                                doc.addPage();
                                doc.rect(0, 0, 210, 297, "F");
                                addHeader(doc, logoImage);
                                doc.setFontSize(20);
                                y = 50;
                            }
                            doc.text(line, marginLeft, y);
                            y += lineHeight;
                        });

                        y += 15;
                    });

                    if (!hasContent) {
                        y = 50;
                    }

                    addPageNumber(doc, pageNumber);
                    pageNumber++;
                });

                // Add Signature Correction page
                doc.addPage();
                doc.rect(0, 0, 210, 297, "F"); 
                addHeader(doc, logoImage);

                doc.setFont("times", "bold");
                doc.setFontSize(24);
                doc.setTextColor(255, 212, 35);
                let sigTitle = "Signature Correction";
                let sigTextWidth = doc.getTextWidth(sigTitle);
                doc.text(sigTitle, (210 - sigTextWidth) / 2, 50);

                // Check for signature image
                let signatureInput = document.getElementById("signature-upload");
                if (signatureInput && signatureInput.files.length > 0) {
                    let file = signatureInput.files[0];
                    let reader = new FileReader();

                    reader.onload = function (event) {
                        let signatureImg = new Image();
                        signatureImg.src = event.target.result;

                        signatureImg.onload = function () {
                        const maxWidth = 100;
                        const maxHeight = 40;

                        let width = signatureImg.width;
                        let height = signatureImg.height;

                        // Calculate the scaling ratio to fit within the box without distortion
                        const widthRatio = maxWidth / width;
                        const heightRatio = maxHeight / height;
                        const ratio = Math.min(widthRatio, heightRatio);

                        width = width * ratio;
                        height = height * ratio;

                        doc.addImage(signatureImg, "PNG", 50, 65, width, height);
                        addSignatureHelpSection();
                    };
                    };
                    reader.readAsDataURL(file);
                } else {
                    addSignatureHelpSection();
                }

                function addSignatureHelpSection() {
                    let yPos = signatureInput && signatureInput.files.length > 0 ? 140 : 80;

                    doc.setFont("times", "bold");
                    doc.setFontSize(22);
                    doc.setTextColor(255, 212, 35);
                    let helpTitle = "How will this signature help";
                    let helpTextWidth = doc.getTextWidth(helpTitle);
                    doc.text(helpTitle, (210 - helpTextWidth) / 2, yPos);
                    yPos += 10;

                    let sigText = document.getElementById("Signature-Correction").value.trim();
                    doc.setFont("times", "normal");
                    doc.setFontSize(20);
                    doc.setTextColor(255, 255, 255);
                    let splitSigText = doc.splitTextToSize(sigText, maxWidth);

                    splitSigText.forEach(line => {
                        if (yPos + lineHeight > safeMarginBottom) {
                            addPageNumber(doc, pageNumber);
                            pageNumber++;
                            doc.addPage();
                            doc.rect(0, 0, 210, 297, "F");
                            addHeader(doc, logoImage);
                            doc.setFontSize(20);
                            yPos = 50;
                        }
                        doc.text(line, marginLeft, yPos);
                        yPos += lineHeight;
                    });

                    addPageNumber(doc, pageNumber);
                    pageNumber++;
                    
                    // Append uploaded PDFs after all content is added
                    appendUploadedPDFs(doc, callback);
                }
            } catch (error) {
                hideLoader();
                console.error("Error generating PDF content:", error);
                alert("An error occurred while generating the PDF. Please try again.");
            }
        }
        function appendUploadedPDFs(doc, callback) {
            let pdfInput = document.getElementById("pdf-upload");
            let fileIndex = 0;
        
            function processNextFile() {
                if (!pdfInput || fileIndex >= pdfInput.files.length) {
                    appendFixedPDF(doc, callback); // ⬅ Append fixed PDF at the end
                    return;
                }
        
                let file = pdfInput.files[fileIndex];
                let reader = new FileReader();
        
                reader.onload = function (event) {
                    let pdfData = new Uint8Array(event.target.result);
                    pdfjsLib.getDocument({ data: pdfData }).promise.then(pdfDoc => {
                        let totalPages = pdfDoc.numPages;
        
                        function addPage(pageNumber) {
                            if (pageNumber > totalPages) {
                                fileIndex++;
                                processNextFile();
                                return;
                            }
        
                            pdfDoc.getPage(pageNumber).then(page => {
                                let viewport = page.getViewport({ scale: 1.0 });
                                let canvas = document.createElement("canvas");
                                let context = canvas.getContext("2d");
        
                                canvas.width = viewport.width;
                                canvas.height = viewport.height;
        
                                page.render({ canvasContext: context, viewport }).promise.then(() => {
                                    let imgData = canvas.toDataURL("image/png");
                                    doc.addPage();
                                    doc.addImage(imgData, "JPEG", 10, 10, 190, 280, '', 'FAST');
                                    addPage(pageNumber + 1);
                                });
                            });
                        }
        
                        addPage(1);
                    }).catch(error => {
                        hideLoader();
                        console.error("Error processing PDF:", error);
                        alert("An error occurred while processing the uploaded PDF. Please try again.");
                    });
                };
        
                reader.onerror = function() {
                    hideLoader();
                    alert("Error reading PDF file. Please try again.");
                };
        
                reader.readAsArrayBuffer(file);
            }
        
            processNextFile();
        }
        

        function addHeader(doc, img) {
            let logoWidth = 18;
            let logoHeight = 18;
            let headerMarginTop = 8;
            let textX = 210 - 75;
            let logoY = headerMarginTop;

            doc.addImage(img, "PNG", 10, logoY, logoWidth, logoHeight);
            doc.setFont("times");
            doc.setFontSize(16);
            doc.setTextColor(255, 255, 255);
            let adjustedTextX = textX + 20;
            doc.text("www.explormee.com", adjustedTextX, logoY + 8);
        }

        function addPageNumber(doc, pageNumber) {
            doc.setFont("times", "normal");
            doc.setFontSize(12);
            doc.setTextColor(255, 255, 255);
            doc.text(`Page ${pageNumber}`, 100, 290);
        }
    } catch (error) {
        hideLoader();
        console.error("Error initializing PDF generation:", error);
        alert("An error occurred while initializing PDF generation. Please try again.");
    }
}

function downloadPDF() {
    generatePDF(doc => {
        try {
            let userName = document.getElementById("user-name").value.trim();
            let fileName = userName ? `${userName}-Personality-Report.pdf` : "Personality-Report.pdf";
            doc.save(fileName, { compress: true });
        } catch (error) {
            console.error("Error saving PDF:", error);
            alert("An error occurred while saving the PDF. Please try again.");
        } finally {
            hideLoader();
        }
    });
}

function viewPDF() {
    generatePDF(doc => {
        try {
            const pdfBlob = doc.output("blob");
            const pdfUrl = URL.createObjectURL(pdfBlob);
            window.open(pdfUrl, "_blank");
        } catch (error) {
            console.error("Error viewing PDF:", error);
            alert("An error occurred while viewing the PDF. Please try again.");
        } finally {
            hideLoader();
        }
    });
}
function appendFixedPDF(doc, callback) {
    fetch("../../assets/shared/last.pdf")
        .then(res => res.arrayBuffer())
        .then(data => {
            pdfjsLib.getDocument({ data }).promise.then(pdfDoc => {
                let totalPages = pdfDoc.numPages;

                function addPage(pageNumber) {
                    if (pageNumber > totalPages) {
                        callback(doc);
                        return;
                    }

                    pdfDoc.getPage(pageNumber).then(page => {
                        let viewport = page.getViewport({ scale: 1.0 });
                        let canvas = document.createElement("canvas");
                        let context = canvas.getContext("2d");

                        canvas.width = viewport.width;
                        canvas.height = viewport.height;

                        page.render({ canvasContext: context, viewport }).promise.then(() => {
                            let imgData = canvas.toDataURL("image/png");
                            doc.addPage();
                            doc.addImage(imgData, "JPEG", 10, 10, 190, 280, '', 'FAST');
                            addPage(pageNumber + 1);
                        });
                    });
                }

                addPage(1);
            }).catch(error => {
                console.error("Error loading fixed PDF:", error);
                callback(doc); // proceed without it
            });
        })
        .catch(error => {
            console.error("Error fetching fixed PDF:", error);
            callback(doc); // proceed without it
        });
}
