// fetchPosts.js

// 1. Import node-fetch
// TODO: require("node-fetch")
import fetch from "node-fetch";
// const fetch=require("node-fetch")
// let fs=require("fs")

// 2. Get userId from command-line args
const userId = process.argv[2]; 
if (!userId) {
  console.log("❌ Please provide a userId. Example: node fetchPosts.js 1");
  process.exit(1);
}

// 3. Async function
async function getPosts() {
  try {
    // TODO: Fetch API with userId
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const result=await response.json()
    // TODO: Parse JSON
    console.log("Fetching post details of user with id "+userId)
    for(let i of result){
        console.log("post id:"+i.id)
        console.log("Title: "+i.title)
    }
    // for(i in result){
    //     console.log(i)
    // }
    
    // TODO: Loop & display each post

    // Print Post ID and Title
    
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
}

// 4. Run function
getPosts();
