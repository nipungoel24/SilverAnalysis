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

function getHandwritingCorrectionStore() {
  return JSON.parse(localStorage.getItem("handwritingCorrectionStore"))
    || structuredClone(DEFAULT_HANDWRITING_CORRECTIONS);
}

function saveHandwritingCorrectionStore(store) {
  localStorage.setItem(
    "handwritingCorrectionStore",
    JSON.stringify(store)
  );
}

function getHandMistakeStore() {
  return JSON.parse(localStorage.getItem("handMistakeStore")) || {};
}

function saveHandMistakeStore(store) {
  localStorage.setItem("handMistakeStore", JSON.stringify(store));
}
function getSignatureCorrectionStore() {
  return JSON.parse(localStorage.getItem("signatureCorrectionStore")) || structuredClone(DEFAULT_SIGNATURE_CORRECTIONS);
}


function saveSignatureCorrectionStore(store) {
  localStorage.setItem(
    "signatureCorrectionStore",
    JSON.stringify(store)
  );
}
function getHandwritingCatalog() {
  return JSON.parse(localStorage.getItem("handwritingMistakeCatalog"))
    || structuredClone(handwritingMistakeCatalog);
}

function saveHandwritingCatalog(catalog) {
  localStorage.setItem(
    "handwritingMistakeCatalog",
    JSON.stringify(catalog)
  );
}
function addHandwritingMistake(category, title, description) {
  if (!category || !title.trim()) return;

  const catalog = getHandwritingCatalog();

  if (!catalog[category]) {
    catalog[category] = {};
  }

  catalog[category][title] = description || "";

  saveHandwritingCatalog(catalog);

  // 🔥 refresh dependent dropdown
  createEditableDropdown({
    inputId: "handMistakeInput",
    dropdownId: "handMistakeDropdown",
    tagContainerId: "handMistakeTagContainer",
    textareaId: "handMistakes",
    listKey: "handMistakeTemp",
    defaultList: Object.keys(catalog[category]),
    allowAdd: false,
    allowRemove: false,
    onChange: renderHandMistakeDescriptions
  });
}
function renderHandwritingCorrectionDescriptions(selectedTitles) {
  const container = document.getElementById("handCorrectionDescriptions");
  const store = getHandwritingCorrectionStore();

  container.innerHTML = "";

  selectedTitles.forEach(title => {
    const block = document.createElement("div");
    block.className = "correction-desc-block";

    const heading = document.createElement("strong");
    heading.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.value = title; // editable correction text
    textarea.placeholder = "Edit handwriting correction…";

    textarea.oninput = () => {
      applyFormToReport();
    };

    block.appendChild(heading);
    block.appendChild(textarea);
    container.appendChild(block);
  });

  applyFormToReport();
}
function refreshHandwritingCategoryDropdown() {
  const select = document.getElementById("handCategory");
  const catalog = getHandwritingCatalog();

  select.innerHTML = `<option value="">Select Category</option>`;

  Object.keys(catalog).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}
function addHandwritingCategory(categoryName) {
  if (!categoryName.trim()) return;

  const catalog = getHandwritingCatalog();

  if (!catalog[categoryName]) {
    catalog[categoryName] = {};
    saveHandwritingCatalog(catalog);
  }

  refreshHandwritingCategoryDropdown();
}
function promptAddHandwritingMistake() {
  const category = document.getElementById("handCategory").value;

  if (!category) {
    alert("Select a category first");
    return;
  }

  const title = prompt("Enter handwriting mistake title:");
  if (!title) return;

  const desc = prompt("Enter graphological interpretation:");

  addHandwritingMistake(category, title, desc);
}

const signatureCorrectionTitles = Object.keys(
  getSignatureCorrectionStore()
);
function getSignatureMistakeStore() {
  return JSON.parse(localStorage.getItem("signatureMistakeMap")) ||
         structuredClone(DEFAULT_SIGNATURE_MISTAKES);
}

function saveSignatureMistakeStore(store) {
  localStorage.setItem("signatureMistakeMap", JSON.stringify(store));
}



