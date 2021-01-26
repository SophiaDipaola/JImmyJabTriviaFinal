const questions = [
  {
    title: "Who is jimbo?",
    choices: ["#1", "#2", "#3", "#4"],
    correctAnswer: "Cop #2",
  },
  {
    title: "question 2",
    choices: ["#1", "#2", "#3", "#4"],
    correctAnswer: "Cop #2",
  },
  {
    title: "question 3",
    choices: ["#1", "#2", "#3", "#4"],
    correctAnswer: "Cop #2",
  },
  {
    title: "question 4",
    choices: ["#1", "#2", "#3", "#4"],
    correctAnswer: "Cop #2",
  },
  {
    title: "question 5",
    choices: ["#1", "#2", "#3", "#4"],
    correctAnswer: "Cop #2",
  },
];

const checkForCorrectAnswer = (answer, questionId) => {
  const currentItem = questions[questionId];
  const correctAnswer = currentItem.correctAnswer;

  const isCorrect = choices.includes(correctAnswer);
  isCorrect ? handleCorrectAnswer() : handleWrongAnswer();
};

const navigateToQuestion = (questionId) => {
  //questionId = 4

  // {title: 'question 5',  choices: ["#1","#2","#3","#4"], correctAnswer: "Cop #2"}
  const currentItem = questions[questionId];

  document.querySelector("title").innerHTML(currentItem.title);
  document.querySelector("title").innerHTML(currentItem.title);
};

const handleCorrectAnswer = () => {
  // do DOM stuff
  document.querySelector("correct__box").innerHTML(currentItem.title);
};

const handleWrongAnswer = () => {
  // do DOM stuff
  document.querySelector("wrong__box").innerHTML(currentItem.title);
};
