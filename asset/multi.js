const startBtn = document.querySelector("#startBtn");
const questionBox = document.querySelector("#questionBox");
const question = document.querySelector("#question");
const submit = document.querySelector("#submit");
const end = document.getElementById("end");

let answer;
let correct = 0;
let incorrect = 0;

//  LIST OF WHAT I NEED TO BUILD TO MAKE THIS WORK
//  - hide question box before the start button is clicked DONE
//  - hide start Button when the quiz start DONE
//  - random generates two numbers and displays them as a question DONE
//  - takes user input and checks it against the correct answer.
//  - add to the correct and incorrect score depending on the answer 
//  - tells user the correct answer if wrong 
//  - allows a user to continue to another question or quit.


// Hides and display elements when a user clicks start wha
startBtn.addEventListener("click", function () {
    console.log("a button was clicked")
    $(questionBox).removeClass("notVisiable");
    startBtn.classList.add("notVisiable")
    getRandom()
});

// Gets random numbers and checks value
function getRandom() {
    let valueOne = Math.floor(Math.random() * 13)
    let valueTwo = Math.floor(Math.random() * 13)
    answer = valueOne*valueTwo
    question.textContent = `${valueOne} x ${valueTwo} = ?`
}

// Listens for user answer
submit.addEventListener("click", function () {
    var userResponse = document.getElementById("userAnswer")
    const userAnswer = parseInt(userResponse.value)
    checkAnswer(userAnswer)
});

// listens for the user to end
end.addEventListener("click", function () {
    console.log("ending")
    $(startBtn).removeClass("notVisiable");
    questionBox.classList.add("notVisiable")
});

// checks user answer against the correct answer
function checkAnswer(userAnswer) {
 console.log(userAnswer)
 console.log(answer)
 if (userAnswer === answer) {
     console.log("correct")
     correct = correct + 1;
     console.log(correct);
     display()
 } else {
     console.log("incorrect")
     incorrect = incorrect + 1
     console.log(incorrect)
     display()
 }
}

// change the displayed score and calls to get new numbers 
function display() {
    let score = document.getElementById("score");
    score.textContent = `Correct ${correct}  Incorrect ${incorrect}`
    document.getElementById("userAnswer").value = ''
    getRandom();
}

