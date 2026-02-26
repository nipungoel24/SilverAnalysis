/**
 * sign_corr_prem/js/sign-premium.constants.js
 *
 * Centralized static datasets used by the Signature Premium builder.
 * This file intentionally contains data/constant declarations only.
 */
const DEFAULT_SIGNATURE_MISTAKES = {
  "Line in Signature Goes Back and Forth":
    "The movement here suggests you tend to delay things and procrastinate, often because you are overthinking the past and your energy is scattered.",

  "Line in Signature is Short":
    "It looks like you don't feel fully supported by the people around you or your family right now.",

  "Line in Signature is Incomplete":
    "You might be feeling that the support from your close ones is only halfway there, not fully complete.",

  "Gap Between Signature and Line":
    "There seems to be a disconnect with your own inner support system; you might be doubting your own foundation.",

  "Zig-Zag Pattern in Line":
    "This pattern often points to a period of instability in your mental peace or fluctuating thoughts.",

  "Supportive Line Starts Front & Goes Back":
    "Drawing the line backward shows a bit of stubbornness, and you might unintentionally be causing your own career delays.",

  "Double Line Under Signature":
    "While one line is good, two lines suggest you are mentally exhausted or burned out, which is making you procrastinate.",

  "Two Lines Unclarity in Signature":
    "Underlining the signature with two separate lines reveals a state of mental exhaustion and a tendency to procrastinate due to feeling overwhelmed.",

  "Uneven Space Between Letters":
    "You seem to be hiding your emotions, connecting with some people but keeping a distance from others.",

  "Gap Between Signature Words":
    "You have an observing nature; you prefer to stand back and watch before you fully commit to something.",

  "Heavily Spacing Between Line & Surname":
    "There is a significant gap here that suggests you feel a lack of external support in your life.",

  "Heavily Unclarity / Illegible Signature":
    "You seem to want to keep your true nature mysterious or hidden from the public eye.",

  "Extreme High Clarity in Signature":
    "You are very open, but this innocence about human nature might increase your chances of being taken advantage of.",

  "Difference in Angle / Slant":
    "The changing angles suggest you might struggle with obsessive thoughts or ritualistic behaviors (OCD tendencies).",

  "Signature Slant in Two Directions":
    "It looks like your mind flips between different perspectives, making it hard to stick to one decision.",

  "Rounded Handwriting in Signature":
    "This very round style might be too gentle for the competitive field you are operating in.",

  "Straight Signature":
    "Your signature is quite rigid, which might mean you lack the flexibility needed for fast career growth.",

  "Infinity Sign in Signature":
    "This figure-eight shape can limit your proactive nature and cause delays or emotional ups and downs.",

  "Star Symbol on Signature":
    "You have a bit of a \"pampered child\" nature here; you really appreciate attention and care.",

  "English and Marathi (Two Languages)":
    "Using two languages suggests an internal conflict; your inner peace feels split between two identities.",

  "Cross Sign / \"X\" in Signature":
    "This is a strong sign of depressive thoughts, self-doubt, or high anxiety that needs attention.",

  "Sharp Edges in Signature":
    "The sharp angles point to built-up frustration and sometimes a tendency toward addictive behaviors.",

  "Pointed Edge in Signature":
    "These sharp points usually indicate anger and often correlate with physical headaches.",

  "Loop Encircling the Signature":
    "You are boxing yourself in; it shows stubbornness and a tendency to isolate yourself from others.",

  "Extra Upper Loop in Signature":
    "Any extra loops up here just reinforce a stubborn nature.",

  "Sharp End in Signature":
    "Ending sharply shows you are carrying some frustration and might have addictive tendencies.",

  "Rounded Dot Over \"i\"":
    "Placing a circle or bubble over the letter \"i\" signifies a desire for attention that often leads to emotional immaturity and mismanagement of expectations.",

  "Scattered Dot Over \"i\"":
    "Your focus seems scattered, which can also point to digestion issues or a lowered immune system.",

  "Dot Over \"i\" is Missing":
    "You might be getting distracted or forgetful lately, causing you to stray from your main goals.",

  "Dot Over \"i\" Inclined to Left":
    "Placing the dot back here suggests you are procrastinating or hesitating to take action.",

  "Dot Over \"i\" Not Clear":
    "It looks like you are losing clarity and straying a bit from your goals.",

  "Dot at the End of Signature":
    "Putting a full stop here acts like a wall; you are subconsciously blocking your own career growth.",

  "Dot Between Name and Surname":
    "This dot acts as a speed bump, causing procrastination and blocks in your growth.",

  "Dot Between Initials (e.g., P.R)":
    "These dots indicate specific stops and blockages in your professional career path.",

  "Name and Surname Overlapping":
    "Your identity is crashing into your family identity, leading to clashes, dominance issues, and self-doubt.",

  "Surname Placed Before Name":
    "Your family plays a major role in your life, perhaps causing some mismanagement in your own priorities.",

  "Surname Bigger Than Name":
    "It seems your family's reputation or dominance is bigger than your own identity right now.",

  "Name Letter Smaller Than Surname":
    "You might be feeling under-confident or overshadowed by your family.",

  "Surname Letter Smaller Than Name":
    "Sometimes you feel anxious or under-confident regarding your family role.",

  "Using Father's Initial (e.g., C)":
    "You have a strong attachment to your father, but this can also mean family discussions take a long time to reach a conclusion.",

  "Up and Down Alignment (Name/Surname)":
    "There is some family mismanagement here; you and your family don't seem to reach conclusions at the same time.",

  "Letter \"A\" / \"a\" Open from Top":
    "This opening often links to stomach or digestion issues, or it simply means you are very talkative.",

  "Letter \"A\" / \"a\" Divided from Mid":
    "You tend to share less of your thoughts, or you only open up to very specific people.",

  "Letter \"A\" Making a Loop":
    "This loop points to stubbornness and a strong attachment to the past.",

  "Letter \"A\" Bar Starts from Back":
    "You seem to be carrying the past with you, often overthinking things that have already happened.",

  "Letter \"A\" Line Goes Back and Forth":
    "This back-and-forth motion suggests delays in your career growth.",

  "Letter \"A\" Sharp Edge":
    "The sharpness here indicates anger or frequent headaches.",

  "Letter \"A\" Double Line Loop":
    "This is a sign of deep stubbornness and some anger you are holding onto.",

  "Letter \"A\" Small":
    "A small \"A\" reflects that you are feeling under-confident.",

  "Letter \"A\" Mid Bar is Missing":
    "You don't like following the rules; you prefer to do things your own non-conforming way.",

  "Letter \"A\" Heavy Loop at Back Side":
    "You are holding onto past attachments very stubbornly.",

  "Letter \"A\" Clashing with Name":
    "This clash shows you are doubting yourself.",

  "Letter \"B\" Upper Part Suppressed":
    "You might be limiting your own intelligence or holding back your thoughts.",

  "Letter \"B\" Open from Lower/Upper Side":
    "These openings are often markers for gut health and digestion issues.",

  "Letter \"B\" Lower Loop":
    "You have a subconscious need for validation and approval from others.",

  "Letter \"B\" Crossed / Cut":
    "Cutting the letter like this shows self-doubt.",

  "Letter \"B\" Overlapping":
    "This points to family conflict or internal self-doubt.",

  "Letter \"B\" Start/End from Back":
    "You are spending too much time overthinking the past.",

  "Letter \"B\" Small from Surname \"D\"":
    "You appear under-confident when compared to the family name.",

  "Letter \"C\" Making Loop":
    "This loop shows a stubborn nature.",

  "Letter \"D\" Open from Upper Side":
    "An opening here suggests headaches or a tendency to overthink things.",

  "Letter \"D\" Open from Lower Side":
    "This is usually a sign of stomach-centric or gut health issues.",

  "Letter \"D\" Line Goes Back and Forth":
    "You are holding onto unhealed past issues or negative thoughts.",

  "Letter \"D\" Cross Sign":
    "This mark indicates negative thinking patterns.",

  "Letter \"d\" Fluffy":
    "The shaky lines show you have a very sensitive nature.",

  "Letter \"D\" Upper Loop":
    "This loop indicates stubbornness or underlying anger.",

  "Letter \"d\" Divided from Mid":
    "You tend to keep your thoughts to yourself and share less.",

  "Letter \"D\" Small from Surname":
    "Sometimes you feel anxious or lack confidence.",

  "Letter \"e\" Closed Loop":
    "You feel uncomfortable sharing feelings, don't discuss things easily, and can get hurt by feedback.",

  "Letter \"e\" Starts from Back":
    "We call this a resentment stroke; it means you are holding anger about the past.",

  "Letter \"e\" with Heavy Blotting":
    "The heavy ink shows high stress or strong emotions.",

  "Letter \"e\" Starts Back with Support \"H\"":
    "You are overthinking the past, especially regarding support.",

  "Letter \"g\" Upper Loop":
    "This extra loop shows a stubborn streak.",

  "Letter \"g\" Lower Loop Fluffy":
    "You seem to face issues in finding the right, compatible partner.",

  "Letter \"g\" Open from Upper Side":
    "This can indicate a weakened immune system.",

  "Letter \"g\" Extended Lower Line":
    "You tend to give too many chances to one person in relationships, often ignoring your own needs.",

  "Letter \"g\" Line Cut":
    "Cutting the line indicates self-doubt.",

  "Letter \"g\" Overlapped with \"j\"":
    "This overlap points to family mismanagement and clashes.",

  "Letter \"j\" Heavy Loop":
    "You have stubbornness, high physical energy, and enjoy action-based work.",

  "Letter \"j\" Lower Loop Open":
    "You tend to spend money emotionally rather than logically.",

  "Letter \"j\" Line Starts from Back":
    "You are overthinking the past before taking action.",

  "Letter \"j\" Extended Line":
    "This indicates frustration, irritation, or being distracted.",

  "Letter \"j\" Bar Missing":
    "You are getting distracted from your main goal.",

  "Letter \"j\" Small from \"P\"":
    "Your self-confidence is inconsistent; it fluctuates day to day.",

  "Letter \"h\" Heavy/Upper Loop":
    "This shows a highly sensitive personality, often mixed with stubbornness.",

  "Letter \"h\" Spike Line":
    "You have \"spike behavior\"—sometimes doing too much work, other times doing nothing.",

  "Letter \"h\" Resentment Stroke":
    "You are carrying anger regarding the past.",

  "Letter \"h\" Heavily Extended Line":
    "This shows you have strong physical energy.",

  "Letter \"h\" Stem Fluffy":
    "The shakiness reveals a sensitive nature.",

  "Letter \"H\" Cross Line":
    "This indicates negative thought patterns.",

  "Letter \"H\" Overlapped":
    "Overlapping here shows self-doubt and confusion.",

  "Letter \"H\" Second Part Incomplete":
    "Your confidence levels tend to fluctuate.",

  "Letter \"H\" Heavy Pressure":
    "The heavy pressure indicates anger.",

  "Letter \"H\" Start from Back":
    "Starting backward shows stress and overthinking.",

  "Letter \"i\" is Missing":
    "You might be forgetful, inattentive to details, or easily distracted.",

  "Letter \"k\" Upper Loop":
    "An exaggerated loop formation within the structure of the \"K\" points to a stubborn nature and a resistance to accepting others' viewpoints.",

  "Letter \"k\" Arm Going Back":
    "You might be fighting battles about the past or hiding feelings inside.",

  "Letter \"k\" Gap in Formation":
    "This gap can indicate unfaithfulness.",

  "Letter \"k\" Club Stroke":
    "You tend to speak bluntly.",

  "Letter \"k\" Stem Fluffy":
    "This points to a sensitive nature.",

  "Letter \"k\" Arms Far from Stem":
    "You have a tendency to hide things inside.",

  "Letter \"k\" Arms Missing":
    "Sometimes you keep your feelings completely hidden.",

  "Letter \"k\" Small Inner Loop Not Connected":
    "This shows your confidence is getting down.",

  "Letter \"l\" Spike Line":
    "Like with 'h', this shows spike behavior—working hard then doing nothing.",

  "Letter \"l\" Going Back Side":
    "You seem stuck in the past.",

  "Letter \"l\" Heavy Fluffiness":
    "This indicates a sensitive nature.",

  "Letter \"m\" Elongated Toward Lower Zone":
    "You are far too attached to the past.",

  "Letter \"m\" Small":
    "You are feeling under-confident.",

  "Letter \"m\" Slope Goes Down":
    "You get demotivated easily or your confidence drops.",

  "Letter \"m\" Sharp Edge":
    "The sharpness here shows anger.",

  "Letter \"m\" Headline (Top)":
    "Sharp tops often correlate with headaches.",

  "Letter \"m\" Upper Space":
    "This form shows intelligence.",

  "Letter \"m\" Fluffy":
    "The shaky strokes show a sensitive nature.",

  "Loop in \"m\" Starts from Front":
    "This leads to delays in your career growth and shows stubbornness.",

  "Letter \"n\" Club Stroke":
    "You have a habit of speaking bluntly.",

  "Letter \"n\" Spike Line":
    "Sometimes you do more, sometimes you do nothing.",

  "Letter \"N\" Fluffy":
    "This indicates a sensitive nature.",

  "Letter \"N\" Overlapping Name":
    "This signals self-doubt and confusion.",

  "Letter \"o\" Inner Loop":
    "You tend to hide your emotions.",

  "Letter \"o\" Divided from Mid":
    "You have a secretive nature or share your thoughts less.",

  "Letter \"o\" Open from Above":
    "You are an over-sharing person.",

  "Letter \"o\" Not Made Right":
    "This reinforces a secretive nature.",

  "Letter \"P\" Short / Small":
    "You have an under-confident nature.",

  "Letter \"P\" Line Starts from Back":
    "You are overthinking, stressed, or focusing too much on the past.",

  "Letter \"P\" Open from Mid":
    "This points to stomach issues, head pain, or gut health chances.",

  "Letter \"P\" Pugilistic":
    "You seem eager to fight or argue.",

  "Letter \"P\" Inner Loop":
    "You have a reserved nature.",

  "Letter \"P\" Sharp End":
    "This indicates anger and a dominant nature.",

  "Letter \"p\" Heavy Fluffiness":
    "This shows a sensitive nature.",

  "Letter \"R\" Line Starts from Back":
    "You have unhealed past issues or are overthinking.",

  "Letter \"R\" Loop in Mid":
    "This shows a secretive nature.",

  "Letter \"R\" Upper Loop":
    "This points to stubbornness.",

  "Letter \"R\" Not Seen Clearly":
    "You might be struggling with self-doubt.",

  "Letter \"r\" Club Stroke":
    "You tend to speak bluntly or sarcastically.",

  "Letter \"r\" Lower Loop":
    "You are seeking validation from others.",

  "Letter \"R\" Extended Sharp Line":
    "This indicates high energy or speaking bluntly.",

  "Letter \"R\" Mid Stroke Goes Back":
    "You are feeling stuck in the past.",

  "Letter \"S\" Upper Loop":
    "You have a stubborn streak and don't easily accept others' viewpoints.",

  "Letter \"S\" Lower Loop":
    "You subconsciously seek validation from others.",

  "Letter \"S\" Start from Back (Resentment)":
    "You are holding anger for the past or having depressive thoughts.",

  "Letter \"S\" Cross Stroke":
    "This shows inner conflict, self-doubt, or suicidal thoughts.",

  "Letter \"S\" Club Stroke":
    "This means you speak bluntly.",

  "Letter \"s\" Sharp Line End":
    "You have a tendency to speak bluntly.",

  "Letter \"s\" Line Ended Long in Back":
    "This also indicates speaking bluntly.",

  "Letter \"t\" Bar Down":
    "You are holding onto the past.",

  "Letter \"t\" Bar Missing / Far":
    "You seem distracted, maybe daydreaming, or lacking a clear goal.",

  "Letter \"t\" Club Stroke":
    "You speak bluntly or sarcastically.",

  "Letter \"t\" at Down Side":
    "You are overthinking the past, feeling anxious, or fearing the future.",

  "Letter \"t\" Upper Loop":
    "This indicates stubbornness.",

  "Letter \"U\" Resentment Stroke":
    "You are carrying anger for the past.",

  "Upper Lapping Letters \"u\" and \"r\"":
    "This overlapping suggests you are second-guessing your decisions and struggling with self-doubt.",

  "Letter \"V\" Heavy Fluffiness":
    "This indicates a sensitive nature.",

  "Letter \"V\" Resentment Stroke":
    "You have anger for the past.",

  "Letter \"V\" Loop":
    "This points to stubbornness.",

  "Letter \"V\" Overlapped":
    "This indicates self-doubt, depressive thoughts, and anxiety.",

  "Letter \"V\" Small":
    "Your confidence is getting down.",

  "Letter \"y\" Missing":
    "You tend to miss small details while completing a task.",

  "Letter \"y\" Peaky/Elongated":
    "This shows high physical desire.",

  "Letter \"y\" Lower Loop Elongated Fluffy":
    "You have a high desire for luxury.",

  "Sharp End in Letter \"z\"":
    "An angular finish highlights a tendency to communicate truths aggressively or bluntly without sugarcoating.",

  "Two Different Angles (Slants)":
    "This trait signals an internal conflict or \"divine discontent.\" Psychologically, this friction creates a restless energy that drives the person to work harder and obsess over goals until they are achieved."
};
const strengthList = JSON.parse(localStorage.getItem("strengthList")) || [
  "Address issues in healthy way","Admirable","Adaptive","Ambitious",
"Artistic strengths","Bold personality","Brave","Calm",
"Clarity of goals","Committed","Compassion","Confidence","Consistent",
"Courageous","Creative mind","Critical thinking","Dedicated",
"Discipline","Emotional intelligence","Focused","Goal oriented",
"Good listener","Hardworking","Healthy decision making",
"Healthy boundaries","High determination","Honest nature","Innovative",
"Leadership","Logical approach","Loyal",
"Mature decision making","Mindful","Motivated","Open-minded",
"Organised","Positive mindset"," Practical approach",
"Problem solving","Resilient","Respectful behaviour","Responsible",
"Self-awareness","Self-control","Self-driven","Self-motivated",
"Smart work","Stable mindset","Strategic thinking",
"Strong communication","Strong willpower","Supportive","Thoughtful",
"Time management","Understanding","Visionary thinking"
];

