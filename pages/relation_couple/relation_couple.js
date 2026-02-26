
// Today's date
const today = new Date();
const options = {year:'numeric', month: 'long', day:'numeric'};
const formattedDate = today.toLocaleDateString('en-us', options);
document.getElementById('reportDate').value = formattedDate;

// Trait data for analysis
const traitData = {
  emotional: {
    'emotional-1': 'High emotional sensitivity with mood variations - needs understanding partner',
    'emotional-2': 'Mixed approach - Mixed of Emotional and Practical personality',
    'emotional-3': 'Practical approach - stable'
  },
  communication: {
    'comm-1': 'Open and expressive communicator - shares feelings easily',
    'comm-2': 'Confident communication style - comfortable expressing opinions',
    'comm-3': 'Adaptable communication - sometimes take time to express, sometimes share easily',
    'comm-4': 'Private communicator - takes time to open up',
    'comm-5': 'Thoughtful communicator - prefers quality over quantity'
  },
  conflict: {
    'conflict-1': 'Healthy conflict resolution - addresses issues constructively',
    'conflict-2': 'Peaceful approach to disagreements - avoids confrontation',
    'conflict-3': 'Quick to anger - reactive and impulsive',
    'conflict-4': 'Open to feedback - willing to consider different perspectives',
    'conflict-5': 'Relationship conflicts',
    'conflict-6':'Aggresive tendencies'
  },
  intimacy: {
    'intimacy-1': 'High intimacy needs - requires close physical connection',
    'intimacy-2': 'Balanced intimacy needs - healthy physical relationship approach',
    'intimacy-3': 'Lower intimacy needs - hesitates/repel in physical connections'
  },
  family: {
    'family-1': 'Only surname in signature - strong family identity',
    'family-2': 'surname bigger than name  - family dominates decision',
    'family-3': 'Surname before name - family first mentality',
    'family-4': 'Balanced name and surname - Harmony between individual and family\'s perspective',
    'family-5': 'Only name in signature - Independent identity',
    'family-6': 'Name clashing surname - family -personal conflict'
  }, 
  financial: {
    'financial-1': 'open ended "j" - impulsive spending',
    'financial-2': 'Mixed variations - balanced approach',
    'financial-3': 'closed "j" - Good at saving'
  }
};

