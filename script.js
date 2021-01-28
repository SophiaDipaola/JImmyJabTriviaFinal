// GAME JS
//variable list
 const rightAnswer = document.querySelectorAll('.correct-answer')
 const wrongAnswer = document.querySelectorAll('.incorrect-answer')
let score = 0
const message = document.querySelector('.score-message')
const scoreP = document.querySelector('.score')
// const firstQ = document.querySelector('.first')
// const secondQ = document.querySelector('.second')
// const thirdQ = document.querySelector('.third')
// const fourthQ =document.querySelector('.fourth')
// const fifthQ = document.querySelector('.fifth')
const scoreDiv = document.querySelector('.score-display')

// disable feature
// let Q1s = document.querySelectorAll('.Q1')
// console.log(Q1s)
// for(oneQ of Q1s){
//     oneQ.disabled = true
//     console.log(oneQ)
// }
       

// let Q2s = document.querySelectorAll('.Q2')
// console.log(Q2s)
// for(twoQ of Q2s){
//     twoQ.disabled = true
//     console.log(twoQ)
// }

// let Q3s = document.querySelectorAll('.Q3')
// console.log(Q3s)
// for(threeQ of Q3s){
//     threeQ.disabled = true
//     console.log(threeQ)
// }

// let Q4s = document.querySelectorAll('.Q4')
// console.log(Q4s)
// for(fourQ of Q4s){
//     fourQ.disabled = true
//     console.log(fourQ)
// }

// let Q5s = document.querySelectorAll('.Q5')
// console.log(Q5s)
// for(fiveQ of Q5s){
//     fiveQ.disabled = true
//     console.log(fiveQ)
// }
// console.log(rightAnswer)
// rightAnswer[0].addEventListener('click', function correctScore(){
//     score++
//     scoreP.innerText = score
// message.innerText = "Cool-Cool-Cool-No Doubt-No Doubt-No Doubt!"
// })
for(i=0;i<rightAnswer.length;i++){
rightAnswer[i].addEventListener('click', function correctScore(){
    score++
    scoreP.innerText = score
message.innerText = "Cool-Cool-Cool-No Doubt-No Doubt-No Doubt!"
})

}
for(i=0;i<wrongAnswer.length;i++){
    wrongAnswer[i].addEventListener('click', function incorrectScore(){
        scoreP.innerText = score
    message.innerText = "Nah"
    })
    }