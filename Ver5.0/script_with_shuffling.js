//Ver4.0 - Polynomial Quiz Application (script.js)
   const quizData = [
    {
      "question": "Which of the following is a fundamental quantity?",
      "options": ["Velocity", "Force", "Mass", "Energy"],
      "correct": [2],
      "explanation": "Mass is a fundamental quantity. Others are derived from it.",
      "type": "singleSelect"
    },
    {
      "question": "What is the SI unit of luminous intensity?",
      "options": ["Candela", "Lux", "Lumen", "Watt"],
      "correct": [0],
      "explanation": "Candela is the SI unit of luminous intensity.",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following is not a derived quantity?",
      "options": ["Length", "Speed", "Acceleration", "Momentum"],
      "correct": [0],
      "explanation": "Length is a base physical quantity.",
      "type": "singleSelect"
    },
    {
      "question": "What is the dimensional formula for force?",
      "options": ["[M L T<sup>-2</sup>]", "[M L T<sup>-1</sup>]", "[M L<sup>2</sup> T<sup>-2</sup>]", "[M L T<sup>-3</sup>]"],
      "correct": [0],
      "explanation": "Force = mass × acceleration, so its dimension is [M L T<sup>-2</sup>].",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following is a scalar quantity?",
      "options": ["Velocity", "Force", "Energy", "Displacement"],
      "correct": [2],
      "explanation": "Energy has magnitude but no direction.",
      "type": "singleSelect"
    },
    {
      "question": "What is the SI unit of electric current?",
      "options": ["Volt", "Ampere", "Ohm", "Coulomb"],
      "correct": [1],
      "explanation": "Ampere is the base unit of electric current.",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following is a dimensionless quantity?",
      "options": ["Refractive index", "Force", "Velocity", "Energy"],
      "correct": [0],
      "explanation": "Refractive index is the ratio of two speeds and hence dimensionless.",
      "type": "singleSelect"
    },
    {
      "question": "What is the SI unit of temperature?",
      "options": ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
      "correct": [0],
      "explanation": "Kelvin is the SI base unit for temperature.",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following has the dimensional formula [M L<sup>2</sup> T<sup>-2</sup>]?",
      "options": ["Energy", "Force", "Momentum", "Power"],
      "correct": [0],
      "explanation": "Energy or work = force × displacement = [M L<sup>2</sup> T<sup>-2</sup>].",
      "type": "singleSelect"
    },
    {
      "question": "What is the SI unit of frequency?",
      "options": ["Hertz", "Second", "Meter", "Newton"],
      "correct": [0],
      "explanation": "Hertz (Hz) is the number of cycles per second.",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following is a vector quantity?",
      "options": ["Mass", "Speed", "Velocity", "Temperature"],
      "correct": [2],
      "explanation": "Velocity has both magnitude and direction.",
      "type": "singleSelect"
    },
    {
      "question": "What is the dimensional formula for pressure?",
      "options": ["[M L<sup>-1</sup> T<sup>-2</sup>]", "[M L T<sup>-2</sup>]", "[M L<sup>2</sup> T<sup>-2</sup>]", "[M L<sup>-2</sup> T<sup>-2</sup>]"],
      "correct": [0],
      "explanation": "Pressure = force / area = [M L T<sup>-2</sup>] / [L<sup>2</sup>] = [M L<sup>-1</sup> T<sup>-2</sup>].",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following is a derived unit?",
      "options": ["Meter", "Kilogram", "Newton", "Second"],
      "correct": [2],
      "explanation": "Newton is derived from kg·m/s².",
      "type": "singleSelect"
    },
    {
      "question": "What is the dimensional formula for velocity?",
      "options": ["[M L T<sup>-1</sup>]", "[L T<sup>-1</sup>]", "[L T<sup>-2</sup>]", "[M L<sup>2</sup> T<sup>-2</sup>]"],
      "correct": [1],
      "explanation": "Velocity = displacement/time = [L]/[T] = [L T<sup>-1</sup>].",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following is a fundamental unit?",
      "options": ["Joule", "Meter", "Watt", "Pascal"],
      "correct": [1],
      "explanation": "Meter is a base unit; others are derived.",
      "type": "singleSelect"
    },
     {
      "question": "Which physical quantity has the dimensional formula [M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>]?",
      "options": ["Strain", "Energy", "Power", "Force"],
      "correct": [0],
      "explanation": "Strain is a ratio of similar quantities and hence dimensionless.",
      "type": "singleSelect"
    },
    {
      "question": "What is the SI unit of luminous flux?",
      "options": ["Lumen", "Candela", "Lux", "Watt"],
      "correct": [0],
      "explanation": "Lumen is the SI unit of luminous flux.",
      "type": "singleSelect"
    },
    {
      "question": "Which derived unit corresponds to [kg·m²/s³]?",
      "options": ["Watt", "Joule", "Pascal", "Volt"],
      "correct": [0],
      "explanation": "Watt is the unit of power and equals kg·m²/s³.",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following is NOT a base quantity?",
      "options": ["Temperature", "Electric current", "Momentum", "Length"],
      "correct": [2],
      "explanation": "Momentum is a derived quantity.",
      "type": "singleSelect"
    },
    {
      "question": "What is the SI unit of solid angle?",
      "options": ["Steradian", "Radian", "Degree", "Candela"],
      "correct": [0],
      "explanation": "Steradian is the unit of solid angle.",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following is an example of a vector quantity?",
      "options": ["Torque", "Speed", "Time", "Energy"],
      "correct": [0],
      "explanation": "Torque has both magnitude and direction.",
      "type": "singleSelect"
    },
    {
      "question": "What is the dimensional formula for surface tension?",
      "options": ["[M T<sup>-2</sup>]", "[M L<sup>0</sup> T<sup>-2</sup>]", "[M T<sup>-1</sup>]", "[M L<sup>-1</sup> T<sup>-2</sup>]"],
      "correct": [3],
      "explanation": "Surface tension = force/length = [M L T<sup>-2</sup>]/[L] = [M L<sup>-1</sup> T<sup>-2</sup>].",
      "type": "singleSelect"
    },
    {
      "question": "Which fundamental quantity is used to derive angular velocity?",
      "options": ["Time", "Length", "Mass", "Current"],
      "correct": [0],
      "explanation": "Angular velocity is measured as angle per unit time.",
      "type": "singleSelect"
    },
    {
      "question": "The unit 'Newton-second' is used to measure:",
      "options": ["Impulse", "Momentum", "Power", "Energy"],
      "correct": [0],
      "explanation": "Impulse = force × time, and is measured in Newton-seconds.",
      "type": "singleSelect"
    },
    {
      "question": "What is the dimension of Planck’s constant (h)?",
      "options": ["[M L<sup>2</sup> T<sup>-1</sup>]", "[M L<sup>2</sup> T<sup>-2</sup>]", "[M L T<sup>-2</sup>]", "[M L<sup>-2</sup> T]"],
      "correct": [0],
      "explanation": "Planck's constant links energy and frequency: E = hν.",
      "type": "singleSelect"
    },
    {
      "question": "Which pair is correctly matched?",
      "options": ["Magnetic flux - Weber", "Electric current - Volt", "Force - Watt", "Work - Coulomb"],
      "correct": [0],
      "explanation": "Weber is the SI unit of magnetic flux.",
      "type": "singleSelect"
    },
    {
      "question": "Which term has the dimensional formula [M<sup>0</sup> L T<sup>-1</sup>]?",
      "options": ["Angular velocity", "Acceleration", "Speed", "Strain"],
      "correct": [0],
      "explanation": "Angular velocity has dimension of angle/time, where angle is dimensionless.",
      "type": "singleSelect"
    },
    {
      "question": "Which unit is a measure of energy?",
      "options": ["Joule", "Watt", "Ampere", "Newton"],
      "correct": [0],
      "explanation": "Joule is the unit of work or energy.",
      "type": "singleSelect"
    },
    {
      "question": "Which is a pair of base quantities in SI?",
      "options": ["Temperature, Current", "Energy, Power", "Force, Time", "Pressure, Length"],
      "correct": [0],
      "explanation": "Temperature (K) and electric current (A) are base quantities.",
      "type": "singleSelect"
    },
    {
      "question": "Which of the following expresses derived units only?",
      "options": ["Newton, Joule, Watt", "Meter, Second, Kelvin", "Ampere, Candela, Mole", "Kilogram, Meter, Second"],
      "correct": [0],
      "explanation": "All are derived from base units.",
      "type": "singleSelect"
    }
];
// // Deep copy to preserve original data
// const shuffledQuizData = JSON.parse(JSON.stringify(quizData));

