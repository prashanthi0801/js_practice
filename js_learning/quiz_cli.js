// 1. Preset questions and answers
const quiz = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "2 + 2 = ?", answer: "4" },
  { question: "What is the color of the sky?", answer: "Blue" }
];


// 2. Setup readline
const readline = require("readline");
const { Readline } = require("readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let index=0
let score = 0
function askQuestion(){
    if(index<quiz.length){
        let i =index+1
        console.log("question "+i+":" +quiz[index].question)
        let timer=setTimeout(()=>{
                  console.log("⏰ Time's up! Correct answer: " + quiz[index].answer);
                  index++
                  askQuestion()
        },5000)
    rl.question("Your Answer: ", (answer)=>{
        if(answer.trim().toLowerCase()===quiz[index].answer.toLowerCase()){
            clearTimeout(timer)
            console.log("Correct answer")
            score++
        }
        else{
            console.log("wrong answer")
            console.log("correct answer is : "+quiz[index].answer)
        }
        askQuestion()
        
        index++

    })
        
       
     


        
    }
    else{
        console.log("Quiz is over")
        console.log("your score is "+score)
        rl.close()
    }
}

askQuestion()

 