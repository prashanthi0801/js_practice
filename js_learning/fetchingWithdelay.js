import fetch from "node-fetch"
const userId = process.argv[2]; 
if (!userId) {
  console.log("❌ Please provide a userId. Example: node fetchPosts.js 1");
  process.exit(1);
}
async function displayPosts(){
    let response=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    let result=await response.json()
    return result
    

}
async function printPosts() {
    let res=await displayPosts() // since displayPosts is an aasync function returns a promise to unwrap a promise we need await
// console.log(e)
for(let i=0;i<res.length;i++){ // time should be looped for each element of the array
    setTimeout(()=>{
        console.log(res[i])
    },i*3000)
}
    
}
printPosts()
//----- using promise chaining
// import fetch from "node-fetch";

// const userId = process.argv[2];
// if (!userId) {
//   console.log("❌ Please provide a userId. Example: node fetchPosts.js 1");
//   process.exit(1);
// }

// // fetch posts and return a promise
// function displayPosts() {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then(response => response.json());
// }

// // print posts one by one with setTimeout
// displayPosts()
//   .then(posts => {
//     for (let i = 0; i < posts.length; i++) {
//       setTimeout(() => {
//         console.log(`🆔 ${posts[i].id} | ${posts[i].title}`);
//       }, i * 3000); // stagger 3s
//     }
//   })
//   .catch(err => {
//     console.error("Error fetching posts:", err);
//   });