// Compatibility matrices (0.1 = conflicting, 0.5 = moderate,  0.95 = good)
const compatibilityRules = {
  emotional: {
    'emotional-1': { 'emotional-1': 0.1,   'emotional-2': 0.5, 'emotional-3': 0.5 },
    'emotional-2': { 'emotional-1': 0.5, 'emotional-2': 0.5, 'emotional-3': 0.5 },
    'emotional-3': { 'emotional-1': 0.5, 'emotional-2': 0.5, 'emotional-3': 0.95 }
  },
  communication: {
    'comm-1': { 'comm-1': 0.95,   'comm-2': 0.95,   'comm-3': 0.95,   'comm-4': 0.5, 'comm-5': 0.5 },
    'comm-2': { 'comm-1': 0.95,   'comm-2': 0.95,   'comm-3': 0.95,   'comm-4': 0.5, 'comm-5': 0.5 },
    'comm-3': { 'comm-1': 0.95,   'comm-2': 0.95,   'comm-3': 0.95,   'comm-4': 0.95,   'comm-5': 0.95 },
    'comm-4': { 'comm-1': 0.5, 'comm-2': 0.5, 'comm-3': 0.95,   'comm-4': 0.5, 'comm-5': 0.5 },
    'comm-5': { 'comm-1': 0.5, 'comm-2': 0.5, 'comm-3': 0.95,   'comm-4': 0.5, 'comm-5': 0.5 }
  },
  conflict: {
    'conflict-1': { 'conflict-1': 0.95, 'conflict-2': 0.95,   'conflict-3': 0.5, 'conflict-4': 0.95,   'conflict-5': 0.5, 'conflict-6': 0.5 },
    'conflict-2': { 'conflict-1': 0.95, 'conflict-2': 0.95,   'conflict-3': 0.5, 'conflict-4': 0.95,   'conflict-5': 0.5, 'conflict-6': 0.5 },
    'conflict-3': { 'conflict-1': 0.5, 'conflict-2': 0.5, 'conflict-3': 0.1, 'conflict-4': 0.5, 'conflict-5': 0.1, 'conflict-6': 0.1 },
    'conflict-4': { 'conflict-1': 0.95, 'conflict-2': 0.95,   'conflict-3': 0.5, 'conflict-4': 0.95,   'conflict-5': 0.5, 'conflict-6': 0.1 },
    'conflict-5': { 'conflict-1': 0.5, 'conflict-2': 0.5, 'conflict-3': 0.1, 'conflict-4': 0.5, 'conflict-5': 0.1, 'conflict-6': 0.1 },
    'conflict-6': { 'conflict-1': 0.5, 'conflict-2': 0.5, 'conflict-3': 0.1, 'conflict-4': 0.1,   'conflict-5': 0.1, 'conflict-6': 0.1 }
  },
  intimacy: {
    'intimacy-1': { 'intimacy-1': 0.95,   'intimacy-2': 0.5, 'intimacy-3': 0.1 },
    'intimacy-2': { 'intimacy-1': 0.5, 'intimacy-2': 0.95,   'intimacy-3': 0.5 },
    'intimacy-3': { 'intimacy-1': 0.1,   'intimacy-2': 0.5, 'intimacy-3': 0.95 }
  },
  family: {
    'family-1': { 'family-1':0.95, 'family-2':0.5, 'family-3':0.95, 'family-4':0.5, 'family-5':0.1, 'family-6':0.1 },
    'family-2': { 'family-1':0.5, 'family-2': 0.95, 'family-3':0.95, 'family-4':0.5, 'family-5':0.1, 'family-6':0.1 },
    'family-3': { 'family-1':0.95, 'family-2':0.95, 'family-3':0.95, 'family-4':0.5, 'family-5':0.1, 'family-6':0.1 },
    'family-4': { 'family-1':0.5, 'family-2':0.5, 'family-3':0.5, 'family-4':0.95, 'family-5':0.5, 'family-6':0.5},
    'family-5': { 'family-1':0.1, 'family-2':0.1, 'family-3':0.1, 'family-4':0.5, 'family-5':0.95, 'family-6':0.5},
    'family-6': {'family-1':0.1, 'family-2':0.1, 'family-3':0.1, 'family-4':0.5, 'family-5':0.5, 'family-6': 0.5}
  },
  financial: {
    'financial-1': { 'financial-1':0.1, 'financial-2':0.95, 'financial-3':0.5 },
    'financial-2': { 'financial-1':0.95, 'financial-2':0.95, 'financial-3':0.5},
    'financial-3': { 'financial-1':0.5, 'financial-2':0.5, 'financial-3':0.95 }
  }
};

// Category weights
const weights = {
  emotional: 0.2,
  communication: 0.2,
  conflict: 0.2,
  intimacy: 0.15,
  family: 0.1,
  financial: 0.15
};

// Helper function to handle image uploads
function handleImageUpload(input, person, type) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const previewDiv = document.getElementById(`${person}${type.charAt(0).toUpperCase() + type.slice(1)}Preview`);
      previewDiv.innerHTML = `<img src="${e.target.result}" style="max-width: 180px; max-height: 80px; border-radius: 4px;" alt="${type}">`;
    };
    reader.readAsDataURL(file);
  }
}

