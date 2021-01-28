
// GAME JS
//variable list
 const rightAnswer = document.querySelectorAll('.correct-answer')
 const wrongAnswer = document.querySelectorAll('.incorrect-answer')
let score = 0
const message = document.querySelector('.score-message')
const scoreP = document.querySelector('.score')
const answerButtons = document.getElementsByClassName('.answerButton')
const results =document.getElementById('results')
const game = document.getElementById('game')

// const firstQ = document.querySelector('.first')
// const secondQ = document.querySelector('.second')
// const thirdQ = document.querySelector('.third')
// const fourthQ =document.querySelector('.fourth')
// const fifthQ = document.querySelector('.fifth')
const scoreDiv = document.querySelector('.score-display')

// disable feature
let Q1s = document.querySelectorAll('.Q1')
console.log(Q1s)
// for(oneQ of Q1s){
//     oneQ.disabled = true
//     console.log(oneQ)

 let disableButtons=(Q)=>{
     for(questions of Q){
     Q.disabled = true
     }
 }      

let Q2s = document.querySelectorAll('.Q2')
console.log(Q2s)
// for(twoQ of Q2s){
//     twoQ.disabled = true
//     console.log(twoQ)


let Q3s = document.querySelectorAll('.Q3')
console.log(Q3s)
// for(threeQ of Q3s){
//     threeQ.disabled = true
//     console.log(threeQ)
// }

let Q4s = document.querySelectorAll('.Q4')
console.log(Q4s)
// for(fourQ of Q4s){
//     fourQ.disabled = true
//     console.log(fourQ)
// }

let Q5s = document.querySelectorAll('.Q5')
console.log(Q5s)
// for(fiveQ of Q5s){
//     fiveQ.disabled = true
//     console.log(fiveQ)
// }


//adding score after answer is clicked
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

    // get the when a click happens, search for Q""", it will disable right buttons. when click happens, search for variables.
for(i = 0; answerButtons.length; i++){
    console.log(answerButtons[i])
    answerButtons[i].addEventListener('click', function disable(e){
        console.log('disabling')
        let questions = [Q1s,Q2s,Q3s,Q4s,Q5s]
            for(let j of questions){
                if(questions[j].contains(e)){
                    disableButtons(questions[j])
                    
                }
            }
    })
}
//display none of block for page shift buttons
function goGamePage(){
    const welcome = document.getElementsById('welcome')
    if(welcome.style.display === "none"){
        welcome.style.display = "block";
    }else{ 
        welcome.style.display = "none";
    }
}
function goResultsPage(){
    const results =document.getElementsById('results');
    if(results.style.display === "none"){
        results.style.display = "block";
    }else{ 
        results.style.display = "none";
    }
}
function homePage(){
    let goHome = document.getElementsById('go-home-button');
    if(goHome.style.display === "none"){
        goHome.style.display = "block";
    }else{ 
        goHome.style.display = "none";
    }
}
