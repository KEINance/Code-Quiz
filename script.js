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
const goBack = document.getElementById("goBack");
const answerList = document.getElementById("answerList");
const scoresBtns = document.getElementById("scoresBtns");
const highScoresBtn = document.getElementById("highScoresBtn");
const clearHighScores = document.getElementById("clearHighScores");
var listHighScores = document.getElementById("listHighScores"); //list items from local
const showScores = document.getElementById("showScores"); // shows highscores onclickbtn to move to next page
const submitBtn = document.getElementById("submitBtn");
var secRemaining = 0;
var currentQuestion = 0;
var submitAnswerBtn = document.getElementById("submitAnswerBtn");
var selectedChoice = null;
var questionPrompt = document.getElementById("questionPrompt");
var highScoresList = document.getElementById('highScoresList')

function selectedAnswer(choiceIndex) {
  selectedChoice = choiceIndex;
}
//start quiz
function beginQuiz() {
  console.log("start");
  openingContainer.classList.add("hide");
  questionsContainer.classList.remove("hide");
  countDown();
  resetQuestion();
  highScoresBtn();
}
// countdown
function countDown() {
  // console.log('start2')
  timeInterval = setInterval(function () {
    timeLeft--;
    timer.innerHTML = timeLeft;
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
    nxtBtn.classList.add("hide");
    submitAnswerBtn.classList.remove("hide");
    answerList.innerHTML = "";
    questionPrompt.innerHTML = "";
    const newQuestion = document.createElement("div");
    newQuestion.textContent = questionList[currentQuestion].question;
    questionPrompt.appendChild(newQuestion);
    for (let i = 0; i < questionList[currentQuestion].choices.length; i++) {
      const newLine = document.createElement("button");
      newLine.textContent = questionList[currentQuestion].choices[i].text;
      newLine.addEventListener("click", () => selectedAnswer(i));
      answerList.appendChild(newLine);
    }
    submitAnswerBtn.addEventListener("click", rightWrong, { once: true });
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
    nxtBtn.addEventListener("click", resetQuestion);
    clearInterval(timeInterval);
    saveScore();
  }
  answerList.appendChild(nxtBtn);
  nxtBtn.addEventListener("click", resetQuestion);
}
//save score with initials
function saveScore() {
  console.log("save score");
  scoringContainer.classList.remove("hide");
  questionsContainer.classList.add("hide");
  answerList.classList.add("hide");
  nxtBtn.classList.add("hide");
  submitBtn.classList.remove("hide");
  //have submit button -- takes to show highscores
  submitBtn.addEventListener("click", showHighScores);
}
//show highscores and initials have go back button
function showHighScores() {
  var initialsSaved = document.getElementById("buttonInitials");

  // console.log(initialsSaved.value, timeLeft)
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  var newScore = {
    score: timeLeft,
    initials: initialsSaved.value,
  };

  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));
  scoringContainer.classList.add("hide");
  highscoresContainer.classList.remove("hide");
  listHighScores.classList.remove("hide");
  scoresBtns.classList.remove("hide");
  //clear HTML
  scoringContainer.innerHTML = "";
  
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });
  for (i = 0; i < highscores.length; i += 1) {
    var listItem = document.createElement("li");
    listItem.textContent =
    highscores[i].initials + " - " + highscores[i].score;
    listScores = document.getElementById("listHighScores");
    listScores.appendChild(listItem);
  }
}


function clearHighScore() {
        scoringContainer.classList.add("hide");
        highscoresContainer.classList.remove("hide");
        listHighScores.classList.remove("hide");
        scoresBtns.classList.remove("hide");
        listHighScores.innerHTML = '';
    
    window.localStorage.removeItem('highscores')
    clearHighScores.addEventListener('click', clearHighScores);
}

startBtn.addEventListener("click", beginQuiz);
goBack.addEventListener("click", function(){
    location.reload();  // This will refresh the page
});
highScoresBtn.addEventListener('click', () => {
  scoringContainer.classList.add('hide');
  questionsContainer.classList.add("hide");
  scoringContainer.classList.add('hide');
  highscoresContainer.classList.remove("hide");
  listHighScores.classList.remove('hide');
  showHighScores()
})
