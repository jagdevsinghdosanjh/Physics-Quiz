//Ver2.0 - Motion in a Straight Line (script.js)
const quizData = [
  {
    "title": "Motion in a Straight Line Quiz",
    "type": "quiz",
    "quiz": [
      {
        "question": "What is the SI unit of displacement?",
        "options": ["Meter", "Kilogram", "Second", "Newton"],
        "correct": [0],
        "explanation": "Displacement is measured in meters in the SI system.",
        "type": "singleSelect"
      },
      {
        "question": "Which quantity is scalar?",
        "options": ["Velocity", "Acceleration", "Speed", "Displacement"],
        "correct": [2],
        "explanation": "Speed has magnitude only, no direction—making it scalar.",
        "type": "singleSelect"
      },
      {
        "question": "The slope of a displacement-time graph represents:",
        "options": ["Velocity", "Speed", "Acceleration", "Distance"],
        "correct": [0],
        "explanation": "Slope of displacement-time graph gives velocity.",
        "type": "singleSelect"
      },
      {
        "question": "Acceleration is defined as:",
        "options": ["Change in velocity over time", "Velocity per distance", "Displacement per time", "Rate of change of displacement"],
        "correct": [0],
        "explanation": "Acceleration is the time rate of change of velocity.",
        "type": "singleSelect"
      },
      {
        "question": "Area under a velocity-time graph gives:",
        "options": ["Speed", "Displacement", "Force", "Acceleration"],
        "correct": [1],
        "explanation": "The area under v–t graph = displacement.",
        "type": "singleSelect"
      },
      {
        "question": "A body moving with uniform velocity has:",
        "options": ["Zero acceleration", "Increasing speed", "Constant acceleration", "Variable displacement"],
        "correct": [0],
        "explanation": "Uniform velocity implies acceleration is zero.",
        "type": "singleSelect"
      },
      {
        "question": "Which physical quantity has unit m/s²?",
        "options": ["Velocity", "Displacement", "Acceleration", "Momentum"],
        "correct": [2],
        "explanation": "Acceleration is measured in meters per second squared.",
        "type": "singleSelect"
      },
      {
        "question": "Displacement can be:",
        "options": ["Only positive", "Only negative", "Positive or negative", "Zero only"],
        "correct": [2],
        "explanation": "Being a vector, displacement can be +ve, -ve or zero.",
        "type": "singleSelect"
      },
      {
        "question": "Instantaneous speed is:",
        "options": ["Average speed", "Speed at a particular instant", "Distance per unit time", "Displacement per unit time"],
        "correct": [1],
        "explanation": "It’s the speed measured at a given moment.",
        "type": "singleSelect"
      },
      {
        "question": "If acceleration is constant, velocity-time graph is a:",
        "options": ["Straight line", "Parabola", "Circle", "Hyperbola"],
        "correct": [0],
        "explanation": "Constant acceleration yields linear v–t graph.",
        "type": "singleSelect"
      },
      {
        "question": "The dimensional formula of velocity is:",
        "options": ["[M⁰L¹T⁻¹]", "[MLT⁻²]", "[ML⁻¹T]", "[M⁰LT]"],
        "correct": [0],
        "explanation": "Velocity = displacement/time → [L][T⁻¹].",
        "type": "singleSelect"
      },
      {
        "question": "A car moving with 20 m/s stops in 5 seconds. Acceleration is:",
        "options": ["4 m/s²", "-4 m/s²", "-5 m/s²", "5 m/s²"],
        "correct": [1],
        "explanation": "a = (0 - 20)/5 = -4 m/s² (deceleration).",
        "type": "singleSelect"
      },
      {
        "question": "What is the displacement of a particle that returns to its starting point?",
        "options": ["Zero", "Equal to distance", "Infinite", "Negative"],
        "correct": [0],
        "explanation": "Net change in position is zero.",
        "type": "singleSelect"
      },
      {
        "question": "The acceleration due to gravity on Earth is approximately:",
        "options": ["8.9 m/s²", "10 m/s²", "9.8 m/s²", "9 m/s²"],
        "correct": [2],
        "explanation": "Standard value is ≈ 9.8 m/s².",
        "type": "singleSelect"
      },
      {
        "question": "A body travels 10 m north, then 10 m south. Displacement is:",
        "options": ["20 m", "0 m", "10 m", "5 m"],
        "correct": [1],
        "explanation": "Displacement = final position − initial = 0.",
        "type": "singleSelect"
      },
      {
        "question": "A particle has zero velocity and non-zero acceleration. This means:",
        "options": ["It is turning", "It is speeding up", "It is at rest momentarily", "It is moving uniformly"],
        "correct": [2],
        "explanation": "Think of a ball at the top of a vertical throw—velocity is 0, acceleration due to gravity acts.",
        "type": "singleSelect"
      },
      {
        "question": "Which of these graphs indicate uniform motion?",
        "options": ["Displacement-time linear", "Velocity-time linear increasing", "Displacement-time curve", "Acceleration-time constant"],
        "correct": [0],
        "explanation": "Uniform motion = constant velocity → straight line in s–t graph.",
        "type": "singleSelect"
      },
      {
        "question": "A cyclist moves with a speed of 10 m/s for 30 s. Distance covered is:",
        "options": ["300 m", "30 m", "10 m", "3 m"],
        "correct": [0],
        "explanation": "Distance = speed × time = 10 × 30 = 300 m.",
        "type": "singleSelect"
      },
      {
        "question": "Average velocity equals average speed when:",
        "options": ["Path is curved", "Displacement = distance", "Motion is random", "Speed varies"],
        "correct": [1],
        "explanation": "Both are equal only if total displacement equals total distance.",
        "type": "singleSelect"
      },
      {
        "question": "What is retardation?",
        "options": ["Negative acceleration", "Increase in velocity", "Constant velocity", "Non-uniform speed"],
        "correct": [0],
        "explanation": "Retardation is acceleration in the opposite direction to motion.",
        "type": "singleSelect"
      },
      {
        "question": "What is the SI unit of displacement?",
        "options": ["Meter", "Kilogram", "Second", "Newton"],
        "correct": [0],
        "explanation": "Displacement is a vector quantity that represents the shortest distance between two points. Its SI unit is the meter (m).",
        "type": "singleSelect"
      },
      {
        "question": "Which of the following is a scalar quantity?",
        "options": ["Displacement", "Velocity", "Speed", "Acceleration"],
        "correct": [2],
        "explanation": "Speed is a scalar quantity because it has only magnitude and no direction.",
        "type": "singleSelect"
      },
      {
        "question": "What is the slope of a displacement-time graph?",
        "options": ["Acceleration", "Velocity", "Displacement", "Speed"],
        "correct": [1],
        "explanation": "The slope of a displacement-time graph gives the velocity.",
        "type": "singleSelect"
      },
      {
        "question": "If a body moves with uniform velocity, what is its acceleration?",
        "options": ["Zero", "Constant", "Increasing", "Decreasing"],
        "correct": [0],
        "explanation": "In uniform velocity, there is no change in speed or direction, hence acceleration is zero.",
        "type": "singleSelect"
      },
      {
        "question": "What is the area under a velocity-time graph equal to?",
        "options": ["Displacement", "Acceleration", "Speed", "Force"],
        "correct": [0],
        "explanation": "The area under a velocity-time graph represents displacement.",
        "type": "singleSelect"
      },
      {
        "question": "A car accelerates uniformly from rest to 20 m/s in 5 seconds. What is its acceleration?",
        "options": ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
        "correct": [1],
        "explanation": "Using a = (v - u)/t = (20 - 0)/5 = 4 m/s².",
        "type": "singleSelect"
      },
      {
        "question": "What is the velocity of an object at rest?",
        "options": ["Zero", "Constant", "Infinite", "Undefined"],
        "correct": [0],
        "explanation": "An object at rest has no motion, so its velocity is zero.",
        "type": "singleSelect"
      },
      {
        "question": "Which of the following is true for a body in uniform motion?",
        "options": ["Its velocity changes with time.", "Its acceleration is zero.", "Its displacement is always zero.", "Its speed decreases over time."],
        "correct": [1],
        "explanation": "In uniform motion, velocity is constant and thus acceleration is zero.",
        "type": "singleSelect"
      },
      {
        "question": "A body travels 10 m in the first second, 20 m in the next, and 30 m in the third. What is the nature of its motion?",
        "options": ["Uniform motion", "Uniformly accelerated motion", "Non-uniform motion", "Circular motion"],
        "correct": [1],
        "explanation": "Increasing displacement in equal time intervals indicates uniformly accelerated motion.",
        "type": "singleSelect"
      },
      {
        "question": "What is the acceleration of a freely falling object near the Earth's surface?",
        "options": ["9.8 m/s²", "10 m/s²", "0 m/s²", "4.9 m/s²"],
        "correct": [0],
        "explanation": "Standard gravity near Earth's surface is approximately 9.8 m/s².",
        "type": "singleSelect"
      },
      {
        "question": "Which equation of motion relates displacement, initial velocity, time, and acceleration?",
        "options": ["s = ut + ½at²", "v = u + at", "v² = u² + 2as", "F = ma"],
        "correct": [0],
        "explanation": "s = ut + ½at² relates displacement to time, initial velocity, and acceleration.",
        "type": "singleSelect"
      },
      {
        "question": "A body is thrown vertically upward at 20 m/s. What is its velocity at the highest point?",
        "options": ["20 m/s", "10 m/s", "0 m/s", "-20 m/s"],
        "correct": [2],
        "explanation": "At the peak of its motion, velocity becomes zero.",
        "type": "singleSelect"
      },
      {
        "question": "What is the displacement of a body that returns to its starting point?",
        "options": ["Equal to distance", "Zero", "Greater than distance", "Less than distance"],
        "correct": [1],
        "explanation": "Displacement is zero if the initial and final points are the same.",
        "type": "singleSelect"
      },
      {
        "question": "What is the rate of change of velocity called?",
        "options": ["Speed", "Acceleration", "Displacement", "Momentum"],
        "correct": [1],
        "explanation": "Acceleration is the rate at which velocity changes over time.",
        "type": "singleSelect"
      },
      {
        "question": "A body moves with acceleration 2 m/s² and initial velocity 5 m/s. What is its velocity after 3 seconds?",
        "options": ["11 m/s", "10 m/s", "15 m/s", "20 m/s"],
        "correct": [0],
        "explanation": "Using v = u + at, v = 5 + 2×3 = 11 m/s.",
        "type": "singleSelect"
      },
      {
        "question": "What is the term for the distance traveled by an object in a specific direction?",
        "options": ["Distance", "Displacement", "Speed", "Velocity"],
        "correct": [1],
        "explanation": "Displacement is the distance in a specific direction from the starting point.",
        "type": "singleSelect"
      }
    ]
  }
];


