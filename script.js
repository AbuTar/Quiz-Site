// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-button");
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

// Questions
const quizQuestions = [
  {
    question: "A car accelerates uniformly from rest to 20 m/s in 10 seconds. What is the acceleration?",
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
    question: "A 0.2 kg ball is dropped from 10 m. What is its speed before hitting the ground? (g = 9.8 m/s²)",
    answers: [
      { text: "10 m/s", correct: false },
      { text: "14 m/s", correct: true },
      { text: "20 m/s", correct: false },
      { text: "9.8 m/s", correct: false },
    ],
  },
  {
    question: "In Young's double-slit experiment, what happens if the wavelength is doubled?",
    answers: [
      { text: "Remains the same", correct: false },
      { text: "It halves", correct: false },
      { text: "It doubles", correct: true },
      { text: "It becomes zero", correct: false },
    ],
  },
  {
    question: "Which is correct about gravitational potential?",
    answers: [
      { text: "It is always positive", correct: false },
      { text: "Zero at Earth’s surface", correct: false },
      { text: "Increases toward Earth’s center", correct: false },
      { text: "Scalar and always negative", correct: true },
    ],
  },
];

// State
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

// Init
totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;
  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
}

function showQuestion() {
  answerDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  questionText.textContent = currentQuestion.question;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-button");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(e) {
  if (answerDisabled) return;
  answerDisabled = true;

  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach(btn => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    } else {
      btn.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