// Helper function to get selected checkbox values
function getSelectedCheckboxValues(containerId) {
  const container = document.getElementById(containerId);
  const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

// Calculate compatibility score based on rule-based matrices
function calculateCompatibilityScore(person1Traits, person2Traits) {
  if (!person1Traits || !person2Traits) {
    return { score: 0, level: 'No Data' };
  }

  let weightedScore = 0;
  let totalWeight = 0;

  Object.keys(weights).forEach(category => {
    const traits1 = person1Traits[category] || [];
    const traits2 = person2Traits[category] || [];

    if (traits1.length === 0 || traits2.length === 0) return;

    let categoryScore = 0;
    let comparisons = 0;

    traits1.forEach(trait1 => {
      traits2.forEach(trait2 => {
        const ruleSet = compatibilityRules[category];
        categoryScore += ruleSet?.[trait1]?.[trait2] ?? 0.5;
        comparisons++;
      });
    });

    if (comparisons > 0) {
      const avgScore = categoryScore / comparisons;
      weightedScore += avgScore * weights[category];
      totalWeight += weights[category];
    }
  });

  const score = totalWeight > 0 ? Math.round((weightedScore / totalWeight) * 100) : 0;

  let level = 'Challenging Match';
  if (score >= 85) level = 'Excellent Match';
  else if (score >= 70) level = 'Good Match';
  else if (score >= 50) level = 'Fair Match';

  return { score, level };
}

// Update trait analyses and compatibility scores
function updateTraitAnalyses() {
  const categories = ['emotional', 'communication', 'conflict', 'intimacy', 'family', 'financial'];
  const person1Name = document.getElementById('person1Name').value || 'Person 1';
  const person2Name = document.getElementById('person2Name').value || 'Person 2';

  let weightedScore = 0;
  let totalWeight = 0;

  categories.forEach(category => {
    const person1Traits = getSelectedCheckboxValues(`person1${category.charAt(0).toUpperCase() + category.slice(1)}Select`);
    const person2Traits = getSelectedCheckboxValues(`person2${category.charAt(0).toUpperCase() + category.slice(1)}Select`);

    // Update person titles
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    document.getElementById(`r_person1_${category}_title`).textContent = `${person1Name}'s ${categoryName} Style`;
    document.getElementById(`r_person2_${category}_title`).textContent = `${person2Name}'s ${categoryName} Style`;

    // Update trait lists
    const updateTraitList = (traits, listId) => {
      const list = document.getElementById(listId);
      if (traits.length > 0) {
        const analyses = traits.map(trait => traitData[category][trait] ? `<li>${traitData[category][trait]}</li>` : '').filter(Boolean);
        list.innerHTML = analyses.length > 0 ? analyses.join('') : '<li>No analysis available</li>';
      } else {
        list.innerHTML = '<li>Select traits to see analysis</li>';
      }
    };

    updateTraitList(person1Traits, `r_person1_${category}_list`);
    updateTraitList(person2Traits, `r_person2_${category}_list`);

    // Update notes
    document.getElementById(`r_person1_${category}_notes`).textContent = 
      document.getElementById(`person1${categoryName}Notes`).value || 'No notes provided';
    document.getElementById(`r_person2_${category}_notes`).textContent = 
      document.getElementById(`person2${categoryName}Notes`).value || 'No notes provided';

    // Calculate compatibility score
    const scoreElement = document.getElementById(`r_${category}_compatibility`);
    const compatibility = calculateCompatibilityScore({ [category]: person1Traits }, { [category]: person2Traits });

    if (compatibility.score > 0) {
      scoreElement.textContent = `Compatibility Score: ${compatibility.score}% - ${compatibility.level}`;
      scoreElement.className = `compatibility-score ${
        compatibility.score >= 85 ? 'score-high' :
        compatibility.score >= 70 ? 'score-medium' : 'score-low'
      }`;
      weightedScore += (compatibility.score / 100) * weights[category];
      totalWeight += weights[category];
    } else {
      scoreElement.textContent = 'Select traits for both people to calculate compatibility';
      scoreElement.className = 'compatibility-score score-medium';
    }
  });

  // Calculate overall compatibility
  const overallScore = totalWeight > 0 ? Math.round((weightedScore / totalWeight) * 100) : 0;
  document.getElementById('r_overall_score').textContent = `${overallScore}%`;

  let overallLevel = 'Complete trait analysis to calculate overall compatibility';
  if (overallScore >= 85) overallLevel = 'Exceptional Compatibility - Outstanding Match';
  else if (overallScore >= 70) overallLevel = 'Strong Compatibility - Excellent Foundation for a Lasting Relationship';
  else if (overallScore >= 50) overallLevel = 'Moderate Compatibility - Good Potential with Effort';
  else if (overallScore > 0) overallLevel = 'Lower Compatibility - Requires Significant Understanding';

  document.querySelector('.overall-analysis p').textContent = overallLevel;
}

// Apply form data to preview
function applyToPreview() {
  const person1Name = document.getElementById('person1Name').value || 'Person 1';
  const person2Name = document.getElementById('person2Name').value || 'Person 2';
  
  document.getElementById('r_person1_name').textContent = `Person 1: ${person1Name}`;
  document.getElementById('r_person2_name').textContent = `Person 2: ${person2Name}`;
  document.getElementById('r_person1_age').textContent = document.getElementById('person1Age').value;
  document.getElementById('r_person2_age').textContent = document.getElementById('person2Age').value;
  document.getElementById('r_date').textContent = document.getElementById('reportDate').value;
  document.getElementById('r_id').textContent = document.getElementById('reportId').value;
  document.getElementById('r_couple_names').textContent = `${person1Name} & ${person2Name}`;

  // Update images for both people
  ['person1', 'person2'].forEach(person => {
    ['signature', 'handwriting'].forEach(type => {
      const fileInput = document.getElementById(`${person}${type.charAt(0).toUpperCase() + type.slice(1)}`);
      const file = fileInput.files[0];
      
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById(`r_${person}_${type}_img`).src = e.target.result;
          document.getElementById(`r_${person}_${type}_img`).style.display = 'block';
          document.getElementById(`r_${person}_${type}_placeholder`).style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });
  });

  updateTraitAnalyses();

  // ---- UNIVERSAL BULLET POINT LOGIC ----
  const formatAsBullets = (text) => {
    if (!text.trim()) return '<div class="empty-state">No information provided</div>';
    const lines = text.split(/\n+/).map(line => line.trim()).filter(line => line);
    if (lines.length > 1) {
      return `<ul>${lines.map(line => `<li>${line}</li>`).join('')}</ul>`;
    }
    return `<p>${lines[0]}</p>`;
  };

  // Automatically apply bullet formatting to ALL analysis sections
  const mappings = [
    ['relationshipStrengths', 'r_strengths'],
    ['relationshipChallenges', 'r_challenges'],
    ['relationshipRecommendations', 'r_recommendations'],
    ['communicationCompatibility', 'r_communication_compatibility'],
    ['emotionalCompatibility', 'r_emotional_compatibility'],
    ['intellectualCompatibility', 'r_intellectual_compatibility'],
    ['lifestyleCompatibility', 'r_lifestyle_compatibility'],
    ['conflictResolution', 'r_conflict_resolution'],
    ['overallCompatibility', 'r_overall_compatibility'],
  ];

  mappings.forEach(([inputId, previewId]) => {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    if (input && preview) {
      preview.innerHTML = formatAsBullets(input.value);
    }
  });
}



// Reset form to default values
function resetForm() {
  document.getElementById('person1Name').value = 'Sarah Johnson';
  document.getElementById('person1Age').value = '28';
  document.getElementById('person2Name').value = 'Michael Chen';
  document.getElementById('person2Age').value = '30';
  document.getElementById('reportDate').value = 'September 15, 2025';
  document.getElementById('reportId').value = 'COUPLE-2025-001';
  
  // Clear file inputs and previews
  ['person1Signature', 'person1Handwriting', 'person2Signature', 'person2Handwriting'].forEach(id => {
    document.getElementById(id).value = '';
    document.getElementById(`${id}Preview`).innerHTML = 'No file uploaded';
  });
  
  // Clear all checkboxes and textareas
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('textarea').forEach(ta => ta.value = '');
  
  // Set default assessment values
  document.getElementById('relationshipStrengths').value = 'Both partners show strong emotional intelligence and complementary communication styles, creating a solid foundation for understanding and growth.';
  document.getElementById('relationshipChallenges').value = 'Different conflict resolution approaches may require patience and compromise to find common ground during disagreements.';
  document.getElementById('relationshipRecommendations').value = 'Focus on leveraging your complementary strengths while working on understanding and respecting each other\'s different approaches to conflict resolution. Regular check-ins about emotional needs will strengthen your bond.';
  
  applyToPreview();
}

// Download PDF function
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const element = document.getElementById('reportRoot');
  
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    const person1Name = document.getElementById('person1Name').value.replace(/\s+/g, '_') || 'Person1';
    const person2Name = document.getElementById('person2Name').value.replace(/\s+/g, '_') || 'Person2';
    pdf.save(`Couple_Compatibility_${person1Name}_${person2Name}.pdf`);
  } catch (error) {
    console.error('PDF generation error:', error);
    alert('Error generating PDF. Please try again.');
  }
}

// Event listeners
document.getElementById('applyBtn').addEventListener('click', applyToPreview);
document.getElementById('downloadPdf').addEventListener('click', downloadPDF);
document.getElementById('resetBtn').addEventListener('click', resetForm);

// Image upload handlers
['person1Signature', 'person1Handwriting', 'person2Signature', 'person2Handwriting'].forEach(id => {
  document.getElementById(id).addEventListener('change', function() {
    const parts = id.match(/^(person[12])(.+)$/);
    if (parts) {
      handleImageUpload(this, parts[1], parts[2].toLowerCase());
    }
  });
});

// Initialize the application
applyToPreview();