// Deep copy to preserve original data
const shuffledQuizData = JSON.parse(JSON.stringify(quizData));

// Utility to shuffle arrays
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle questions and their options
function randomizeQuiz() {
  shuffledQuizData.forEach((q, index) => {
    q.originalIndex = index;  // track original position
    const correctValue = q.options[q.correct[0]];
    shuffleArray(q.options);
    q.correct[0] = q.options.indexOf(correctValue);
  });
  shuffleArray(shuffledQuizData);
}

function loadQuiz() {
  randomizeQuiz();
  const quizContainer = document.getElementById("quiz");
  shuffledQuizData.forEach((q, index) => {
    let questionHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach((option, i) => {
      questionHTML += `<input type="radio" name="question${index}" value="${i}"> ${option} <br>`;
    });
    quizContainer.innerHTML += questionHTML + "<br>";
  });
}

function submitQuiz() {
  let score = 0;
  let userResponses = [];
  let explanationHTML = `<h2>Explanations:</h2>`;

  shuffledQuizData.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    const selectedIndex = selectedOption ? parseInt(selectedOption.value) : null;
    const isCorrect = selectedIndex === q.correct[0];

    userResponses.push({
      question: q.question,
      selected: selectedIndex !== null ? q.options[selectedIndex] : "Not corrected",
      correct: q.options[q.correct[0]],
      explanation: q.explanation,
      isCorrect: selectedIndex !== null ? isCorrect : false
    });

    score += selectedIndex !== null && isCorrect ? 1 : 0;
  });

  document.getElementById("result").innerHTML = `You scored ${score} out of ${shuffledQuizData.length}!`;

  userResponses.forEach((res, i) => {
    explanationHTML += `<p><strong>${i + 1}. ${res.question}</strong><br>
            Your correct: ${res.selected}<br>
            Correct correct: ${res.correct}<br>
            Explanation: ${res.explanation}</p>`;
  });

  document.getElementById("explanation").innerHTML = explanationHTML;

  localStorage.setItem("quizResults", JSON.stringify({ score, userResponses }));
}

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const quizResults = JSON.parse(localStorage.getItem("quizResults"));
  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;
  let y = 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Motion in a Straight Line Quiz Results", 20, 15);

  doc.setFontSize(13);
  doc.text(`Score: ${quizResults.score} / ${quizResults.userResponses.length}`, 20, y);
  y += 10;

  quizResults.userResponses.forEach((res, index) => {
    const block = [
      `${index + 1}. ${res.question}`,
      `Your correct: ${res.selected}`,
      `Correct correct: ${res.correct}`,
      `Explanation: ${res.explanation}`
    ];

    doc.setFontSize(11);
    block.forEach(line => {
      const wrapped = doc.splitTextToSize(line, pageWidth - 20);
      if (y + wrapped.length * 6 > pageHeight - 15) {
        doc.addPage();
        y = 20;
      }
      doc.text(wrapped, 10, y);
      y += wrapped.length * 6;
    });

    y += 4; // extra spacing between questions
  });

  doc.save("Motion_in_a_Straight_Line_Quiz_Results.pdf");
}
window.onload = loadQuiz;