const weaknessList = JSON.parse(localStorage.getItem("weaknessList")) || [
  "Aggressive","Anxious","Avoidant behaviour","Clingy nature",
"Closed minded","Comparing yourself","Compulsive behaviour",
"Confused decisions","Controlling nature","Daydreaming","Dependency",
"Difficulty trusting others","Disorganised behaviour","Easily distracted",
"Ego issues","Emotional suppression","Fearful behaviour","Fear of failure",
"Feeling lost","Forgetful","Frustrated easily","Hesitant",
"High sensitivity","Hyperactive thoughts","Impatience","Impulsive",
"Insecure","Jealousy","Judgemental nature","Lack of discipline",
"Lack of focus","Lack of patience","Lack of planning","Lazy tendencies",
"Low confidence","Low self-esteem","Mood swings","Negative thinking",
"Overthinking","Overwhelmed","People pleasing behaviour",
"Perfectionist pressure","Poor boundaries","Poor decision making",
"Poor emotional regulation","Poor time management",
"Procrastination","Rigid mindset","Risk aversion","Scattered attention",
"Self-doubt","Self-sabotage","Sensitive to criticism",
"Stress mismanagement","Uncertain behaviour","Under-confident",
"Unexpressive","Validation seeking"
];

const DEFAULT_HANDWRITING_CORRECTIONS = {
  "Letter a": [
    "Make the letter a simple",
    "Ensure the oval part of 'a' is fully closed",
    "Do not divide or cut the letter 'a' from the middle"
  ],

  "Letter A (Capital)": [
    "Make the letter 'A' simple",
    "Make the horizontal bar of 'A' from the middle",
    "Do not start the letter 'A' with a line from the back"
  ],

  "Letter b": [
    "Make the letter 'b' normal",
    "Close the letter 'b' completely from the bottom/mid",
    "Do not make a loop on the upper side of 'b'",
    "Do not make the letter 'b' fluffy"
  ],

  "Letter B (Capital)": [
    "Make the letter 'B' closed",
    "Make the letter 'B' simple without any loops"
  ],

  "Letter c": [
    "Make the letter 'c' simple",
    "Do not make a sharp end edge on 'c'",
    "Do not start the letter 'c' with a line from the back"
  ],

  "Letter d": [
    "Make the letter 'd' normal and simple",
    "Ensure the oval part of 'd' is fully closed",
    "Make the stem of 'd' straight and normal",
    "Do not start the letter 'd' with a line from the back",
    "Do not make the letter 'd' fluffy"
  ],

  "Letter D (Capital)": [
    "Make the letter 'D' simple without any loops",
    "Do not start 'D' from the back or end at the back"
  ],

  "Letter e": [
    "Keep the inner loop of 'e' large, open, and visible",
    "Do not make the letter 'e' with a sharp end",
    "Do not make the letter 'e' with an extended line"
  ],

  "Letter f": [
    "Make the letter 'f' normal and simple",
    "Make the letter 'f' face the right side (right side flip)",
    "Make the horizontal bar of 'f' in the mid part",
    "Make the horizontal bar of 'f' simple (not sharp)",
    "Do not make a loop on the upper side of 'f'",
    "Do not start the letter 'f' from the back"
  ],

  "Letter g": [
    "Close the lower loop of 'g' completely",
    "Make the lower loop of 'g' slightly fluffy or rounded",
    "Ensure the mid-oval of 'g' is closed",
    "Do not make a loop on the upper side of 'g'"
  ],

  "Letter h": [
    "Make the letter 'h' normal and simple",
    "Do not make a heavy or fluffy loop on the 'h' stem",
    "Do not make a spike on the letter 'h'",
    "Do not make a loop on the upper side of 'h'"
  ],

  "Letter i": [
    "Make the dot over 'i' small and precise",
    "Do not make the dot over 'i' scattered or a dash",
    "Place the dot over 'i' slightly to the right"
  ],

  "Letter I (Capital)": [
    "Do not make any loop on the letter 'I'",
    "Make the bar of 'I' completed"
  ],

  "Letter j": [
    "Close the lower loop of 'j' completely",
    "Make the dot over 'j' small and precise",
    "Place the dot over 'j' slightly to the right or straight"
  ],

  "Letter k": [
    "Make the letter 'k' simple and normal",
    "Connect the arm and leg strokes to the stem",
    "Make both arms of 'k' equal",
    "Do not let the 'k' strokes go behind the stem",
    "Do not start the letter 'k' from the back",
    "Do not make the letter 'k' fluffy"
  ],

  "Letter l": [
    "Make the letter 'l' normal and simple",
    "Do not attack 'l' with a high spike line",
    "Do not make the letter 'l' heavy or fluffy"
  ],

  "Letter m": [
    "Make the letter 'm' normal",
    "Do not start 'm' with a line from the back",
    "Do not make a loop in the letter 'm'"
  ],

  "Letter n": [
    "Make the letter 'n' normal",
    "Do not start 'n' with a line from the back"
  ],

  "Letter N (Capital)": [
    "Make 'N' normal without a double stem or loop",
    "Do not start 'N' with a line from the back"
  ],

  "Letter o": [
    "Make the letter 'o' simple and normal",
    "Ensure the letter 'o' is a closed circle",
    "Do not divide or cut the letter 'o' from the middle"
  ],

  "Letter p": [
    "Make the letter 'p' normal and simple",
    "Ensure the head loop of 'p' is fully closed",
    "Make the 'p' stem straight",
    "Do not start the letter 'p' from the back",
    "Do not make the 'p' stem fluffy"
  ],

  "Letter q": [
    "Make the mid-part of 'q' closed",
    "Use a firm downstroke for 'q'"
  ],

  "Letter r": [
    "Make the letter 'r' normal",
    "Do not make a sharp end edge on 'r'"
  ],

  "Letter s": [
    "Make the letter 's' simple and normal",
    "Do not make a loop on the upper side of 's'",
    "Do not make a loop on the lower side of 's'"
  ],

  "Letter t": [
    "Make the 't' bar from the mid-part",
    "Make the 't' bar normal and small",
    "Use a firm downstroke for 't'",
    "Do not make a loop in the lower half of 't'"
  ],

  "Letter u": ["Make the letter 'u' simple"],

  "Letter v": [
    "Make the letter 'v' normal",
    "Do not start the letter 'v' from the back"
  ],

  "Letter x": ["Make the letter 'x' normal"],

  "Letter y": [
    "Close the lower loop of 'y' completely",
    "Make the lower loop of 'y' slightly fluffy or rounded"
  ],

  "Letter z": ["Make the end line of 'z' normal"],

  "Spacing": [
    "Maintain even and balanced spacing between words",
    "Do not give excessive space between words",
    "Do not crush words or overlap letters"
  ],

  "Slant": [
    "Use only one slant",
    "Write with an upward or straight slope"
  ],

  "Pressure": [
    "Write with light to normal pressure",
    "Do not bloat the ink heavily"
  ],

  "Size": [
    "Write in big handwriting",
    "Keep letter size consistent"
  ],

  "General": [
    "Use rounded handwriting",
    "Do not make sharp end edges in any letter",
    "Avoid club strokes",
    "Use consistent letter formation"
  ]
};

