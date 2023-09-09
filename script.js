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

var timeLeft = 75;
const openingContainer = document.getElementById("openingContainer");
const startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
const questionsContainer = document.getElementById("questionsContainer");
const scoringContainer = document.getElementById("scoringContainer");
var buttonInitials = document.getElementById("buttonInitials");
const highscoresContainer = document.getElementById("highscoresContainer");
const nxtBtn = document.getElementById("nxtBtn");
const answerList = document.getElementById("answerList");
const goBack = document.getElementById("goBack");
const clearHighScores = document.getElementById("clearHighScores");
var listHighScores = document.getElementById("listHighScores");
const submitBtn = document.getElementById("submitBtn");
var secRemaining = 0;
var currentQuestion = 0;
var submitAnswerBtn = document.getElementById("submitAnswerBtn");
var selectedChoice = null;

// const playerScores = json.parse(localStorage.getItem("playerScores"));
// localstorage

function selectedAnswer(choiceIndex) {
    selectedChoice = choiceIndex
}

function playerScores() {
  localStorage.setItem("highScores", JSON.stringify(playerScores));
}
function playerInitial() {
  localStorage.setItem("history", JSON.stringify(playerInitial));
}

//start quiz
function beginQuiz() {
  // console.log('start')
  openingContainer.classList.add("hide");
  questionsContainer.classList.remove("hide");

  countDown();
  resetQuestion();
}

// countdown
function countDown() {
  // console.log('start2')
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
  // console.log('start3')
  secRemaining -= time;
  if (secRemaining < 0) {
    secRemaining = 0;
  }
}

//clear answered question
function resetQuestion() {
    console.log("show question and answer");
    nxtBtn.classList.add("hide");
    submitAnswerBtn.classList.remove("hide");
    document.querySelector("#answerList").innerHTML = "";
    
    for (let i = 0; i < questionList[currentQuestion].length; i++) {
        let newQuestion = document.createElement("div");
        newQuestion.textContent = questionList[currentQuestion].question[i].text;
        // currentQuestion++;

    document.getElementById("answerList").appendChild(newQuestion);
  }

  for (let i = 0; i < questionList[currentQuestion].choices.length; i++) {
    //new element document.createElement attach txt through tageting
    //choices arr attached to current question
    let newLine = document.createElement("button");
    newLine.textContent = questionList[currentQuestion].choices[i].text;
    
    // then append created element to container
    //loop that question choices array and append each one to a
    //new line w/in cleared container
    newLine.addEventListener('click', function() {
        selectedAnswer(i);
    })

    document.getElementById("answerList").appendChild(newLine);
  }

  //submit button will show rightWrong()
  submitAnswerBtn.addEventListener("click", rightWrong);
}

//show right answer 'correct' or 'wrong' statement
function rightWrong() {
  console.log(" right / wrong");
  questionsContainer.classList.remove("hide");
  answerList.classList.remove("hide");
  nxtBtn.classList.remove("hide");
  submitAnswerBtn.classList.add("hide");

  if (questionList[currentQuestion].choices[selectedChoice].correct === true) {
    document.querySelector("#answerList").innerHTML = "Correct!";
  } else {
    // wrong answers decreae time by 10 seconds
    document.querySelector("#answerList").innerHTML = "Incorrect!";
    if (timeLeft <= 10) {
      timeLeft = 0;
    } else {
      timeLeft -= 10;
    }
}
    currentQuestion++;

if (currentQuestion === questionList.length) {
    clearInterval(timeInterval);
    saveScore();
}
answerList.appendChild(nxtBtn);
nxtBtn.addEventListener("click", resetQuestion);
}

function saveScore() {
  console.log("save score");




  
}

// highscores and show highscores
// on event click to hide and unhide for showing schores

// const highScores() {
//console.log('show high scores')
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
  console.log("nextbtn");
  resetQuestion();
});
startBtn.addEventListener("click", beginQuiz);

// playerScores.addEventListener("click", saveScore);
// highscoreBtn.addEventListener("click", highscore);
