// wordFrequency.js
// CLI Program: Count word frequency from a text file

const fs = require("fs").promises;

async function wordFrequencyCounter() {
  try {
    // Step 1: Read file content (input.txt is already given)
    const data = await fs.readFile("input.txt", "utf-8");

    // Step 2: Clean text using RegExp (remove punctuation, lowercase)
    // TODO: process `data` → lowercase, split into words
    let w=data.trim().split(" ") 
    let words=[]
    for( i of w){
        // i.
        
        
        words.push(i.replace(/[!@#$%^&*,;\.?]/g ,"").toLowerCase())

        
    }

    // Step 3: Count frequencies using a Map/Object
    // TODO: loop through words and count
    let map={}
    for(i of words){
        if(i in map){
            map[i]+=1
        }
        else{
            map[i]=1
        }
    }

    // Step 4: Sort by frequency (descending) & take top 5
    // TODO: sort and slice top 5
    let freq=[]
    for(i in map){
        row=[i,map[i]]
        freq.push(row)

    }
    freq.sort((a,b)=>b[1]-a[1])




    // Step 5: Print output in format "word: count"
    // TODO: log results
    for( i of freq){
        console.log(`${i[0]}:${i[1]}`)
    }


  } catch (err) {
    console.error("Error:", err);
  }
}

// Run program
wordFrequencyCounter();
