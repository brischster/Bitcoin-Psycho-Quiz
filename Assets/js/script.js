var questionContent = $("#questionText");
var timerEl = $("#game-timer");
var startBtn = $("#start-btn");
var submitBtn = $("#submit-btn");
var answerOne = $("#answer-1");
var answerTwo = $("#answer-2");
var answerThree = $("#answer-3");
var listOfScores = $("#highscores");
var allAnswers = $("[name='answers']");

var questionsArray = [
  {
    question: "A true Bitcoin psycho has what type of hands?",
    answers: {
      a: "Paper",
      b: "Diamond",
      c: "Soft",
    },

    correctAnswer: "b",
  },
  {
    question: "What is the best way to lose your Bitcoin holdings?",
    answers: {
      a: "Staking",
      b: "Confiscated by the Canadian Govt.",
      c: "Boating Accident",
    },
    correctAnswer: "c",
  },
  {
    question: "How much is 1 Bitcoin worth?",
    answers: {
      a: "$32,000",
      b: "1 Bitcoin",
      c: "1 Gold Bar",
    },
    correctAnswer: "b",
  },
  {
    question: "Tick. Tock. Next. ____?",
    answers: {
      a: "Block",
      b: "Question",
      c: "Pump",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the first rule of Bitcoin?",
    answers: {
      a: "Keep your Bitcoin on an exchange",
      b: "Once it hits 100k sell it for USD",
      c: "Just Hodl",
    },
    correctAnswer: "c",
  },
];

// console.log(questionsArray[0].answers.a);

// Game Logic Variables (Timer, Index Numbers
var timer = 30;
var currentIndex = 0;
var isGameOver = false;
var gameTimeLimit;

init();

// Actions upon loading page
function init(params) {
  // hide game button
  submitBtn.hide();
  // show start button
  // render high scores
  createScoreboard();
  // render first question
  createQuestion();
}
// create event listeners for buttons
startBtn.on("click", startGame);
// Start game btn
// submit answer btn
submitBtn.on("click", function () {
  // console.log(allAnswers);
  // console.log(allAnswers.filter(":checked")[0]?.value);
  var selectedAnswer = allAnswers.filter(":checked")[0];
  // get value of the check radio button
  // check if the value is correct or matches correct answer
  if (selectedAnswer?.value === questionsArray[currentIndex].correctAnswer) {
    score++;
  } else {
    timer -= 5;
  }

  if (currentIndex < questionsArray.length - 1) {
    currentIndex++;
    createQuestion();
    selectedAnswer.checked = false;
  } else {
    endGame();
  }
});

// start game function
function startGame() {
  startBtn.hide();
  // hide start btn
  //show submit btn
  submitBtn.show();
  // set timer and score values
  timer = 30;
  score = 0;

  gameTimeLimit = setInterval(() => {
    if (timer === 0 && !isGameOver) {
      endGame();
    }
    timerEl.text(`Remaining Time: ${timer}`);
    timer--;
  }, 1000);
}

// end game function
function endGame() {
  clearInterval(gameTimeLimit);
  isGameOver = true;
  // hide submit btn
  submitBtn.hide();
  // show start timer btn
  startBtn.show();
  // alert current score
  // capture user initals
  var initials = prompt(`Your score: ${score}
  Please share your initals.`);
  // save score and initials to localstorage data
  var currentScore = JSON.parse(localStorage.getItem("psychoScore")) || [];
  var playerObj = {
    initials,
    score,
  };
  // re-render high scores
  currentScore.push(playerObj);
  localStorage.setItem("psychoScore", JSON.stringify(currentScore));
  createScoreboard();
}

// render highscores:
function createScoreboard() {
  var currentScore = JSON.parse(localStorage.getItem("psychoScore")) || [];

  listOfScores.empty();
  //   if (listOfScores.length === 0) {
  //     return listOfScores.text("No One has Played Yet!");
  //   }
  for (var i = 0; i < currentScore.length; i++) {
    var scoreObj = currentScore[i];
    var newScore = $("<li>", {
      class: "list-group-item",
    });
    newScore.text(scoreObj.initials + "----" + scoreObj.score);

    listOfScores.append(newScore);
  }
}
// get current local storage data
// clear out current highscore field
// loop through array of score objects
// render new li for each score obj

// render questions and answers
function createQuestion() {
  questionContent.text(questionsArray[currentIndex].question);
  answerOne.text(questionsArray[currentIndex].answers.a);
  answerTwo.text(questionsArray[currentIndex].answers.b);
  answerThree.text(questionsArray[currentIndex].answers.c);
}
// update forms and question
