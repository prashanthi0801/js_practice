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
for(let i=0;i<quiz.length;i++){
    setTimeout(()=>{
        let id=i+1
        console.log("question : "+id+" "+quiz[i].question)
    },i*5000)
}