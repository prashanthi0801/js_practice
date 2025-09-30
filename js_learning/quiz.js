// quiz.js (everything can be in one file if you prefer)



// 3. Initialize state variables
let score = 0;
let index = 0;

// 4. Function to ask a question
function askQuestion() {
  // print question

  let q=quiz[index]
  console.log("Question " + (index+1) + ": " + q.question)
//   printQuestion(quiz)
  // start timer
  setTimeout(()=>{
    console.log("⏰ Time's up!")
    index++;
    askQuestion(); 
    
    
  },10000)
  
  // wait for input
  if(readline.toLowerCase()===q.answer.toLowerCase()){
    console.log("Question "+index+1+"correct")
    score++

  }
  else if(readline.toLowerCase()!=q.answer.toLowerCase()){
    console.log("Question "+index+1+"wrong") 
  }
  else{
        console.log("Question "+index+1+"timeout")
  }
  // check if correct / wrong / timeout
  // update score
  // move to next question or end quiz
  if(index==quiz.length){
    
  }
}

// 5. Start quiz
askQuestion();
console.log(score)
