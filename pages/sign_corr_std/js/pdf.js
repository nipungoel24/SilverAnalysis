import { applyFormToReport } from "./report-sync.js";

/**
 * PDF module for sign_corr_std.
 *
 * Purpose:
 * Converts current report-preview DOM state into a styled, multi-section PDF.
 *
 * Section Map:
 * 1) domToPdfBlob() - full PDF composition pipeline
 *    1.1 Layout/colors/typography constants
 *    1.2 Drawing helper utilities
 *    1.3 Section rendering blocks (header -> footer)
 * 2) bindPdfActions() - UI event wiring for preview/download + initial sync
 */
export async function domToPdfBlob() {
  // ---------------------------------------------------------------------------
  // Section 1.1: Document Setup (page metrics + theme system)
  // ---------------------------------------------------------------------------
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const usableWidth = pageWidth - (margin * 2);
  let yPosition = 40;

  const colors = {
    primary: [26, 26, 26],
    accent: [244, 208, 63],
    secondary: [45, 45, 45],
    purple: [142, 68, 173],
    white: [255, 255, 255],
    lightGray: [248, 249, 250],
    warning: [255, 243, 205]
  };

  // ---------------------------------------------------------------------------
  // Section 1.2: Core Drawing Helpers
  // ---------------------------------------------------------------------------
  function addPage() {
    doc.addPage();
    yPosition = 40;
  }

  function checkPageBreak(requiredHeight) {
    if (yPosition + requiredHeight > pageHeight - 10) {
      addPage();
    }
  }

  function setColor(colorArray, type = 'text') {
    if (type === 'text') {
      doc.setTextColor(colorArray[0], colorArray[1], colorArray[2]);
    } else if (type === 'fill') {
      doc.setFillColor(colorArray[0], colorArray[1], colorArray[2]);
    } else if (type === 'draw') {
      doc.setDrawColor(colorArray[0], colorArray[1], colorArray[2]);
    }
  }

  // Centralized type scale used across all PDF sections.
  const FONT_SIZES = {
    mainTitle: 24,
    sectionTitle: 18,
    subTitle: 14,
    bodyText: 12,
    smallText: 10
  };

  function addStyledText(text, fontSize = FONT_SIZES.bodyText, fontStyle = 'normal', color = colors.primary, indent = 0) {
    doc.setFont('Georgia', fontStyle);
    doc.setFontSize(fontSize);
    setColor(color, 'text');
    
    const lines = doc.splitTextToSize(text, usableWidth - indent);
    lines.forEach(line => {
      checkPageBreak(18);
      doc.text(line, margin + indent, yPosition);
      yPosition += 18;
    });
  }

  function addBulletPoint(title, desc) {
    const lineHeight = 16;
    const boxPadding = 12;
    const rightPadding = 6;
    const leftBorder = 5;

    const titleLines = doc.splitTextToSize(title, usableWidth - (leftBorder + boxPadding + rightPadding));
    const descLines = doc.splitTextToSize(desc, usableWidth - (leftBorder + boxPadding + rightPadding));
    const boxHeight = (titleLines.length + descLines.length) * lineHeight + boxPadding * 2;

    checkPageBreak(boxHeight + 10);

    setColor([255, 243, 205], 'fill');
    doc.roundedRect(margin, yPosition, usableWidth, boxHeight, 5, 5, 'F');

    setColor([255, 193, 7], 'fill');
    doc.rect(margin, yPosition, leftBorder, boxHeight, 'F');

    let textY = yPosition + boxPadding + 12;

    doc.setFont('Georgia', 'bold');
    doc.setFontSize(FONT_SIZES.subTitle);
    setColor([133, 100, 4], 'text');
    titleLines.forEach(line => {
      doc.text(line, margin + leftBorder + boxPadding, textY);
      textY += lineHeight;
    });

    doc.setFont('Georgia', 'normal');
    doc.setFontSize(FONT_SIZES.bodyText);
    setColor([0, 0, 0], 'text');
    descLines.forEach(line => {
      doc.text(line, margin + leftBorder + boxPadding, textY);
      textY += lineHeight;
    });

    yPosition += boxHeight + 15;
  }

  function addSection(title) {
    yPosition += 20;
    checkPageBreak(80);
    
    setColor([240, 240, 240], 'fill');
    doc.rect(margin - 10, yPosition, usableWidth + 20, 40, 'F');
    
    doc.setFont('Georgia', 'bold');
    doc.setFontSize(FONT_SIZES.sectionTitle);
    setColor(colors.primary, 'text');
    doc.text(title, pageWidth / 2, yPosition + 25, { align: 'center' });
    
    setColor(colors.accent, 'fill');
    doc.rect(pageWidth / 2 - 40, yPosition + 30, 80, 2, 'F');
    
    yPosition += 55;
  }

  function createSection(doc, { title, bullets, impact, practice, yPosition, margin, usableWidth, colors }) {
    const lineHeight = 16;
    const totalHeight = 60 + bullets.length * lineHeight + Math.ceil(impact.length / 80) * lineHeight + Math.ceil(practice.length / 80) * lineHeight + 50;

    if (yPosition + totalHeight > pageHeight - 40) {
      doc.addPage();
      yPosition = 40;
    }

    setColor(colors.lightGray, 'fill');
    doc.roundedRect(margin, yPosition, usableWidth, totalHeight, 5, 5, 'F');

    let boxY = yPosition + 20;

    doc.setFont('Georgia', 'bold');
    doc.setFontSize(FONT_SIZES.subTitle);
    setColor(colors.primary, 'text');
    doc.text(`${title}:`, margin + 20, boxY);
    boxY += 25;

    doc.setFont('Georgia', 'normal');
    doc.setFontSize(FONT_SIZES.bodyText);
    bullets.forEach(point => {
      doc.text(`â€¢ ${point}`, margin + 20, boxY, { maxWidth: usableWidth - 40 });
      boxY += lineHeight;
    });

    boxY += 10;

    doc.setFont('Georgia', 'bold');
    const impactLabel = 'How it impacts growth:';
    doc.text(impactLabel, margin + 20, boxY);
    const impactWidth = doc.getTextWidth(impactLabel);
    doc.setLineWidth(0.2);
    doc.setDrawColor(0, 0, 0);
    doc.line(margin + 20, boxY + 2, margin + 20 + impactWidth, boxY + 2);
    boxY += lineHeight;

    doc.setFont('Georgia', 'normal');
    doc.text(impact, margin + 20, boxY, { maxWidth: usableWidth - 40 });
    boxY += lineHeight + 10;

    doc.setFont('Georgia', 'bold');
    const practiceLabel = 'How to practice:';
    doc.text(practiceLabel, margin + 20, boxY);
    const practiceWidth = doc.getTextWidth(practiceLabel);
    doc.setLineWidth(0.2);
    doc.setDrawColor(0, 0, 0);
    doc.line(margin + 20, boxY + 2, margin + 20 + practiceWidth, boxY + 2);
    boxY += lineHeight;

    doc.setFont('Georgia', 'normal');
    doc.text(practice, margin + 20, boxY, { maxWidth: usableWidth - 40 });

    return yPosition + totalHeight + 15;
  }

  function addImageBox(imageId, boxHeight, backgroundColor, borderColor, placeholder) {
    const boxWidth = usableWidth;
    checkPageBreak(boxHeight + 20);

    setColor(backgroundColor, 'fill');
    doc.roundedRect(margin, yPosition, boxWidth, boxHeight, 12, 12, 'F');

    setColor(borderColor, 'draw');
    doc.setLineWidth(1);
    doc.setLineDash([6, 4], 0);
    doc.roundedRect(margin, yPosition, boxWidth, boxHeight, 12, 12, 'S');
    doc.setLineDash();

    const imgElement = document.getElementById(imageId);
    if (imgElement && imgElement.src && imgElement.style.display !== 'none') {
      try {
        let maxImgWidth = boxWidth - 40;
        let maxImgHeight = boxHeight - 40;
        let imgWidth = maxImgWidth;
        let imgHeight = maxImgHeight;

        if (imgElement.naturalWidth && imgElement.naturalHeight) {
          const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
          imgWidth = maxImgWidth;
          imgHeight = imgWidth / aspectRatio;

          if (imgHeight > maxImgHeight) {
            imgHeight = maxImgHeight;
            imgWidth = imgHeight * aspectRatio;
          }
        }

        const xPos = margin + (boxWidth - imgWidth) / 2;
        const yPos = yPosition + (boxHeight - imgHeight) / 2;
        doc.addImage(imgElement.src, 'PNG', xPos, yPos, imgWidth, imgHeight);
      } catch (err) {
        console.log(`Error adding ${imageId} image:`, err);
        addPlaceholderText("Error loading image");
      }
    } else {
      addPlaceholderText(placeholder);
    }

    function addPlaceholderText(text) {
      doc.setFont('times', 'italic');
      doc.setFontSize(12);
      setColor([108, 117, 125], 'text');
      doc.text(text, pageWidth / 2, yPosition + boxHeight / 2, { align: 'center' });
    }

    yPosition += boxHeight + 20;
  }

  function addTextBox(title, content, backgroundColor, titleColor = [0, 0, 0], contentColor = [33, 37, 41]) {
    const padding = 20;
    const lineHeight = 16;
    const bodyLines = doc.splitTextToSize(content, usableWidth - 2 * padding);
    const boxHeight = (bodyLines.length * lineHeight) + (padding * 2);

    checkPageBreak(boxHeight + 20);

    setColor(backgroundColor, 'fill');
    doc.roundedRect(margin, yPosition, usableWidth, boxHeight, 10, 10, 'F');

    doc.setFont('Georgia', 'bold');
    doc.setFontSize(FONT_SIZES.subTitle);
    setColor(titleColor, 'text');
    doc.text(title, margin + padding + 5, yPosition + padding);

    doc.setFont('Georgia', 'normal');
    doc.setFontSize(FONT_SIZES.bodyText);
    setColor(contentColor, 'text');
    doc.text(bodyLines, margin + padding + 5, yPosition + padding + 20);

    yPosition += boxHeight + 20;
  }

  // ---------------------------------------------------------------------------
  // Section 1.3: Report Rendering Flow (top-to-bottom sequence)
  // ---------------------------------------------------------------------------
  // ---------------- HEADER ----------------
  setColor(colors.primary, 'fill');
  doc.rect(0, 0, pageWidth, 100, 'F');

  doc.setFont('Georgia', 'bold');
  doc.setFontSize(FONT_SIZES.mainTitle);
  setColor(colors.accent, 'text');
  doc.text('Signature Correction Report', pageWidth / 2, 40, { align: 'center' });

  doc.setFont('Georgia', 'normal');
  doc.setFontSize(FONT_SIZES.subTitle);
  doc.text('Graphological Analysis & Personalized Solutions', pageWidth / 2, 65, { align: 'center' });

  yPosition = 120;

  // ---------------- CLIENT INFO ----------------
  setColor(colors.secondary, 'fill');
  doc.rect(margin, yPosition, usableWidth, 80, 'F');

  doc.setFont('Georgia', 'bold');
  doc.setFontSize(FONT_SIZES.sectionTitle);
  setColor(colors.accent, 'text');
  doc.text('User Information', margin + 20, yPosition + 25);

  doc.setFont('Georgia', 'normal');
  doc.setFontSize(FONT_SIZES.bodyText);
  setColor(colors.white, 'text');

  const name = document.getElementById('r_name').textContent;
  const date = document.getElementById('r_date').textContent;
  const reportId = document.getElementById('r_id').textContent;

  doc.text(`Name: ${name}`, margin + 20, yPosition + 45);
  doc.text(`Date: ${date}`, margin + 20, yPosition + 65);
  doc.text(`Report ID: ${reportId}`, margin + 250, yPosition + 45);

  yPosition += 100;

  // ---------------- 1. Mistakes in Signature ----------------
  addSection('1. MISTAKES IN SIGNATURE');
  yPosition += 12;
  addImageBox('r_main_img', 180, [255, 245, 245], [222, 0, 0], "No current signature uploaded");

  const mistakeInputs = document.querySelectorAll('#sign_mistakes_list .sign_mistake_item');
  mistakeInputs.forEach(item => {
    const title = item.querySelector('.sign_mistake_title')?.value.trim() || '';
    const desc = item.querySelector('.sign_mistake_desc')?.value.trim() || '';
    if (title || desc) {
      addBulletPoint(title, desc);
    }
  });

  // ---------------- 2. Mistakes in Handwriting ----------------
  addSection('2. GRAPHOLOGICAL MISTAKES IN HANDWRITING');
  yPosition += 12;
  addImageBox('r_handwriting_img', 180, [255, 245, 245], [222, 0, 0], "No current handwriting uploaded");

  const mistakeName = document.getElementById('r_hand_mistake_name')?.textContent || '';
  const handwritingMistakesText = document.getElementById('r_handwritingMistakes')?.textContent || "";
  const handwritingMistakesTitle = `Graphological Mistakes in ${mistakeName} Handwriting`;
  addTextBox(handwritingMistakesTitle, handwritingMistakesText, [248, 249, 250]);

  // ---------------- 3. Personality Analysis ----------------
  addSection('3. PERSONALITY ANALYSIS');
  yPosition += 12;

    yPosition += 12;
  
  const columnWidth = (usableWidth - 20) / 2;

  const strengthsText = Array.from(document.querySelectorAll('#r_strengths_list li'))
    .map(li => 'â€¢ ' + (li.textContent || '').trim())
    .join('\n');
  const strengthsLines = strengthsText ? doc.splitTextToSize(strengthsText, columnWidth - 20) : [];
  const strengthsHeight = strengthsLines.length > 0 ? (strengthsLines.length * 16) + 40 : 0;

  const weaknessesText = Array.from(document.querySelectorAll('#r_weaknesses_list li'))
    .map(li => 'â€¢ ' + (li.textContent || '').trim())
    .join('\n');
  const weaknessLines = weaknessesText ? doc.splitTextToSize(weaknessesText, columnWidth - 20) : [];
  const weaknessesHeight = weaknessLines.length > 0 ? (weaknessLines.length * 16) + 40 : 0;

  let swBoxHeight = Math.max(strengthsHeight, weaknessesHeight);
  checkPageBreak(swBoxHeight + 20);

  if (strengthsText) {
    setColor(colors.purple, 'fill');
    doc.roundedRect(margin, yPosition, columnWidth, swBoxHeight, 8, 8, 'F');

    doc.setFont('Georgia', 'bold');
    doc.setFontSize(FONT_SIZES.subTitle);
    setColor(colors.white, 'text');
    doc.text('STRENGTHS:', margin + 10, yPosition + 20);

    doc.setFont('Georgia', 'normal');
    doc.setFontSize(FONT_SIZES.bodyText);
    let textY = yPosition + 40;
    strengthsLines.forEach(line => {
      doc.text(line, margin + 10, textY);
      textY += 16;
    });
  }

  if (weaknessesText) {
    setColor(colors.purple, 'fill');
    doc.roundedRect(margin + columnWidth + 20, yPosition, columnWidth, swBoxHeight, 8, 8, 'F');

    doc.setFont('Georgia', 'bold');
    doc.setFontSize(FONT_SIZES.subTitle);
    setColor(colors.white, 'text');
    doc.text('WEAKNESSES:', margin + columnWidth + 30, yPosition + 20);

    doc.setFont('Georgia', 'normal');
    doc.setFontSize(FONT_SIZES.bodyText);
    let textY = yPosition + 40;
    weaknessLines.forEach(line => {
      doc.text(line, margin + columnWidth + 30, textY);
      textY += 16;
    });
  }

  if (strengthsText || weaknessesText) {
    yPosition += swBoxHeight + 20;
  }

  yPosition += 10;

  // Overall Assessment
  const overallName = document.getElementById('r_overall_name')?.textContent || '';
  const overallAssessment = document.getElementById('r_overall')?.textContent || '';
  const oaFullText = `Overall Personality Assessment of ${overallName}:\n${overallAssessment}`;
  const oaTextMaxWidth = usableWidth;
  const oaTextLines = doc.splitTextToSize(oaFullText, oaTextMaxWidth);
  const lineHeight = 18;
  const boxPadding = 20;
  const oaBoxHeight = (oaTextLines.length * lineHeight) + (boxPadding * 2);

  checkPageBreak(oaBoxHeight + 20);

  doc.setFont('Georgia', 'normal');
  doc.setFontSize(FONT_SIZES.bodyText);
  setColor([51, 51, 51], 'text');

  let oaTextY = yPosition + boxPadding;
  oaTextLines.forEach(line => {
    doc.text(line, pageWidth / 2, oaTextY, { align: 'center' });
    oaTextY += lineHeight;
  });

  yPosition += oaBoxHeight + 20;

  // Section 3: Corrected Signature
  addSection('4. CORRECTED SIGNATURE');
  const correctedImages = document.querySelectorAll('#r_corrected_imgs img');

  if (correctedImages.length > 0) {
    const boxWidth = usableWidth;
    const maxImgWidth = 140;
    const maxImgHeight = 100;
    const spacing = 15;
    const maxRowWidth = boxWidth - 40;

    const imagesPerRow = [];
    let row = [];
    let rowWidth = 0;

    correctedImages.forEach(imgElement => {
      try {
        let imgWidth = maxImgWidth;
        let imgHeight = maxImgHeight;

        if (imgElement.naturalWidth && imgElement.naturalHeight) {
          const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
          if (aspectRatio > 1) {
            imgHeight = maxImgWidth / aspectRatio;
          } else {
            imgWidth = maxImgHeight * aspectRatio;
          }
        }

        if (rowWidth + imgWidth + (row.length > 0 ? spacing : 0) > maxRowWidth) {
          imagesPerRow.push({ row, rowWidth });
          row = [];
          rowWidth = 0;
        }

        row.push({ imgElement, imgWidth, imgHeight });
        rowWidth += imgWidth + (row.length > 1 ? spacing : 0);
      } catch (err) {
        console.log("Error measuring corrected signature image:", err);
      }
    });

    if (row.length > 0) imagesPerRow.push({ row, rowWidth });

    let totalHeight = 20;
    imagesPerRow.forEach(({ row }) => {
      const maxRowHeight = Math.max(...row.map(r => r.imgHeight));
      totalHeight += maxRowHeight + spacing;
    });
    totalHeight += 10;

    const boxHeight = totalHeight;
    checkPageBreak(boxHeight + 20);

    setColor([248, 255, 248], 'fill');
    doc.roundedRect(margin, yPosition, boxWidth, boxHeight, 12, 12, 'F');

    setColor([40, 167, 69], 'draw');
    doc.setLineWidth(1);
    doc.setLineDash([6, 4], 0);
    doc.roundedRect(margin, yPosition, boxWidth, boxHeight, 12, 12, 'S');
    doc.setLineDash();

    let currentY = yPosition + 20;
    imagesPerRow.forEach(({ row, rowWidth }) => {
      let startX = margin + (boxWidth - rowWidth) / 2;

      row.forEach(({ imgElement, imgWidth, imgHeight }) => {
        doc.addImage(imgElement.src, 'PNG', startX, currentY, imgWidth, imgHeight);
        startX += imgWidth + spacing;
      });

      const maxRowHeight = Math.max(...row.map(r => r.imgHeight));
      currentY += maxRowHeight + spacing;
    });

    yPosition += boxHeight + 20;
  } else {
    addImageBox('', 120, [248, 255, 248], [222, 226, 230], "No corrected signature uploaded");
  }

  yPosition += 10;

  // Key Improvements
  const correctionsList = document.querySelectorAll('#r_corrections_list li');
  if (correctionsList.length > 0) {
    const correctionsText = Array.from(correctionsList).map(li => li.textContent).join('\n');
    const kiLines = doc.splitTextToSize(correctionsText, usableWidth - 20);
    const kiHeight = (kiLines.length * 16) + 50;

    checkPageBreak(kiHeight + 20);

    doc.setFont('Georgia', 'bold');
    doc.setFontSize(FONT_SIZES.sectionTitle);
    setColor([0, 0, 0], 'text');
    doc.text('Key Improvements Made:', margin, yPosition + 15);

    let kiY = yPosition + 35;
    correctionsList.forEach(li => {
      const text = li.textContent;
      const [beforeColon, afterColon] = text.split(':');

      doc.setFont('Georgia', 'bold');
      doc.setFontSize(FONT_SIZES.bodyText);
      setColor([0, 0, 0], 'text');
      doc.text('â€¢ ' + (beforeColon ? beforeColon.trim() : text), margin + 15, kiY);

      if (afterColon) {
        const offsetX = doc.getTextWidth('â€¢ ' + beforeColon.trim() + ': ') + margin + 15;
        doc.setFont('Georgia', 'normal');
        doc.setFontSize(FONT_SIZES.bodyText);

        const wrappedText = doc.splitTextToSize(afterColon.trim(), usableWidth - (offsetX + 10));
        doc.text(wrappedText, offsetX, kiY);
        kiY += (wrappedText.length - 1) * 16;
      }

      kiY += 16;
    });

    yPosition += kiHeight + 20;
  }

  // Section 4: Benefits
  addSection('5. BENEFITS OF CORRECTED SIGNATURE');

  const benefitName = document.getElementById('r_benefit_name')?.textContent || '';
  const benefits = [{
    title: `Overall Benefit for ${benefitName}`,
    content: document.getElementById('r_overallbenefit').textContent
  }];

  yPosition += 15;

  const benefitsPadding = 10;
  const benefitsLineHeight = 16;
  const benefitCardWidth = usableWidth * 0.95;
  const centerX = margin + (usableWidth - benefitCardWidth) / 2;

  const benefitMeta = benefits.map(b => {
    const titleLines = doc.splitTextToSize(b.title, benefitCardWidth - 2 * benefitsPadding);
    const contentLines = doc.splitTextToSize(b.content, benefitCardWidth - 2 * benefitsPadding);
    const height = (titleLines.length + contentLines.length) * benefitsLineHeight + benefitsPadding * 3;
    return { ...b, titleLines, contentLines, height };
  });

  benefitMeta.forEach(item => {
    let cursorY = yPosition + benefitsPadding;

    doc.setFont('times', 'bold');
    doc.setFontSize(14);
    setColor([0, 0, 0], 'text');
    item.titleLines.forEach(line => {
      doc.text(line, centerX + benefitCardWidth / 2, cursorY, { align: 'center' });
      cursorY += benefitsLineHeight;
    });

    cursorY += 6;

    doc.setFont('times', 'normal');
    doc.setFontSize(12);
    setColor([51, 51, 51], 'text');
    item.contentLines.forEach(line => {
      doc.text(line, centerX + benefitCardWidth / 2, cursorY, { align: 'center' });
      cursorY += benefitsLineHeight;
    });

    yPosition += item.height + 20;
  });

 
  // Section 6: Corrections in Handwriting
  addSection('6. CORRECTIONS IN HANDWRITING');
  yPosition += 12;
  addImageBox('r_handwritingCorrection_img', 180, [248, 255, 248], [40, 167, 69], "No current handwriting uploaded");

  const correctionName = document.getElementById('r_hand_correction_name')?.textContent || '';
  const handwritingCorrectionText = document.getElementById('r_handwritingCorrections')?.textContent || "";
  const handwritingCorrectionTitle = `Graphological Corrections in ${correctionName} Handwriting`;
  addTextBox(handwritingCorrectionTitle, handwritingCorrectionText, [248, 249, 250]);

  // Section 5: Practice Session
  addSection('7. HOW TO PRACTICE YOUR NEW SIGNATURE');
  yPosition += 15;

  checkPageBreak(100);
  setColor([248, 249, 250], 'fill');
  doc.roundedRect(margin, yPosition, usableWidth, 80, 8, 8, 'F');
  setColor([0, 0, 0], 'text');
  doc.setFont('Georgia', 'bold');
  doc.setFontSize(FONT_SIZES.subTitle);
  doc.text("What You'll Need:", margin + 15, yPosition + 25);
  doc.setFont('Georgia', 'normal');
  doc.setFontSize(FONT_SIZES.bodyText);
  doc.text([
    "â€¢ Use any smooth-writing pen that feels comfortable in your hand",
    "â€¢ Get a blank notebook (unlined pages work best for free-form practice)"
  ], margin + 15, yPosition + 45);
  yPosition += 100;

  checkPageBreak(100);
  setColor([248, 249, 250], 'fill');
  doc.roundedRect(margin, yPosition, usableWidth, 80, 8, 8, 'F');
  setColor([0, 0, 0], 'text');
  doc.setFont('Georgia', 'bold');
  doc.setFontSize(FONT_SIZES.subTitle);
  doc.text("Your Daily Practice Routine:", margin + 15, yPosition + 25);
  doc.setFont('Georgia', 'normal');
  doc.setFontSize(FONT_SIZES.bodyText);
  doc.text([
    "â€¢ Continue this practice consistently for 3 months",
    "â€¢ As you write each signature, repeat the given affirmation below"
  ], margin + 15, yPosition + 45);
  yPosition += 100;

  // Affirmation
  const affirmation = document.getElementById('r_affirmation').textContent;
  const affHeight = 70;
  checkPageBreak(affHeight + 20);
  setColor([209, 236, 241], 'fill');
  doc.roundedRect(margin, yPosition, usableWidth, affHeight, 8, 8, 'F');
  setColor([40, 167, 69], 'draw');
  doc.setLineWidth(4);
  doc.line(margin, yPosition, margin, yPosition + affHeight);

  doc.setFont('Georgia', 'bold');
  doc.setFontSize(FONT_SIZES.subTitle);
  setColor([0, 0, 0], 'text');
  doc.text("AFFIRMATION:", margin + 15, yPosition + 25);

  doc.setFont('Georgia', 'normal');
  doc.setFontSize(FONT_SIZES.bodyText);
  doc.text(affirmation, margin + 15, yPosition + 45, { maxWidth: usableWidth - 30 });
  yPosition += affHeight + 20;

  // Important Things to Remember
  addSection("Important Things to Remember");

  yPosition = createSection(doc, {
    title: "Self Talk",
    bullets: [
      "Monitor the voice in your head - it shapes your reality more than external circumstances",
      "Replace negative internal dialogue with encouraging, supportive thoughts",
      "Practice catching yourself when you use limiting language like \"I can't\" or \"I'm not good at\""
    ],
    impact: "Your inner dialogue directly influences your confidence, decision-making, and willingness to take on challenges",
    practice: "Set reminders throughout the day to check in with your thoughts, and consciously reframe negative self-talk into constructive feedback",
    yPosition, margin, usableWidth, colors
  });

  yPosition = createSection(doc, {
    title: "Environment",
    bullets: [
      "Surround yourself with people, spaces, and influences that uplift and inspire you",
      "Create physical spaces that reflect the person you're becoming, not who you used to be",
      "Choose books, music, and media that align with your growth goals"
    ],
    impact: "Your environment constantly programs your subconscious mind and influences your habits and beliefs",
    practice: "Regularly audit your surroundings - declutter spaces that feel stagnant, distance yourself from negative influences, and intentionally add elements that support your vision",
    yPosition, margin, usableWidth, colors
  });

  yPosition = createSection(doc, {
    title: "Breath",
    bullets: [
      "Your breathing pattern directly affects your nervous system and emotional state",
      "Conscious breathing helps you stay present and centered during challenging moments",
      "Deep, intentional breathing activates your body's relaxation response"
    ],
    impact: "Proper breathing reduces stress, improves focus, and helps you respond thoughtfully.",
    practice: "Take 5 conscious deep breaths when you wake up, before important conversations, and when you feel overwhelmed - make it as automatic as checking your phone",
    yPosition, margin, usableWidth, colors
  });

  // Section 6: Legal
  addSection('8. SHOULD YOU CHANGE SIGN LEGALLY?');

// Legal Section
const legalBody = "Your signature is basically your legal stamp - it's how you officially identify yourself. " +
  "But here's the thing: you don't need to stress about changing everything at once. " +
  "The real game-changer is practicing your new signature every single day with the given affirmations. " +
  "That's where the magic happens. When you do this consistently, you're actually rewiring your brain and shifting those old patterns. " +
  "As for updating all your legal documents? Yeah, you can do that eventually, but honestly, there's no rush. " +
  "Start with the daily practice first. Once your new signature starts feeling like second nature - like it's really you - " +
  "then you can think about updating the official stuff.";

  const legalTextMaxWidth = usableWidth;
  const legalLines = doc.splitTextToSize(legalBody, legalTextMaxWidth);
  const legalBoxHeight = (legalLines.length * lineHeight) + (boxPadding * 2);
  
  checkPageBreak(legalBoxHeight + 10);
  
  doc.setFont('Georgia', 'normal');
  doc.setFontSize(FONT_SIZES.bodyText);
  setColor([51, 51, 51], 'text');
  
  let legalTextY = yPosition + boxPadding;
  legalLines.forEach(line => {
    doc.text(line, pageWidth / 2, legalTextY, { align: 'center' });
    legalTextY += lineHeight;
  });
  
  yPosition += legalBoxHeight + 15;


  // Expert Recommendation
  const expertRec = document.getElementById('r_expert_rec')?.textContent || '';
  const expertName = document.getElementById('r_expert_sugg_name')?.textContent || '';
  const expertRecTitle = `Expert Recommendation for ${expertName}`;
  addTextBox(expertRecTitle, expertRec, [248, 249, 250]);

  // ---------------- Footer ----------------
  yPosition += 15;
  checkPageBreak(60);
  setColor(colors.primary, 'fill');
  doc.rect(0, yPosition, pageWidth, 60, 'F');

  doc.setFont('Georgia', 'normal');
  doc.setFontSize(FONT_SIZES.bodyText);
  setColor(colors.accent, 'text');
  doc.text('Â© 2025 ExplorMee Signature Correction Services. All rights reserved.', pageWidth / 2, yPosition + 25, { align: 'center' });
  doc.text(`This report is confidential and prepared exclusively for ${name}`, pageWidth / 2, yPosition + 45, { align: 'center' });

  return doc;
}

// ---------------------------------------------------------------------------
// Section 2: PDF Action Bindings
// ---------------------------------------------------------------------------
// Keeps button wiring isolated so the module hub can initialize this with one call.
export function bindPdfActions() {
  const previewBtn = document.getElementById("previewPdf");
  if (previewBtn) {
    previewBtn.addEventListener("click", async () => {
      // Always sync form values first so PDF reflects latest edits.
      applyFormToReport();
      const node = document.getElementById("reportRoot");
      const pdf = await domToPdfBlob(node);
      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    });
  }

  const downloadBtn = document.getElementById("downloadPdf");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", async () => {
      // Same sync-before-export rule for file download.
      applyFormToReport();
      const node = document.getElementById("reportRoot");
      const pdf = await domToPdfBlob(node);
      pdf.save((document.getElementById("clientName").value || "report") + ".pdf");
    });
  }

  window.addEventListener("load", () => {
    // Ensure report preview has initial values before first interaction.
    applyFormToReport();
  });
}

