const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let askForName = "What is your name?";
let candidateName= input.question(askForName);

console.log("Hello "+candidateName+", welcome to our test. Let's get started.");

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
const question = "Who was the first American woman in space?";
const correctAnswer = "Sally Ride";
let candidateAnswer = input.question(question);

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer === correctAnswer) {
  console.log("Question one is correct.")
}else {
  console.log("Question one is incorrect.")
}


/*
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
*/
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  //questions: questions,
  //correctAnswers: correctAnswers,
  //candidateAnswers: candidateAnswers,
  //gradeQuiz: gradeQuiz,
  //runProgram: runProgram
};