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

let index = 0;
let score = 0;

function askQuestion() {
  if (index >= quiz.length) {
    console.log("\nQuiz is over!");
    console.log("Your score is: " + score + "/" + quiz.length);
    rl.close();
    return;
  }

  console.log(`\nQuestion ${index + 1}: ${quiz[index].question}`);

  // Set 5-second timer
  const timer = setTimeout(() => {
    console.log(`⏰ Time's up! Correct answer: ${quiz[index].answer}`);
    index++;
    askQuestion();
  }, 5000);

  rl.question("Your Answer: ", (answer) => {
    clearTimeout(timer); // Stop the timeout if user answers

    if (answer.trim().toLowerCase() === quiz[index].answer.toLowerCase()) {
      console.log("✅ Correct!");
      score++;
    } else {
      console.log("❌ Wrong!");
      console.log("Correct answer is: " + quiz[index].answer);
    }

    index++;
    askQuestion(); // Move to next question
  });
}

askQuestion();
