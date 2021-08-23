const startBtn = document.querySelector("#startBtn")
const questionBox = document.querySelector("#questionBox")
const question = document.querySelector("#question");
var userAnswer = document.getElementById("userAnswer").value
const submit = document.querySelector("#submit")

let answer;

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

function getRandom() {
    let valueOne = Math.floor(Math.random() * 13)
    let valueTwo = Math.floor(Math.random() * 13)
    answer = valueOne*valueTwo
    console.log(answer)
    question.textContent = `${valueOne} x ${valueTwo} = ?`
}

submit.addEventListener("click", function () {
    console.log("clicked")
    console.log(userAnswer)
});

