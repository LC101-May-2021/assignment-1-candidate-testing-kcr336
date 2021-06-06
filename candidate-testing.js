
const input = require('readline-sync');

let candidateName="";
const question = "Who was the first American woman in space?";
const correctAnswer = "Sally Ride";
let candidateAnswer="";
const questions = [
  "Who was the first American woman in space?", 
  "True or false: 5 kilometer == 5000 meters?",
  "(5 + 3)/2 * 10 = ?", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
   "What is the minimum crew size for the ISS?"
   ];
let correctAnswers = [
  "Sally Ride", 
  "true", 	
  "40", 
  "Trajectory", 
  "3"
  ];
let grade= [];
let candidateAnswers = [];


function askForName() {

let askForName = "Candidate Name: ";
candidateName= input.question(askForName);
//console.log(`Hello ${candidateName}, welcome to our test. Let's get started.`);
return candidateName;
}


function askQuestion() {
for (i=0; i< 5; i++) {
 let answer = String(input.question(questions[i])); 
  candidateAnswers.push(answer);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`The Correct Answer: ${correctAnswers[i]}`); 

}

}

function gradeQuiz() {
let x =0;
 for (i=0; i< 5; i++){
   if (String(candidateAnswers[i].toLowerCase())===(String(correctAnswers[i].toLowerCase()))){
     x++;
   }
 }
let percentage = (x / 5) * 100;

console.log(">>> Overall grade: "+percentage+"% ("+x+" of 5 responses correct) <<<");
if (percentage === 80 || percentage ===100){
  console.log(">>> Status: PASSED <<<");
} else {
  console.log(">>> Status: FAILED <<<");
}

 return grade;
}


function runProgram(){
  askForName();
  askQuestion();
  gradeQuiz(this.candidateANswers)
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}