function initSignatureMistakeDropdown() {
  const store = getSignatureMistakeStore();

  createEditableDropdown({
    inputId: "mistakesInput",
    dropdownId: "mistakesDropdown",
    tagContainerId: "mistakesTagContainer",
    textareaId: "mistakes",
    listKey: "signatureMistakeKeys",
    defaultList: Object.keys(store),
    allowAdd: true,
    allowRemove: true,
    onChange: renderMistakeDescriptions
  });
}
function addCorrectionItem() {
  const container = document.getElementById("sign_corrections_list");
  const uid = Date.now();

  const item = document.createElement("div");
  item.className = "sign_correction_item";

  item.innerHTML = `
    <div class="tag-input-wrapper">
      <div id="corrTagContainer_${uid}" class="tag-container"></div>
      <input
        type="text"
        id="corrInput_${uid}"
        placeholder="Search or add correction title..."
      />
      <div id="corrDropdown_${uid}" class="dropdown"></div>

      <!-- hidden value holder -->
      <textarea
        id="corrTitle_${uid}"
        class="sign_correction_title"
        style="display:none;"
      ></textarea>
    </div>

    <div class="correction-desc-wrapper">
      <textarea
        id="corrDesc_${uid}"
        class="sign_correction_desc"
        placeholder="Enter correction description"
      ></textarea>

      <button type="button" class="save-btn">Save</button>
      <span class="save-status"></span>
    </div>

    <button type="button" class="remove-btn">Remove</button>
  `;

  container.appendChild(item);

  const store = getSignatureCorrectionStore();
  const descBox = item.querySelector(`#corrDesc_${uid}`);
  const status = item.querySelector(".save-status");

  // 🔥 SAME dropdown logic as mistakes
  createEditableDropdown({
    inputId: `corrInput_${uid}`,
    dropdownId: `corrDropdown_${uid}`,
    tagContainerId: `corrTagContainer_${uid}`,
    textareaId: `corrTitle_${uid}`,
    listKey: "signatureCorrectionTitles",
    defaultList: Object.keys(store),
    allowAdd: true,
    allowRemove: true,
    onChange: ([title]) => {
      descBox.value = store[title] || "";
      applyFormToReport();
    }
  });

  // SAVE DESCRIPTION (EXACT SAME AS MISTAKES)
  item.querySelector(".save-btn").onclick = () => {
    const title = item.querySelector(".sign_correction_title").value.trim();
    if (!title) {
      alert("Select a correction title first");
      return;
    }

    store[title] = descBox.value.trim();
    saveSignatureCorrectionStore(store);

    status.textContent = "✓ Saved";
    status.style.color = "green";

    setTimeout(() => (status.textContent = ""), 1500);
    applyFormToReport();
  };

  // REMOVE
  item.querySelector(".remove-btn").onclick = () => item.remove();
}
async function runLLMForSection({
  inputId,
  outputId,
  loaderId,
  buttonId,
  templateId,
  afterRun
}) {
  const inputEl = document.getElementById(inputId);
  const loader = document.getElementById(loaderId);
  const button = document.getElementById(buttonId);

  if (!inputEl) {
    console.error("Input not found:", inputId);
    return;
  }

  const text = inputEl.value.trim();
  if (!text) {
    alert("Please enter some input first.");
    return;
  }

  loader.style.display = "inline-block";
  button.classList.add("disabled");

  // === backend selection (same as your other tools) ===
  let targetURL = "";
  let apiKey = "";
  const host = window.location.hostname;

  if (host === "menkadev.github.io") {
    targetURL = "https://exploreemebackend-1056855884926.us-central1.run.app";
    apiKey = "ek8pfnyVmlvvjyKGf665rhHpioob2hrORjw0BxwH";
  } else {
    targetURL = "http://127.0.0.1:8000";
    apiKey = "yhW10OA9omHFZS9nrcKfNJhhXM6umfpCWpScxkWx";
  }

  try {
    // STEP 1: fetch template
    const tRes = await fetch(`${targetURL}/ai_automations_handler/fetch-data/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": apiKey
      },
      body: JSON.stringify({
        template_id: templateId,
        pointers: text
      })
    });

    const tData = await tRes.json();

    // STEP 2: run LLM
    const llmRes = await fetch(`${targetURL}/ai_automations_handler/process-llm/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": apiKey
      },
      body: JSON.stringify({
        system_template: tData.system_template,
        pointers: tData.pointers
      })
    });

    const llmData = await llmRes.json();

    // 🔥 THIS IS THE CRITICAL LINE
    inputEl.value = llmData.output;

    // 🔥 FORCE PREVIEW UPDATE
    if (typeof afterRun === "function") {
      afterRun();
    }

  } catch (err) {
    console.error("LLM error:", err);
    alert("Something went wrong while generating text.");
  } finally {
    loader.style.display = "none";
    button.classList.remove("disabled");
  }
}


