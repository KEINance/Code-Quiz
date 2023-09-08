const timeLeft = 75;
const openingContainer = document.getElementById('opening-container');
const startBtn = document.getElementById('startBtn');
const timer = document.getElementById('timer');
const questionsContainer = document.getElementById('questions-container');
const scoringContainer = document.getElementById('scoring-container');
const button = document.getElementById('button');
const highscoresContainer = document.getElementById('highscores-container');
const playerScores = json.parse(localStorage.getItem('playerScores'));
const nxtBtn = document.getElementById('nxtBtn');
// code questions and answers
const questionList [
    {
        question: "Commonly used data types DO NOT include:",
        choices: [
           { text: "strings", correct: false },
           { text: "boolean", correct: false },
           { text: "number", correct: false },
           { text: "alerts", correct: true }
]},
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parenthesis", correct: true },
            { text: "square brackets", correct: false }
]},
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: [
            { text: "numbers and strings", correct: false },
            { text: "other arrays", correct: false },
            { text: "booleans", correct: false },
            { text: "all of the above", correct: true }
]},
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: [
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
            { text: "quotes", correct: true },
            { text: "parenthesis", correct: false }
]},
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: [
            { text: "JavaScript", correct: false },
            { text: "Terminal/GitBash", correct: false },
            { text: "For Loops", correct: false },
            { text: "ConsoleLog", correct: true }
]}
];
// localstorage 
localStorage.setItem('playerScores', json.stringify(playerScores));
//start quiz

// countdown
function countDown() {
  
  timeInterval = setInterval( function (){
    timeRemaining--;
    timer.textContent = timeRemaining + 'remaining until quiz ends!';

    if (timeRemaining === 0) {
        clearInterval(timeInterval)
        playerScores();
    }
}, 1000)
}
// penalty counter
function penalty(time) {
    secRemaining -= time;
    if(secRemaining < 0) {
        secRemaining = 0;
    }
}
//show questions
function questions() {
    if ( questionList = questions.length) {
        clearInterval(timeInterval)
        playerScores();
        return;
    }
}
//show right answer 'correct' or 'wrong' statement
function rightWrong() {
    const answerChoice = e.target;
    const right = answerChoice.dataset.correct;
    answerChoice.classList.remove('hide');
    if (right) {
        answerChoice.innerHTML = 'CORRECT!';
    } else {
    // wrong answers decreae time by 5 seconds
        answerChoice.innerHTML = 'INCORRECT~';
        if (timeRemaining <= 5) {
            timeRemaining = 0;
        } else {
            timeRemaining -= 5;
        }
    }
}
// show highscores

//clear screen

//start button, highscores, add score
startBtn.addEventListener('click', startQuiz);
playerScores.addEventListener('click', saveScore)
highscoreBtn.addEventListener('click', highscore);