// // Utility to shuffle arrays
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Shuffle questions and their options
// function randomizeQuiz() {
//     shuffledQuizData.forEach((q, index) => {
//         q.originalIndex = index;  // track original position
//         const correctValue = q.options[q.correct[0]];
//         shuffleArray(q.options);
//         q.correct[0] = q.options.indexOf(correctValue);
//     });
//     shuffleArray(shuffledQuizData);
// }

// function loadQuiz() {
//     randomizeQuiz();
//     const quizContainer = document.getElementById("quiz");
//     shuffledQuizData.forEach((q, index) => {
//         let questionHTML = `<p>${index + 1}. ${q.question}</p>`;
//         q.options.forEach((option, i) => {
//             questionHTML += `<input type="radio" name="question${index}" value="${i}"> ${option} <br>`;
//         });
//         quizContainer.innerHTML += questionHTML + "<br>";
//     });
// }

// function submitQuiz() {
//     let score = 0;
//     let userResponses = [];
//     let explanationHTML = `<h2>Explanations:</h2>`;

//     shuffledQuizData.forEach((q, index) => {
//         const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
//         if (selectedOption) {
//             const selectedIndex = parseInt(selectedOption.value);
//             const isCorrect = selectedIndex === q.correct[0];

//             userResponses.push({
//                 question: q.question,
//                 selected: q.options[selectedIndex],
//                 correct: q.options[q.correct[0]],
//                 explanation: q.explanation,
//                 isCorrect
//             });