function generateOverallBenefit() {
  runLLMForSection({
    inputId: "overallBenefit",
    outputId: "overallBenefit",
    loaderId: "benefitLoader",
    buttonId: "benefitBtn",
    templateId: "overall_signature_benefit_prem",
    afterRun: applyFormToReport
  });
}

// Drop down function for strengths and weaknesses
function createEditableDropdown({
  inputId,
  dropdownId,
  tagContainerId,
  textareaId,
  listKey,
  defaultList,
  allowAdd = true,
  allowRemove = true,
  onChange = () => {}
}) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  const tagContainer = document.getElementById(tagContainerId);
  const textarea = document.getElementById(textareaId);

  if (!input || !dropdown || !tagContainer || !textarea) {
    console.warn("Dropdown init skipped:", inputId);
    return;
  }

  const list =
    JSON.parse(localStorage.getItem(listKey)) ||
    [...defaultList];

  let selected = textarea.value
    ? textarea.value.split(",").map(v => v.trim())
    : [];

  function saveList() {
    localStorage.setItem(listKey, JSON.stringify(list));
  }

  function syncTextarea() {
    textarea.value = selected.join(", ");
    onChange(selected);
  }

  function renderTags() {
    tagContainer.innerHTML = "";
    selected.forEach(val => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.innerHTML = `
        ${val}
        <button type="button" class="tag-remove">×</button>
      `;
      tag.querySelector("button").onclick = () => {
        selected = selected.filter(v => v !== val);
        renderTags();
      };
      tagContainer.appendChild(tag);
    });
    syncTextarea();
  }

  function addTag(val) {
    if (!selected.includes(val)) {
      selected.push(val);
      renderTags();
    }
  }

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    dropdown.innerHTML = "";
    if (!query) return;

    const matches = list.filter(v =>
      v.toLowerCase().includes(query)
    );

    matches.forEach(item => {
      const row = document.createElement("div");
      row.className = "dropdown-row";
      row.innerHTML = `
        <span>${item}</span>
        ${allowRemove ? `<button class="dropdown-remove">✕</button>` : ""}
      `;

      row.querySelector("span").onclick = () => {
        addTag(item);
        input.value = "";
        dropdown.innerHTML = "";
      };

      if (allowRemove) {
        row.querySelector(".dropdown-remove").onclick = e => {
          e.stopPropagation();
          list.splice(list.indexOf(item), 1);
          saveList();
          input.dispatchEvent(new Event("input"));
        };
      }

      dropdown.appendChild(row);
    });

    if (!matches.length && allowAdd) {
      const add = document.createElement("div");
      add.className = "dropdown-add";
      add.innerHTML = `➕ Add "<strong>${input.value}</strong>"`;
      add.onclick = () => {
  const title = input.value.trim();
  if (!title) return;

  const desc = prompt(
    `Enter graphological interpretation for:\n"${title}"`
  );

  const store = getSignatureMistakeStore();
  store[title] = desc || "";
  saveSignatureMistakeStore(store);

  list.push(title);
  localStorage.setItem(listKey, JSON.stringify(list));

  addTag(title);
  input.value = "";
  dropdown.innerHTML = "";
};

      dropdown.appendChild(add);
    }
  });

  document.addEventListener("click", e => {
    if (!dropdown.contains(e.target) && !input.contains(e.target)) {
      dropdown.innerHTML = "";
    }
  });

  renderTags();
}
// adding mistakes in current signature item 

function addMistakeItem() {
  const container = document.getElementById("sign_mistakes_list");

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
  removeBtn.textContent = " Remove";
  removeBtn.onclick = function() {
    removeMistakeItem(removeBtn);
  };

  item.appendChild(title);
  item.appendChild(desc);
  item.appendChild(removeBtn);

  container.appendChild(item);
}

// Removing mistakes in current signature item 
function removeMistakeItem(button) {
  const item = button.parentElement;
  item.remove();
}


