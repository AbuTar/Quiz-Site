// DOM ELEMENTS

const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultScreen = document.getElementById("result-screen")
const startButton = document.getElementById("start-button")
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");
const progressBar = document.getElementById("progress");

// Here I'm going to make an array of quiz questions?

const quizQuestions = [
  {
    question: "A car accelerates uniformly from rest to a velocity of 20 m/s in 10 seconds. What is the acceleration?",
    answers: [
      { text: "2 m/s²", correct: true },
      { text: "5 m/s²", correct: false },
      { text: "10 m/s²", correct: false },
      { text: "0.5 m/s²", correct: false },
    ],
  },
  {
    question: "Which of the following quantities is not a vector?",
    answers: [
      { text: "Displacement", correct: false },
      { text: "Velocity", correct: false },
      { text: "Force", correct: false },
      { text: "Speed", correct: true },
    ],
  },
  {
    question: "A 0.2 kg ball is dropped from a height of 10 m. Assuming no air resistance, what is its speed just before hitting the ground? (g = 9.8 m/s²)",
    answers: [
      { text: "10 m/s", correct: false },
      { text: "14 m/s", correct: true },
      { text: "20 m/s", correct: false },
      { text: "9.8 m/s", correct: false },
    ],
  },
  {
    question: "In a Young's double-slit experiment, what happens to the fringe spacing if the wavelength of light is doubled?",
    answers: [
      { text: "Remains the same", correct: false },
      { text: "It halves", correct: false },
      { text: "It doubles", correct: true },
      { text: "It becomes zero", correct: false },
    ],
  },
  {
    question: "Which of the following statements about gravitational potential is correct?",
    answers: [
      { text: "It is always positive", correct: false },
      { text: "It is zero at the Earth’s surface", correct: false },
      { text: "It increases as you move toward the center of the Earth", correct: false },
      { text: "It is a scalar quantity and always negative", correct: true },
    ],
  },
];