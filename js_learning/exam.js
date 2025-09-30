const quiz = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "2 + 2 = ?", answer: "4" },
  { question: "What is the color of the sky?", answer: "Blue" }
];
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let score = 0;
// let index = 0;
function askQuestion() {
  if (index >= quiz.length) {
    console.log(`Quiz over! Your score: ${score}/${quiz.length}`);
    rl.close();
    return;
  }

  const current = quiz[index];
  console.log(`Question ${index + 1}: ${current.question}`);
  for(let i=0;i<)
  // TODO: Start a 10-second timer
  // TODO: Wait for user input using rl.question
  // TODO: Compare answer and update score
  // TODO: Clear timer if answered in time
  // TODO: Move to next question (index++)
}

