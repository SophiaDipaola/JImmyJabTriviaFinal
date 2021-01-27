// GAME JS
//variable list
// const rightAnswer = document.querySelectorAll('.correct-answer')
// const wrongAnswer = document.querySelectorAll('.incorrect-answer')
// let score = 0
// const next = document.querySelector('.score')
// const firstQ = document.querySelector('.first')
// const secondQ = document.querySelector('.second')
// const thirdQ = document.querySelector('.third')
// const fourthQ =document.querySelector('.fourth')
// const fifthQ = document.querySelector('.fifth')
// const next = document.getElementById('next-question')

let Q1s = document.querySelectorAll('.Q1')
console.log(Q1s)
for(oneQ of Q1s){
    oneQ.disabled = true
    console.log(oneQ)
}
       

let Q2s = document.querySelectorAll('.Q2')
console.log(Q2s)
for(twoQ of Q2s){
    twoQ.disabled = true
    console.log(twoQ)
}

let Q3s = document.querySelectorAll('.Q3')
console.log(Q3s)
for(threeQ of Q3s){
    threeQ.disabled = true
    console.log(threeQ)
}

let Q4s = document.querySelectorAll('.Q4')
console.log(Q4s)
for(fourQ of Q4s){
    fourQ.disabled = true
    fourconsole.log(Q)
}

let Q5s = document.querySelectorAll('.Q5')
console.log(Q5s)
for(fiveQ of Q5s){
    fiveQ.disabled = true
    console.log(fiveQ)
}





// const questions = [
//   {
//     title: "Who is jimbo?",
//     choices: ["#1", "#2", "#3", "#4"],
//     correctAnswer: "Cop #2",
//   },
//   {
//     title: "question 2",
//     choices: ["#1", "#2", "#3", "#4"],
//     correctAnswer: "Cop #2",
//   },
//   {
//     title: "question 3",
//     choices: ["#1", "#2", "#3", "#4"],
//     correctAnswer: "Cop #2",
//   },
//   {
//     title: "question 4",
//     choices: ["#1", "#2", "#3", "#4"],
//     correctAnswer: "Cop #2",
//   },
//   {
//     title: "question 5",
//     choices: ["#1", "#2", "#3", "#4"],
//     correctAnswer: "Cop #2",
//   },
// ];

// const checkForCorrectAnswer = (answer, questionId) => {
//   const currentItem = questions[questionId];
//   const correctAnswer = currentItem.correctAnswer;

//   const isCorrect = choices.includes(correctAnswer);
//   isCorrect ? handleCorrectAnswer() : handleWrongAnswer();
// };

// const navigateToQuestion = (questionId) => {
//   //questionId = 4

//   // {title: 'question 5',  choices: ["#1","#2","#3","#4"], correctAnswer: "Cop #2"}
//   const currentItem = questions[questionId];

//   document.querySelector("title").innerHTML(currentItem.title);
//   document.querySelector("title").innerHTML(currentItem.title);
// };

// const handleCorrectAnswer = () => {
//   // do DOM stuff
//   document.querySelector("correct__box").innerHTML(currentItem.title);
// };

// const handleWrongAnswer = () => {
//   // do DOM stuff
//   document.querySelector("wrong__box").innerHTML(currentItem.title);
// };
