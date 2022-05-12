var questionContent = $(".questionContent");
var gameText = $("#game-timer");
var timerEl = $("#game-timer");
var startBtn = $("#start-btn");
var submitBtn = $("#submit-btn");
var answerOne = $("#answer-1");
var answerTwo = $("#answer-2");
var answerThree = $("#answer-3");
var answerFour = $("#answer-4");
var listOfScores = $("#highscores");

var questionsArray = [
  {
    title: "Question #1:",
    question: "A true Bitcoin psycho has what type of hands?",
    isCorrect: true,
  },
  {
    title: "Question #2:",
    question: "What is the best way to lose your Bitcoin holdings?",
    isCorrect: true,
  },
  {
    title: "Question #3:",
    question: "How much is 1 Bitcoin worth?",
    isCorrect: true,
  },
  {
    title: "Question #4:",
    question: "Tick. Tock. Next. ____?",
    isCorrect: true,
  },
  {
    title: "Question #5:",
    question: "What is the first rule of Bitcoin?",
    isCorrect: true,
  },
];

var correctAnswerArr = [
  {
    title: "Question 1:",
    answer: "Paper",
    iscorrect: false,
  },
  {
    title: "Question 1:",
    answer: "Diamond",
    iscorrect: true,
  },
  {
    title: "Question 1:",
    answer: "Soft",
    iscorrect: false,
  },
  {
    title: "Question 2:",
    answer: "Staking",
    iscorrect: false,
  },
  {
    title: "Question 2:",
    answer: "Confiscated by the Canadian Govt",
    iscorrect: false,
  },
  {
    title: "Question 1:",
    answer: "Boating Accident",
    iscorrect: true,
  },
  {
    title: "Question 3:",
    answer: "$32,000 USD",
    iscorrect: false,
  },
  {
    title: "Question 3:",
    answer: "1 Bitcoin",
    iscorrect: true,
  },
  {
    title: "Question 3:",
    answer: "1 Gold Bar",
    iscorrect: false,
  },
  {
    title: "Question 4:",
    answer: "Block",
    iscorrect: false,
  },
  {
    title: "Question 4:",
    answer: "Question",
    iscorrect: false,
  },
  {
    title: "Question 4:",
    answer: "Pump",
    iscorrect: false,
  },
  {
    title: "Question 5:",
    answer: "Keep your Bitcoin on an exchange",
    iscorrect: false,
  },
  {
    title: "Question 5:",
    answer: "Once it hits 100k sell it for USD",
    iscorrect: false,
  },
  {
    title: "Question 5:",
    answer: "You never sell your Bitcoin",
    iscorrect: false,
  },
];

// Game Logic Variables (Timer, Index Numbers
var timer = 30;
var currentIndex = 0;

// Actions upon loading page

// hide game button
// show start button
// render high scores
// render first question

// create event listeners for buttons
// Start game btn
// submit answer btn

// start game function

// hide start btn
//show submit btn
// set timer and score values

// end game function
// hide submit btn
// show start timer btn
// alert current score
// capture user initals
// save score and initials to localstorage data
// re-render high scores

// render highscores:
// get current local storage data
// clear out current highscore field
// loop through array of score objects
// render new li for each score obj

// render questions and answers
// update forms and question