// adding strengths keywords 
function addStrengthItem() {
  const container = document.getElementById('strengths_list');
  const div = document.createElement('div');
  div.className = 'strength_item';
  div.innerHTML = `
    <input type="text" placeholder="Enter a strength" class="strength_title"/>
    <button type="button" onclick="removeStrengthItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

//Removing strength keywords
function removeStrengthItem(btn) {
  btn.parentElement.remove();
}

// adding Weaknesses keywords
function addWeaknessItem() {
  const container = document.getElementById('weaknesses_list');
  const div = document.createElement('div');
  div.className = 'weakness_item';
  div.innerHTML = `
    <input type="text" placeholder="Enter a weakness" class="weakness_title"/>
    <button type="button" onclick="removeWeaknessItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

//Removing weakness keywords

function removeWeaknessItem(btn) {
  btn.parentElement.remove();
}

// Add new signature correction input
function addCorrectionItem() {
  const container = document.getElementById('sign_corrections_list');
  const div = document.createElement('div');
  div.className = 'sign_correction_item';
  div.innerHTML = `
    <input type="text" placeholder="Enter Title of correction" class="sign_correction_title"/>
    <textarea placeholder="Enter description of correction" class="sign_correction_desc"></textarea>
    <button type="button" onclick="removeCorrectionItem(this)">Remove</button>
  `;
  container.appendChild(div);
}

// Remove signature correction input
function removeCorrectionItem(btn) {
  btn.parentElement.remove();
}


// image helpers
function readImageFile(file, cb) {
  const reader = new FileReader();
  reader.onload = e => cb(e.target.result);
  reader.readAsDataURL(file);
}



// ===== REUSABLE UPLOAD FUNCTIONS =====

function createSingleImageUpload(uploadId, previewId, reportUpdateFunction) {
  const uploadElement = document.getElementById(uploadId);
  
  uploadElement.addEventListener('change', (e) => {
    const f = e.target.files[0];
    const previewElement = document.getElementById(previewId);
    
    if (!f) {
      previewElement.textContent = 'No image';
      return;
    }
    
    readImageFile(f, (data) => {
      previewElement.innerHTML = '<img style="max-width:100%;height:auto;" src="' + data + '" />';
      reportUpdateFunction(data);
    });
  });
}

// Generic report image setter with placeholder handling
function createReportImageSetter(imgId, placeholderId) {
  return function(dataUrl) {
    const img = document.getElementById(imgId);
    const placeholder = document.getElementById(placeholderId);
    
    img.src = dataUrl;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  };
}

// Multiple images upload handler (for section 3)
function createMultipleImageUpload(uploadId, previewId, reportContainerId, maxImages = 3) {
  const uploadElement = document.getElementById(uploadId);
  
  uploadElement.addEventListener('change', (e) => {
    const files = Array.from(e.target.files).slice(0, maxImages);
    const previewElement = document.getElementById(previewId);
    
    if (files.length === 0) {
      previewElement.textContent = 'No images';
      return;
    }
    
    previewElement.textContent = files.length + ' image(s) selected';
    
    // Show thumbnails in report container
    const container = document.getElementById(reportContainerId);
    container.innerHTML = '';
    
    files.forEach(f => {
      readImageFile(f, data => {
        const img = document.createElement('img');
        img.src = data;
        img.style.maxWidth = '220px';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        img.className = 'report-img';
        container.appendChild(img);
      });
    });
  });
}



// Create report setter functions
const setReportMainImage = createReportImageSetter('r_main_img', 'r_main_placeholder');
const setReportHandwritingImage = createReportImageSetter('r_handwriting_img', 'r_handwriting_placeholder');
const setReportHandwritingCorrectionImage = createReportImageSetter('r_handwritingCorrection_img', 'r_handwritingCorrection_placeholder');

// Setup all single image uploads
createSingleImageUpload('uploadMain', 'mainPreview', setReportMainImage);
createSingleImageUpload('uploadMainHandwriting', 'mainPreviewHandwriting', setReportHandwritingImage);
createSingleImageUpload('uploadCorrectHandwriting', 'PreviewCorrectHandwriting', setReportHandwritingCorrectionImage);

// Setup multiple image upload
createMultipleImageUpload('uploadThree', 'threePreview', 'r_corrected_imgs', 3);


// To add a new single image upload, just add these two lines:
// const setReportNewImage = createReportImageSetter('r_new_img', 'r_new_placeholder');
// createSingleImageUpload('uploadNew', 'newPreview', setReportNewImage);


// apply button populates the report DOM from the form
document.getElementById('applyBtn').addEventListener('click', applyFormToReport);

// reusable function for handling names 
    /**
 * Set a name inside a span by ID.
 * Handles possessive forms automatically if needed.
 *
 * @param {string} spanId - The ID of the span element.
 * @param {string} name - The name to insert.
 * @param {boolean} possessive - Whether to append possessive form ('s or ').
 */

function setClientName(spanId, name, possessive = false) {
    const span = document.getElementById(spanId);
    if (!span) return;
  
    let finalName = name.trim();
  
    if (possessive) {
      finalName = finalName.endsWith("s") ? finalName + "'" : finalName + "'s";
    }
  
    span.textContent = finalName;
  }
  

  function applyFormToReport() {
    const clientName = document.getElementById('clientName').value || '—';
    const reportDate = document.getElementById('reportDate').value || '—';
    const reportId = document.getElementById('reportId').value || '—';

    // Set client information
    setClientName('r_name', clientName);
    document.getElementById('r_date').textContent = reportDate;
    document.getElementById('r_id').textContent = reportId;
    setClientName('r_footer_name', clientName);
    setClientName('r_benefit_name', clientName);
    setClientName('r_overall_name', clientName);
    setClientName('r_hand_mistake_name', clientName, true);
    setClientName('r_hand_correction_name', clientName, true);
    setClientName('r_expert_sugg_name', clientName);

    // Mistakes in signature
    
   const list = document.getElementById("r_mistakes_list");
list.innerHTML = "";

document.querySelectorAll(".mistake-desc-block").forEach(block => {
  const title = block.querySelector("strong").textContent;
  const desc = block.querySelector("textarea").value.trim();

  const li = document.createElement("li");
  li.className = "mistake-item";

  const t = document.createElement("div");
  t.className = "mistake-title";
  t.textContent = title;

  const p = document.createElement("p");
  p.textContent = desc;

  li.appendChild(t);
  li.appendChild(p);
  list.appendChild(li);
});
const preview = document.getElementById("r_handwritingMistakes");
preview.innerHTML = "";
// ======================
// Handwriting Mistakes (PREVIEW)
// ======================

const selected = document
  .getElementById("handMistakes")
  .value
  .split(",")
  .map(v => v.trim())
  .filter(Boolean);

const Hstore = getHandMistakeStore();

selected.forEach((title, i) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${i + 1}. ${title}</strong><br>${Hstore[title] || ""}`;
  preview.appendChild(p);
});



    // ======================
    // Strengths (DROPDOWN)
    // ======================

    const sList = document.getElementById('r_strengths_list');
    sList.innerHTML = '';

    const strengths = document
      .getElementById('strengths')
      .value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);

    strengths.forEach(val => {
      const li = document.createElement('li');
      li.textContent = val;
      sList.appendChild(li);
    });

    // ======================
// Handwriting Corrections (PREVIEW)
// ======================
const hcPreview = document.getElementById("r_handwritingCorrections");
hcPreview.innerHTML = "";

const handwritingCorrections = document
  .getElementById("handCorrections")
  .value
  .split(",")
  .map(v => v.trim())
  .filter(Boolean);

handwritingCorrections.forEach((text, i) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${i + 1}. ${text}</strong>`;
  hcPreview.appendChild(p);
});
    // ======================
    // Weaknesses (DROPDOWN)
    // ======================
    const wList = document.getElementById('r_weaknesses_list');
    wList.innerHTML = '';

    const weaknesses = document
      .getElementById('weaknesses')
      .value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);

    weaknesses.forEach(val => {
      const li = document.createElement('li');
      li.textContent = val;
      wList.appendChild(li);
    });
    
    // Overall assessment
    document.getElementById('r_overall').textContent =
  document.getElementById('overallAssessment').value || '';
    // Corrections made in signature
    const corrList = document.getElementById("r_corrections_list");
