// code questions and answers
const questionList = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: [
      { text: "strings", correct: false },
      { text: "boolean", correct: false },
      { text: "number", correct: false },
      { text: "alerts", correct: true },
    ],
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parenthesis", correct: true },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    choices: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parenthesis", correct: false },
    ],
  },
  {
    question:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: [
      { text: "JavaScript", correct: false },
      { text: "Terminal/GitBash", correct: false },
      { text: "For Loops", correct: false },
      { text: "ConsoleLog", correct: true },
    ],
  },
];

const timeLeft = 75;
const openingContainer = document.getElementById("openingContainer");
const startBtn = document.getElementById("startBtn");
const timer = document.getElementById("timer");
const questionsContainer = document.getElementById("questionsContainer");
const scoringContainer = document.getElementById("scoringContainer");
const button = document.getElementById("button");
const highscoresContainer = document.getElementById("highscoresContainer");
const playerScores = json.parse(localStorage.getItem("playerScores"));
const nxtBtn = document.getElementById("nxtBtn");
const answerList = document.getElementById("answerList");
const goBack = document.getElementById("goBack");
const clearHighScores = document.getElementById("clearHighScores");
const listHighScores = document.getElementById("listHighScores");
const submitBtn = document.getElementById("submitBtn");

// localstorage
localStorage.setItem("playerScores", json.stringify(playerScores));
localStorage.setItem("playerInitials", json.stringify(playerInitial));

//start quiz
function beginQuiz() {
  openingContainer.classList.add('hide');
  questionsContainer.classList.remove("hide");

  startBtn.addEventListener("click", beginQuiz);
  countDown();
  questions();
}

// countdown
function countDown() {
  timeInterval = setInterval(function () {
    timeRemaining--;
    timer.textContent = timeRemaining + "remaining until quiz ends!";

    if (timeRemaining === 0) {
      clearInterval(timeInterval);
      playerScores();
    }
  }, 1000);
}

// penalty counter
function penalty(time) {
  secRemaining -= time;
  if (secRemaining < 0) {
    secRemaining = 0;
  }
}

//show questions
function questions() {
  if ((questionList = questions.length)) {
    clearInterval(timeInterval);
    playerScores();
    return;
  }
  button.addEventListener("click", rightWrong);
  answerList.appendChild(button);
};

//show right answer 'correct' or 'wrong' statement
function rightWrong() {
  const answerChoice = e.target;
  const right = answerChoice.dataset.correct;
  answerChoice.classList.remove("hide");
  if (right) {
    answerChoice.innerHTML = "CORRECT!";
  } else {
    // wrong answers decreae time by 5 seconds
    answerChoice.innerHTML = "INCORRECT~";
    if (timeRemaining <= 5) {
      timeRemaining = 0;
    } else {
      timeRemaining -= 5;
    }
  }
}

//show next question
function nextQuestionSelection(questions) {
  resetQuestion();
  questions();
}

//clear answered question
function resetQuestion() {
  nxtBtn.classList.add("hide");
  while (answerList.firstChild) {
    answerList.removeChild(answerList.firstChild);
  }
}

// highscores and show highscores
// on event click to hide and unhide for showing schores

// const highScores() {
//     const highScore = localStorage.getItem('score');
//     const scoreData = json.parse(highScore);
//     const scorebyInitial =  scoreData.initial;
//

//add initials in js if easier

//     const playerScore = scoreData.score;

//     scores.innerHTML = '';
//     scores.innerHTML = scorebyInitial + playerScore;
// };

// function ShowHighScores() {
//     const highScores = json.parse(localStorage.getItem('highscores'));
//     const listOfHighScores = listHighScores.setAttribute('')
// }

//clear screen

//start button, highscores, add score
nxtBtn.addEventListener("click", function () {
  nextQuestionSelection();
});
startBtn.addEventListener("click", startQuiz);
playerScores.addEventListener("click", saveScore);
highscoreBtn.addEventListener("click", highscore);