//             score += isCorrect ? 1 : 0;
//         }
//     });

//     document.getElementById("result").innerHTML = `You scored ${score} out of ${shuffledQuizData.length}!`;

//     userResponses.forEach((res, i) => {
//         explanationHTML += `<p><strong>${i + 1}. ${res.question}</strong><br>
//             Your answer: ${res.selected}<br>
//             Correct answer: ${res.correct}<br>
//             Explanation: ${res.explanation}</p>`;
//     });

//     document.getElementById("explanation").innerHTML = explanationHTML;
//     localStorage.setItem("quizResults", JSON.stringify({ score, userResponses }));
// }

// function generatePDF() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     const quizResults = JSON.parse(localStorage.getItem("quizResults"));
//     let y = 20;

//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(18);
//     doc.text("Physical World and Measurement Quiz Results", 20, 10);

//     doc.setFontSize(14);
//     doc.text(`Score: ${quizResults.score} / ${shuffledQuizData.length}`, 20, y);
//     y += 10;

//     quizResults.userResponses.forEach((res, index) => {
//         doc.setFontSize(12);
//         doc.text(`${index + 1}. ${res.question}`, 10, y);
//         y += 7;
//         doc.text(`Your answer: ${res.selected}`, 10, y);
//         y += 5;
//         doc.text(`Correct answer: ${res.correct}`, 10, y);
//         y += 5;
//         doc.text(`Explanation: ${res.explanation}`, 10, y);
//         y += 10;
//     });

//     doc.save("quiz_results.pdf");
// }

// window.onload = loadQuiz;

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

// function submitQuiz() {
//     let score = 0;
//     let userResponses = [];
//     let explanationHTML = `<h2>Explanations:</h2>`;

//     shuffledQuizData.forEach((q, index) => {
//         const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
//         if (selectedOption) {
//             const selectedIndex = parseInt(selectedOption.value);
//             const isCorrect = selectedIndex === q.correct[0];

//             userResponses.push({
//                 question: q.question,
//                 selected: q.options[selectedIndex],
//                 correct: q.options[q.correct[0]],
//                 explanation: q.explanation,
//                 isCorrect
//             });

