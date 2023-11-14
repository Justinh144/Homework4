//this sets our various variables to 0 for a new quiz
//and will be later used to reset our quiz after it is finished
var questionIndex = 0;
var answerCorrect = 0;
var answerIncorrect = 0;
var finalScore = 0;
var clock;

//these are the questions that the quiz will ask
var quizQuestions = [
  {
    question: "Who invented Javascript?",
    choices: ["Brendan Freiser", "Carsten Eich", "Brendon Eich", "Jackie Daytona"],
    correctAnswer: "Brendon Eich"
  },
  {
  question: "What year was Javascript invented?",
  choices: ["1991", "1984", "1995", "1776"],
  correctAnswer: "1991"
  },
  {
  question: "What does NaN mean?",
  choices: ["Not a Name", "Naughty and Nice", "Ninjas and Normies", "Not a Number"],
  correctAnswer: "Not a Number"
  },
  {
  question: "What kind of beverage is Java?",
  choices: ["Dairy", "Coffee", "Energy drink", "Protien shake"],
  correctAnswer: "Coffee"

  },


  

];
//This line sets up our clock with an initial countdown of 30 seconds and tells the clock to countdown every 1000 miliseconds.
function startQuiz() {
    document.getElementById("clock").innerHTML = "20s";
    clock = setInterval(updateclock, 1000);
    showQuestion();
}

//this line begins the display of quiz questions by taking the id "question" 
//and changing it to the the question text in the quizQuestions variable
function showQuestion() {
    if (questionIndex < quizQuestions.length) {
        var questionData = quizQuestions[questionIndex];
        document.getElementById("question").innerHTML = questionData.question;
        //this line targets and displays the choices text
        var choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = "";

        //this line creates a button around the possible choices
        questionData.choices.forEach((choice,index) => {
          var button = document.createElement("button");
          button.innerHTML = choice;
          button.addEventListener("click", () => checkAnswer(choice));
          choicesContainer.appendChild(button);
        });
      } else {
        endQuiz();
} 
}
//this line takes the inputed question and checks wether it is correct or 
//incorrect and adjusts the score accordingly
function checkAnswer(selectedAnswer) {
  var currentQuestion = quizQuestions[questionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    answerCorrect++;

  } else {
  }  

questionIndex++;
showQuestion();
}
// this function begins when the quiz is over and does several actions
//it sets the score and submission form to a block element
// it replaces the final score id with the total correct answers
// and displays quiz over as a replacement for our countdown clock
function endQuiz() {
  clearInterval(clock);
  document.getElementById("clock").innerHTML = "Quiz Over!";
  document.getElementById("displayScore").style.display = "block";
  document.getElementById("finalScore").innerHTML = answerCorrect;
  document.getElementById("scoreForm").style.display = "block";
}

//this function establishes what happens with our countdown reaches 0
// the first part takes the time integer and subtracts 1 from it
function updateclock() {
  var clockElement = document.getElementById("clock");
  let timeLeft = parseInt(clockElement.innerHTML) - 1;
// when the timer is less than or equal to 0 it triggers the
// aforementions endQuiz function
  if (timeLeft >= 0) {
    clockElement.innerHTML = `${timeLeft}s`;
  } else {
    endQuiz()
}
}
// this is our score submission form. It takes the finalscore ID and sets it to the answerCorrect string
 function submitScore() {
  var userName = document.getElementById("userName").value.toUpperCase();
  finalScore = answerCorrect;
//this takes the score and usuer initials and stores them for a later function
  saveScore(userName, finalScore);
//activates a promt showing the score and user intitials before resetting the quiz to default
  alert(`Score recorded: ${finalScore} with initials ${userName}`);
  restartQuiz();
 }

//takes the user name and score information from earlier and sends it to the local storage
 function saveScore(userName, score) {
//converts the scored JSON string into a javascript object
//if nothing is entered the || [] sends in an empty array
  let scores = JSON.parse(localStorage.getItem('quizScores')) || [];
// sends the username and score to the local storage
  scores.push({ userName, score });
  localStorage.setItem('quizScores', JSON.stringify(scores));
 }
// this resets the quiz to default and hides the score submission form
 function restartQuiz() {
  questionIndex = 0;
  answerCorrect = 0;
  answerIncorrect = 0;
  finalScore = 0;

  document.getElementById("displayScore").style.display = "none";
  document.getElementById("scoreForm").style.display = "none";
 } 

 