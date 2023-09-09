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
const buttonInitials = document.getElementById("buttonInitials");
const highscoresContainer = document.getElementById("highscoresContainer");
const nxtBtn = document.getElementById("nxtBtn");
const answerList = document.getElementById("answerList");
const goBack = document.getElementById("goBack");
const clearHighScores = document.getElementById("clearHighScores");
const listHighScores = document.getElementById("listHighScores");
const submitBtn = document.getElementById("submitBtn");
const secRemaining = 0;


// const playerScores = json.parse(localStorage.getItem("playerScores"));
// localstorage

function playerScores() {
  localStorage.setItem("highScores", JSON.stringify(playerScores));
};
function playerInitial() {
  localStorage.setItem("history", JSON.stringify(playerInitial));
}

//start quiz
function beginQuiz() {
    console.log('start')
  openingContainer.classList.add("hide");
  questionsContainer.classList.remove("hide");

  questions();
  countDown();
}

// countdown
function countDown() {
    console.log('start2')
  timeInterval = setInterval(function () {
    timeLeft--;
    timer.innerHTML = timeLeft + "remaining until quiz ends!";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      playerScores();
    }
  }, 1000);
}

// penalty counter
function penalty(time) {
    console.log('start3')
  secRemaining -= time;
  if (secRemaining < 0) {
    secRemaining = 0;
  }
}

//show questions
function questions() {
    console.log('start4')
    questionsContainer.classList.remove("hide");

  if ((questionList = questions.length.answerList)) {
    clearInterval(timeInterval);
    playerScores();
    return;
  }
  button.addEventListener("click", rightWrong);
  answerList.appendChild(button);
}

//show right answer 'correct' or 'wrong' statement
function rightWrong() {
    console.log('start5')
  const answerChoice = e.target;
  const right = answerChoice.dataset.correct;
  answerChoice.classList.remove("hide");
  if (right) {
    answerChoice.innerHTML = "CORRECT!";
  } else {
    // wrong answers decreae time by 10 seconds
    answerChoice.innerHTML = "INCORRECT~";
    if (timeLeft <= 10) {
      timeLeft = 0;
    } else {
      timeLeft -= 10;
    }
  }
}

//show next question
function nextQuestionSelection(questions) {
    console.log('start6')
  resetQuestion();
  questions();
}

//clear answered question
function resetQuestion() {
    console.log('start6')
  nxtBtn.classList.add("hide");
  while (answerList.firstChild) {
    answerList.removeChild(answerList.firstChild);
  }
}

function saveScore() {

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
    console.log('nextbtn')
  nextQuestionSelection();
});
startBtn.addEventListener("click", beginQuiz);
// playerScores.addEventListener("click", saveScore);
// highscoreBtn.addEventListener("click", highscore);