//             score += isCorrect ? 1 : 0;
//         }
//     });

//     document.getElementById("result").innerHTML = `You scored ${score} out of ${shuffledQuizData.length}!`;

//     userResponses.forEach((res, i) => {
//         explanationHTML += `<p><strong>${i + 1}. ${res.question}</strong><br>
//             Your answer: ${res.selected}<br>
//             Correct answer: ${res.correct}<br>
//             Explanation: ${res.explanation}</p>`;
//     });

//     document.getElementById("explanation").innerHTML = explanationHTML;
//     localStorage.setItem("quizResults", JSON.stringify({ score, userResponses }));
// }

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
            selected: selectedIndex !== null ? q.options[selectedIndex] : "Not answered",
            correct: q.options[q.correct[0]],
            explanation: q.explanation,
            isCorrect: selectedIndex !== null ? isCorrect : false
        });

        score += selectedIndex !== null && isCorrect ? 1 : 0;
    });

    document.getElementById("result").innerHTML = `You scored ${score} out of ${shuffledQuizData.length}!`;

    userResponses.forEach((res, i) => {
        explanationHTML += `<p><strong>${i + 1}. ${res.question}</strong><br>
            Your answer: ${res.selected}<br>
            Correct answer: ${res.correct}<br>
            Explanation: ${res.explanation}</p>`;
    });

    document.getElementById("explanation").innerHTML = explanationHTML;

    localStorage.setItem("quizResults", JSON.stringify({ score, userResponses }));
}


// function generatePDF() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     const quizResults = JSON.parse(localStorage.getItem("quizResults"));
//     let y = 20;

//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(18);
//     doc.text("Physical World and Measurement Quiz Results", 20, 10);

//     doc.setFontSize(14);
//     doc.text(`Score: ${quizResults.score} / ${shuffledQuizData.length}`, 20, y);
//     y += 10;

//     quizResults.userResponses.forEach((res, index) => {
//         doc.setFontSize(12);
//         doc.text(`${index + 1}. ${res.question}`, 10, y);
//         y += 7;
//         doc.text(`Your answer: ${res.selected}`, 10, y);
//         y += 5;
//         doc.text(`Correct answer: ${res.correct}`, 10, y);
//         y += 5;
//         doc.text(`Explanation: ${res.explanation}`, 10, y);
//         y += 10;
//     });

//     doc.save("quiz_results.pdf");
// }
// function generatePDF() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     const quizResults = JSON.parse(localStorage.getItem("quizResults"));
//     let y = 20;
//     const pageHeight = doc.internal.pageSize.height;

//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(18);
//     doc.text("Physical World and Measurement Quiz Results", 20, 10);

//     doc.setFontSize(14);
//     doc.text(`Score: ${quizResults.score} / ${shuffledQuizData.length}`, 20, y);
//     y += 10;

//     quizResults.userResponses.forEach((res, index) => {
//         const blockHeight = 25; // estimated height per question block
//         if (y + blockHeight > pageHeight - 10) {
//             doc.addPage();
//             y = 20;
//         }

//         doc.setFontSize(12);
//         doc.text(`${index + 1}. ${res.question}`, 10, y);
//         y += 7;
//         doc.text(`Your answer: ${res.selected}`, 10, y);
//         y += 5;
//         doc.text(`Correct answer: ${res.correct}`, 10, y);
//         y += 5;
//         doc.text(`Explanation: ${res.explanation}`, 10, y);
//         y += 8;
//     });

//     doc.save("quiz_results.pdf");
// }

// window.onload = loadQuiz;

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const quizResults = JSON.parse(localStorage.getItem("quizResults"));
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    let y = 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Physical World and Measurement Quiz Results", 20, 15);

    doc.setFontSize(13);
    doc.text(`Score: ${quizResults.score} / ${quizResults.userResponses.length}`, 20, y);
    y += 10;

    quizResults.userResponses.forEach((res, index) => {
        const block = [
            `${index + 1}. ${res.question}`,
            `Your answer: ${res.selected}`,
            `Correct answer: ${res.correct}`,
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

    doc.save("quiz_results.pdf");
}
