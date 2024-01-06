Hello, This is my submission for the module 4 challenge:

It is a multiple choice quiz about javascript that takes the users final score and submission and records them into the local storage.

It begins on line 38 with the quiz set to default and a 'start quiz' button. When it is clicked it begins the appropriatly named function. The first thing it does is begins a timer set for 20 seconds and updates every 1000 miliseconds (1 second). It then begins the showQuestions function which takes the question id and replaces it with the first question of the quiz. The QuestionIndex variable is set up so that later once a choice is made it will proceed to the next question.There is also a button variable that creates a border around the possible choices for a better visual look.

Line 67 is a function that checks the inputed answer against the correct answer. If the answer is correct it will add a point to the answerCorrect string and then proceed to the next question.

Line 82 begins the endQuiz function, it does not actually end the quiz at this point but will be triggered later. The first thing it does is remove the clock time integer and then does various actions. First it displays the text Quiz Over!, then it sets the div that will show the final score as a block element before showing the actual score which is tied to the answerCorrect string. The last line sets the score submission form to also be a block element.

Line 92 pulls the current clock time and subtracts 1 integer from it. When this countdown is less than or equal to 0 it runs the aforementiond endQuiz function.

On line 105 we have our submitScore function. First it creates a userName variable that will be used in a prompt later. It then takes the finalscore ID and sets it to the answerCorrect string. Line 108 stores the user score  and name to later be pushed into local storage. It then shows a prompt confirming that the score and initials were recorded and triggers the quiz to set to default.

Line 115 does the actual saving of the information to the local storage. It uses JSON to convert the information into an easy to read string. Line 120 sets the score and name as an argument and 121 tells the local storage to log that information.

Lastly our restartQuiz function resets the quiz to its default for the next user and then lines 130 and 131 hide the submission form.

I know the quiz is not very visually appealing but as styling was not really set as a parameter for completion I elected to go with a simple display so that I could have more time to review the modules this weekend. Thank you for taking the time to review my project and supply feedback.

Justin Hodges

![MultiChoice](https://github.com/Justinh144/Homework4/assets/146400241/48f66100-cdc7-4d14-a490-6e9baf8d90e6)

https://justinh144.github.io/JavaQuiz/