corrList.innerHTML = "";

const selectedCorrections = document
  .getElementById("corrections")
  .value
  .split(",")
  .map(v => v.trim())
  .filter(Boolean);

const store = getSignatureCorrectionStore();

selectedCorrections.forEach(title => {
  const li = document.createElement("li");

  const strong = document.createElement("strong");
  strong.textContent = title;

  const p = document.createElement("p");
  p.textContent = store[title] || "";

  li.appendChild(strong);
  li.appendChild(p);

  corrList.appendChild(li);
});
    // Additional fields
    document.getElementById('r_overallbenefit').textContent = document.getElementById('overallBenefit').value;
    document.getElementById('r_affirmation').textContent = document.getElementById('phase3').value;
    const cpreview = document.getElementById("r_handwritingCorrections");
    cpreview.innerHTML = "";

    document
      .querySelectorAll("#handCorrectionDescriptions textarea")
      .forEach((ta, i) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${i + 1}.</strong> ${ta.value}`;
        cpreview.appendChild(p);
      });
    document.getElementById('r_expert_rec').textContent = document.getElementById('expertRec').value;
}


// RESET BUTTON
document.getElementById('resetBtn').addEventListener('click', ()=>{
  if(!confirm('Reset form and report to defaults?')) return;
  location.reload();
});
const categorySelect = document.getElementById("handCategory");

Object.keys(handwritingMistakeCatalog).forEach(cat => {
  const opt = document.createElement("option");
  opt.value = cat;
  opt.textContent = cat;
  categorySelect.appendChild(opt);
});
categorySelect.addEventListener("change", () => {
  const category = categorySelect.value;
  if (!category) return;

  createEditableDropdown({
    inputId: "handMistakeInput",
    dropdownId: "handMistakeDropdown",
    tagContainerId: "handMistakeTagContainer",
    textareaId: "handMistakes",
    listKey: "handMistakeTemp", // temp list
    defaultList: Object.keys(handwritingMistakeCatalog[category]),
    allowAdd: false,
    allowRemove: false,
    onChange: renderHandMistakeDescriptions
  });
});
function renderHandMistakeDescriptions(selectedTitles) {
  const container = document.getElementById("handMistakeDescriptions");
  const store = getHandMistakeStore();
  const category = document.getElementById("handCategory").value;

  container.innerHTML = "";

  selectedTitles.forEach(title => {
    const block = document.createElement("div");
    block.className = "hmistake-desc-block";

    const label = document.createElement("strong");
    label.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.value =
      store[title] ||
      handwritingMistakeCatalog[category]?.[title] ||
      "";

    textarea.oninput = () => {
      store[title] = textarea.value;
      saveHandMistakeStore(store);
      applyFormToReport();
    };

    block.appendChild(label);
    block.appendChild(textarea);
    container.appendChild(block);
  });
  applyFormToReport();
}
function renderCorrectionDescriptions(selectedTitles) {
  const container = document.getElementById("correctionDescriptions");
  const store = getSignatureCorrectionStore();

  container.innerHTML = "";

  selectedTitles.forEach(title => {
    const block = document.createElement("div");
    block.className = "correction-desc-block";

    const heading = document.createElement("strong");
    heading.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.className = "sign_correction_desc";
    textarea.value = store[title] || "";

    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.textContent = "Save";

    const status = document.createElement("span");

    textarea.oninput = () => {
      status.textContent = "● Unsaved";
      status.style.color = "#d39e00";
    };

    saveBtn.onclick = () => {
      store[title] = textarea.value.trim();
      saveSignatureCorrectionStore(store);
      applyFormToReport();

      status.textContent = "✓ Saved";
      status.style.color = "green";
      setTimeout(() => (status.textContent = ""), 1500);
    };

    block.appendChild(heading);
    block.appendChild(textarea);
    block.appendChild(saveBtn);
    block.appendChild(status);

    container.appendChild(block);
  });
  applyFormToReport();
}
function renderMistakeDescriptions(selectedTitles) {
  const container = document.getElementById("mistakeDescriptions");
  const store = getSignatureMistakeStore();

  container.innerHTML = "";

  selectedTitles.forEach(title => {
    const block = document.createElement("div");
    block.className = "mistake-desc-block";

    const heading = document.createElement("strong");
    heading.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.className = "sign_mistake_desc";
    textarea.placeholder = "Enter graphological interpretation...";
    textarea.value = store[title] || "";

    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "save-desc-btn";
    saveBtn.textContent = "Save";

    const status = document.createElement("span");
    status.className = "save-status";
    status.style.marginLeft = "8px";

    // 🔁 Auto-save while typing
    textarea.oninput = () => {
      store[title] = textarea.value;
      saveSignatureMistakeStore(store);
      applyFormToReport();

      status.textContent = "● Unsaved changes";
      status.style.color = "#d39e00";
    };

    // 💾 Explicit Save button
    saveBtn.onclick = () => {
      store[title] = textarea.value;
      saveSignatureMistakeStore(store);
      applyFormToReport();

      status.textContent = "✓ Saved";
      status.style.color = "#28a745";

      setTimeout(() => {
        status.textContent = "";
      }, 1500);
    };

    block.appendChild(heading);
    block.appendChild(textarea);
    block.appendChild(saveBtn);
    block.appendChild(status);

    container.appendChild(block);
  });
  applyFormToReport();
}

async function domToPdfBlob() {
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

  // Font size constants
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
  function addTextBoxWithBullets(title, bullets, backgroundColor) {
  const padding = 20;
  const lineHeight = 16;

  // Measure height
  let totalLines = 2; // title spacing
  bullets.forEach(b => {
    totalLines += doc.splitTextToSize(b.title, usableWidth - 2 * padding).length;
    totalLines += doc.splitTextToSize(b.desc, usableWidth - 2 * padding).length;
    totalLines += 1;
  });

  const boxHeight = totalLines * lineHeight + padding * 2;
  checkPageBreak(boxHeight + 20);

  // Background
  setColor(backgroundColor, 'fill');
  doc.roundedRect(margin, yPosition, usableWidth, boxHeight, 10, 10, 'F');

  let cursorY = yPosition + padding;

  // Title
  doc.setFont('Georgia', 'bold');
  doc.setFontSize(14);
  setColor([0, 0, 0], 'text');
  doc.text(title, margin + padding, cursorY);
  cursorY += lineHeight * 2;

  // Bullets
  bullets.forEach((b, i) => {
    doc.setFont('Georgia', 'bold');
    doc.text(`${i + 1}. ${b.title}`, margin + padding, cursorY);
    cursorY += lineHeight;

    doc.setFont('Georgia', 'normal');
    const descLines = doc.splitTextToSize(
      b.desc,
      usableWidth - 2 * padding
    );
    descLines.forEach(line => {
      doc.text(line, margin + padding + 12, cursorY);
      cursorY += lineHeight;
    });

    cursorY += 6;
  });

  yPosition += boxHeight + 20;
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
      doc.text(`• ${point}`, margin + 20, boxY, { maxWidth: usableWidth - 40 });
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

  document
  .querySelectorAll("#mistakeDescriptions .mistake-desc-block")
  .forEach((block, i) => {
    const title = block.querySelector("strong")?.textContent || "";
    const desc = block.querySelector("textarea")?.value || "";

    if (title || desc) {
      addBulletPoint(`${i + 1}. ${title}`, desc);
    }
  });

  // ---------------- 2. Mistakes in Handwriting ----------------
  const mistakeName = document.getElementById('r_hand_mistake_name')?.textContent || '';
  addSection(`2. GRAPHOLOGICAL MISTAKES IN HANDWRITING`);
  yPosition += 12;
  addImageBox('r_handwriting_img', 180, [255, 245, 245], [222, 0, 0], "No current handwriting uploaded");

  
  const handwritingMistakesTitle =
  `Graphological Mistakes in ${mistakeName} Handwriting`;

const bullets = [];

document
  .querySelectorAll("#r_handwritingMistakes p")
  .forEach(p => {
    const strong = p.querySelector("strong");
    if (!strong) return;

    const title = strong.innerText.replace(/^\d+\.\s*/, "");
    const desc = p.innerText.replace(strong.innerText, "").trim();

    bullets.push({ title, desc });
  });

if (bullets.length) {
  addTextBoxWithBullets(
    handwritingMistakesTitle,
    bullets,
    [248, 249, 250]
  );
}

  // ---------------- 3. Personality Analysis ----------------
  addSection('3. PERSONALITY ANALYSIS');
  yPosition += 12;

    yPosition += 12;
  
  const columnWidth = (usableWidth - 20) / 2;

  const strengthsText = Array.from(document.querySelectorAll('#r_strengths_list li'))
    .map(li => '• ' + (li.textContent || '').trim())
    .join('\n');
  const strengthsLines = strengthsText ? doc.splitTextToSize(strengthsText, columnWidth - 20) : [];
  const strengthsHeight = strengthsLines.length > 0 ? (strengthsLines.length * 16) + 40 : 0;

  const weaknessesText = Array.from(document.querySelectorAll('#r_weaknesses_list li'))
    .map(li => '• ' + (li.textContent || '').trim())
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

correctionsList.forEach((li, i) => {
  const title = li.querySelector("strong")?.innerText || `Point ${i + 1}`;
  const desc = li.querySelector("p")?.innerText || "";

  addBulletPoint(title, desc);
});

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
  document
  .querySelectorAll("#r_handwritingCorrections p")
  .forEach((p, i) => {
    const text = p.innerText.trim();
    if (text) {
      addBulletPoint(`Correction ${i + 1}`, text);
    }
  });

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
    "• Use any smooth-writing pen that feels comfortable in your hand",
    "• Get a blank notebook (unlined pages work best for free-form practice)"
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
    "• Continue this practice consistently for 3 months",
    "• As you write each signature, repeat the given affirmation below"
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
  doc.text('© 2025 ExplorMee Signature Correction Services. All rights reserved.', pageWidth / 2, yPosition + 25, { align: 'center' });
  doc.text(`This report is confidential and prepared exclusively for ${name}`, pageWidth / 2, yPosition + 45, { align: 'center' });

  return doc;
}
function initHandwritingCorrectionDropdown() {
  const select = document.getElementById("handCorrectionCategory");
  const store = getHandwritingCorrectionStore();

  Object.keys(store).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
  document
  .getElementById("handCorrectionCategory")
  .addEventListener("change", () => {

    const category = handCorrectionCategory.value;
    if (!category) return;

    const store = getHandwritingCorrectionStore();

    createEditableDropdown({
  inputId: "handCorrectionInput",
  dropdownId: "handCorrectionDropdown",
  tagContainerId: "handCorrectionTagContainer",
  textareaId: "handCorrections",
  listKey: "handCorrectionTemp",
  defaultList: store[category],
  allowAdd: false,
  allowRemove: false,
  onChange: renderHandwritingCorrectionDescriptions
});
  });
}

window.addEventListener("DOMContentLoaded", () => {
  applyFormToReport();
  createEditableDropdown({
  inputId: "strengthsInput",
  dropdownId: "strengthsDropdown",
  tagContainerId: "strengthsTagContainer",
  textareaId: "strengths",
  listKey: "strengthList",
  defaultList: strengthList,
  onChange: applyFormToReport
});

  createEditableDropdown({
  inputId: "weaknessesInput",
  dropdownId: "weaknessesDropdown",
  tagContainerId: "weaknessesTagContainer",
  textareaId: "weaknesses",
  listKey: "weaknessList",
  defaultList: weaknessList,
  onChange: applyFormToReport
});
initSignatureMistakeDropdown();
initHandwritingCorrectionDropdown();
createEditableDropdown({
  inputId: "correctionsInput",
  dropdownId: "correctionsDropdown",
  tagContainerId: "correctionsTagContainer",
  textareaId: "corrections",
  listKey: "signatureCorrectionTitles",
  defaultList: Object.keys(getSignatureCorrectionStore()),
  allowAdd: true,
  allowRemove: true,
  onChange: (selectedTitles) => {
    // 🔥 THIS LINE IS REQUIRED
    document.getElementById("corrections").value = selectedTitles.join(", ");

    renderCorrectionDescriptions(selectedTitles);
    applyFormToReport();
  }
});
});

function generateOverallPersonality() {
  runLLMForSection({
    inputId: "overallAssessment",
    outputId: "overallAssessment",
    loaderId: "overallLoader",
    buttonId: "overallBtn",
    templateId: "overall_personality_sign_prem",
    afterRun: applyFormToReport
  });
}

// --- the function ends here

document.getElementById('previewPdf').addEventListener('click', async ()=>{
  // ensure latest form applied
  applyFormToReport();
  const node = document.getElementById('reportRoot');
  const pdf = await domToPdfBlob(node);
  // open in new tab as blob url
  const blob = pdf.output('blob');
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
});

document.getElementById('downloadPdf').addEventListener('click', async ()=>{
  applyFormToReport();
  const node = document.getElementById('reportRoot');
  const pdf = await domToPdfBlob(node);
  pdf.save((document.getElementById('clientName').value || 'report') + '.pdf');
});

// init defaults into report
window.addEventListener('load', ()=>{
  applyFormToReport();
});










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