const DEFAULT_SIGNATURE_CORRECTIONS = {
"First Letter Bigger & Bold": "Psychologically, this represents a healthy ego and high self-worth. The boldness indicates the physical vitality and energy required to sustain that high self-esteem.",
"Added Surname"	:'This signifies an acceptance of heritage and social responsibility. It suggests the individual has successfully integrated their personal ego with their role within the family unit.',
"Two Dots"	:'Dots symbolize distinct, focused thoughts or "sparks" of ideas. Psychologically, two dots suggest a unique, artistic flair and a desire to stand out visually to others.',
"Subtle Unclarity":	'Illegibility often implies the mind is working faster than the hand. It shows a psychological focus on the "big picture" result rather than getting bogged down in minute details.',
"Single Line Below":	'This acts as a pedestal, indicating a need for recognition and status. Psychologically, it shows the person feels "grounded" and creates their own foundation of self-reliance.',
"Upward Slope (45°)":	'An upward baseline is a universal sign of optimism and ambition. Psychologically, it reveals a fighting spirit that refuses to be depressed and constantly strives for higher levels.',
"Upper Zone Emphasis"	:'The upper zone of handwriting correlates to the intellect and imagination. Emphasis here shows a reliance on cognitive processing, logic, and abstract thinking rather than emotion.',
'"t" Bar in Middle'	:'A balanced t-bar indicates a practical, realistic approach to life. Psychologically, it shows the person is emotionally stable and not driven by unrealistic daydreams or low self-esteem.',
'Dot Over "i" (Rightly Inclined)':'A dot placed to the right signifies a mind anticipating the future. It suggests the person is impatient to move forward and is mentally planning the next step before finishing the current one.',
'Clarity (Legible Signature)'	:"A clear signature signals transparency, honesty, and a person with 'nothing to hide.' Psychologically, it indicates a desire to be understood and a healthy balance between one's private self and public image.",
'Two Different Angles (Slants)':	'This trait signals an internal conflict or "divine discontent." Psychologically, this friction creates a restless energy that drives the person to work harder and obsess over goals until they are achieved.',
'Only First Name (No Surname)':	'This indicates a person who wants to succeed purely on their own merit, independent of family legacy. Psychologically, it represents self-reliance and a belief that "I am enough" without external labels.',
'Rounded Handwriting'	:'Rounded letters are softer and less aggressive. Psychologically, they reveal a friendly, agreeable nature and a desire for harmony and cooperation rather than domination in relationships.',
'Peaky (Angular) Connection'	:'Sharp, V-shaped peaks indicate a probing, critical mind that is not easily satisfied. Psychologically, this shows high mental energy, a tendency to "dissect" problems, and sometimes an aggressive drive to find the truth or the best solution.',
};
const handwritingMistakeCatalog =
  JSON.parse(localStorage.getItem("handwritingMistakeCatalog")) || {
    "General Handwriting Attributes": {
    "Angular handwriting": "Shows underlying anger, aggression, or physical pain in the knees or back.",
    "Uneven spacing between words or letters": "Shows anxiety, confusion, or fear about the future.",
    "Downward slant in handwriting": "Shows pessimism, depressive tendencies, or difficulty handling negative situations.",
    "Using mixed capital and small letters": "Shows a flipping mindset, indecisiveness, and mood instability.",
    "Ink bloating or high pressure": "Shows suppressed anger, emotional intensity, or high blood pressure.",
    "Left or straight slant in handwriting": "Shows a reserved, introspective, and cautious nature.",
    "Variable slant (flipping left and right)": "Shows severe mood swings and inner emotional conflict.",
    "Small handwriting": "Shows detail orientation but often indicates a lack of self-confidence or fear.",
    "Crossed or crushed words": "Shows anxiety, confusion, and self-doubt."
  },

  "Letter a": {
    "Letter 'a' open at the top": "Shows a talkative nature and a tendency to share thoughts easily.",
    "Letter 'a' divided from mid": "Shows a secretive nature and a tendency to keep things inside.",
    "Letter 'a' open from the middle or body": "Shows potential stomach or gut health issues.",
    "Letter 'a' with a resentment stroke from the back": "Shows overthinking the past and holding onto anger."
  },

  "Letter b": {
    "Letter 'b' open from the lower or middle part": "Shows potential stomach, digestion, or gut health issues.",
    "Letter 'b' with a lower loop": "Shows a strong need for validation and approval from others.",
    "Letter 'b' with a resentment stroke from the back": "Shows anger regarding the past.",
    "Letter 'b' with a fluffy or bloated line": "Shows physical or emotional sensitivity."
  },

  "Letter c": {
    "Letter 'c' with a club stroke or sharp end": "Shows a tendency to speak bluntly or sarcastically.",
    "Letter 'c' with a resentment stroke from the back": "Shows anger or overthinking about the past."
  },

  "Letter d": {
    "Letter 'd' open from the middle or top": "Shows stomach-centric health issues or digestion problems.",
    "Letter 'd' with a resentment stroke from the back": "Shows being stuck in the past or overthinking past events.",
    "Letter 'd' with a fluffy stem": "Shows a sensitive nature.",
    "Letter 'd' with a spike or sharp line": "Shows erratic behavior where the person fluctuates between doing too much and doing nothing.",
    "Letter 'd' with a lower loop": "Shows validation-seeking behavior."
  },

  "Letter e": {
    "Letter 'e' with a closed inner loop": "Shows difficulty taking feedback and getting hurt easily.",
    "Letter 'e' with a club stroke": "Shows a blunt or offensive way of speaking.",
    "Letter 'e' with a spike formation": "Shows inconsistent work patterns or erratic behavior.",
    "Letter 'e' with a resentment stroke from the back": "Shows anger regarding the past."
  },

  "Letter f": {
    "Letter 'f' with a resentment stroke from the back": "Shows deep-seated anger and overthinking regarding the past.",
    "Letter 'f' with an upper loop": "Shows stubbornness.",
    "Letter 'f' flipped or left-facing": "Shows mood swings and a shifting mindset.",
    "Letter 'f' with a club stroke": "Shows a tendency to speak bluntly.",
    "Letter 'f' with a spike line": "Shows inconsistent energy where the person fluctuates between high activity and doing nothing.",
    "Letter 'f' with a lower part going back": "Shows struggles with delays or procrastination.",
    "Letter 'f' with heavy bloating": "Shows irritation and suppressed anger."
  },

  "Letter g": {
    "Letter 'g' with an open lower loop": "Shows that money flows out easily and is not retained well.",
    "Letter 'g' with an open upper oval": "Shows sensitivity in the stomach or gut.",
    "Letter 'g' with a heavy or fluffy lower loop": "Shows high physical desire, high energy, or addictive tendencies.",
    "Letter 'g' with a resentment stroke from the back": "Shows past overthinking and stress.",
    "Letter 'g' with a sharp loop": "Shows feelings of frustration."
  },

  "Letter h": {
    "Letter 'h' with an upper loop": "Shows stubbornness.",
    "Letter 'h' with spike or sharp humps": "Shows erratic all-or-nothing work habits.",
    "Letter 'h' with a fluffy or heavy loop": "Shows sensitivity and stubbornness.",
    "Letter 'h' with a resentment stroke from the back": "Shows being stuck in the past."
  },

  "Letter i": {
    "Letter 'i' with a rounded dot": "Shows an overly emotional nature and high expectations of others.",
    "Letter 'i' with a scattered dot": "Shows a weak immune system or scattered focus.",
    "Letter 'i' with a left-inclined dot": "Shows dwelling on the past.",
    "Letter 'i' with a missing dot": "Shows distraction from goals or lack of focus.",
    "Letter 'i' with an open dot": "Shows potential health issues like diabetes."
  },

  "Letter j": {
    "Letter 'j' with an open lower loop": "Shows emotional or impulsive spending habits.",
    "Letter 'j' with a missing or scattered dot": "Shows distraction or a weak immune system.",
    "Letter 'j' with a left-inclined dot": "Shows overthinking about the past.",
    "Letter 'j' with an arch shape": "Shows feelings of guilt."
  },

  "Letter k": {
    "Letter 'k' with a gap between stem and arm": "Shows a lack of commitment or defiance.",
    "Letter 'k' with a resentment stroke": "Shows fighting or arguing about the past.",
    "Letter 'k' with an indecisive structure": "Shows doubt in decision-making.",
    "Letter 'k' with a fluffy stem": "Shows a stubborn or sensitive nature."
  },

  "Letter l": {
    "Letter 'l' with a spike line": "Shows inconsistent work patterns.",
    "Letter 'l' with a fluffy loop": "Shows a sensitive nature.",
    "Letter 'l' with a club stroke": "Shows a tendency to speak bluntly."
  },

  "Letter m": {
    "Letter 'm' with a resentment stroke from the back": "Shows overthinking past events and holding onto anger."
  },

  "Letter n": {
    "Letter 'n' with a club stroke": "Shows a blunt or sarcastic way of speaking.",
    "Letter 'n' with a resentment stroke from the back": "Shows overthinking and stress.",
    "Letter 'n' with a gap or disconnection": "Shows headaches or head pain."
  },

  "Letter o": {
    "Letter 'o' divided from mid": "Shows a secretive nature and refusal to share thoughts.",
    "Letter 'o' open from the top": "Shows talkativeness or potential stomach or gut issues.",
    "Letter 'o' with a club stroke": "Shows blunt speech."
  },

  "Letter p": {
    "Letter 'p' pugilistic or sharp club stroke": "Shows eagerness to fight or argue.",
    "Letter 'p' with an open head": "Shows headaches or head pain.",
    "Letter 'p' open from the middle or bottom": "Shows gut health or digestive issues.",
    "Letter 'p' with a fluffy stem": "Shows physical or emotional sensitivity.",
    "Letter 'p' with a resentment stroke from the back": "Shows overthinking the past.",
    "Letter 'p' with a loop in the stem": "Shows over-sensitivity toward oneself."
  },

  "Letter r": {
    "Letter 'r' with a club stroke": "Shows a tendency to speak bluntly."
  },

  "Letter s": {
    "Letter 's' with a lower loop": "Shows validation-seeking behavior.",
    "Letter 's' with an upper loop": "Shows stubbornness.",
    "Letter 's' with a club stroke": "Shows blunt or sarcastic speech."
  },

  "Letter t": {
    "Letter 't' with a club stroke in the bar": "Shows sarcasm and bluntness.",
    "Letter 't' with a bar inclined to the left": "Shows being stuck in the past or overthinking.",
    "Letter 't' with a lower loop": "Shows validation-seeking behavior.",
    "Letter 't' with a resentment loop from the back": "Shows stubbornness regarding the past."
  },

  "Letter u": {
    "Letter 'u' with a resentment stroke": "Shows anger regarding the past.",
    "Letter 'u' with a club stroke": "Shows blunt speech."
  },

  "Letter v": {
    "Letter 'v' with a line starting from the back": "Shows past overthinking."
  },

  "Letter x": {
    "Letter 'x' with an upper loop": "Shows stubbornness.",
    "Letter 'x' with a lower loop": "Shows a need for approval from others.",
    "Letter 'x' with heavy bloating": "Shows suppressed anger."
  },

  "Letter y": {
    "Letter 'y' with an open lower loop": "Shows poor money flow or bad spending habits.",
    "Letter 'y' with a heavy or elongated loop": "Shows a strong desire for luxury, physical comfort, or intimacy.",
    "Letter 'y' with a sharp closed loop": "Shows irritation and frustration.",
    "Letter 'y' with a club stroke": "Shows blunt speech."
  },

  "Letter z": {
    "Letter 'z' with a club stroke": "Shows blunt speech.",
    "Letter 'z' with a downward ending": "Shows confidence drops when finishing tasks."
  }
  };


