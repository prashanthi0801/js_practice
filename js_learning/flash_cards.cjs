// flashquiz.js

// 1️⃣ Quiz Questions
const quiz = [
  { question: "Capital of France?", answer: "Paris" },
  { question: "5 + 7 ?", answer: "12" },
  { question: "Sky color?", answer: "Blue" }
];

// 2️⃣ Setup readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3️⃣ Store results
let results = {
  correct: 0,
  wrong: 0,
  timeout: 0
};

// 4️⃣ Function to ask a single question
function askQuestion(i) {
  let answered = false;

  // Ask question
  rl.question(`Question ${i + 1}: ${quiz[i].question} (5s to answer)\nYour Answer: `, (userAns) => {
    answered = true; // user answered
    if (userAns.trim().toLowerCase() === quiz[i].answer.toLowerCase()) {
      console.log("✅ Correct!");
      results.correct++;
    } else {
      console.log(`❌ Wrong! Correct answer: ${quiz[i].answer}`);
      results.wrong++;
    }
    // If last question, finish quiz
    if (i === quiz.length - 1) finishQuiz();
  });

  // Timeout handler
  setTimeout(() => {
    if (!answered) {
      console.log(`⏰ Time’s up! Correct answer: ${quiz[i].answer}`);
      results.timeout++;
      // If last question, finish quiz
      if (i === quiz.length - 1) finishQuiz();
    }
  }, 5000); // 5 seconds to answer
}

// 5️⃣ Ask all questions one by one with 6-second gap
for (let i = 0; i < quiz.length; i++) {
  setTimeout(() => {
    askQuestion(i);
  }, i * 6000); // 6s gap to avoid overlap
}

// 6️⃣ Finish quiz and save results
const fs = require("fs/promises");

async function finishQuiz() {
  console.log("\n--- Results ---");
  console.log(`Score: ${results.correct}/${quiz.length}`);
  console.log(`Wrong: ${results.wrong}`);
  console.log(`Timeout: ${results.timeout}`);

  await fs.writeFile("results.json", JSON.stringify(results, null, 2));
  console.log("Saved to results.json ✅");

  rl.close(); // close CLI
}
