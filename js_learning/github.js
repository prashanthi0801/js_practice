// Preset input (exam will provide username like this)
import fetch from "node-fetch"
const username = process.argv[2]

// Preset output format (exam will check exactly like this)
// console.log(`Repository Name: linux
// Stars: 160000

// Repository Name: subsurface
// Stars: 3500

// Repository Name: test-repo
// Stars: 1200

// Repository Name: repo4
// Stars: 800

// Repository Name: repo5
// Stars: 500`);
let response= fetch(`https://api.github.com/users/${username}/repos`).then(result=>(result.json())).then(data=>{data.forEach(repo => {console.log(repo.name,repo.stargazers_count)})})
// let result=await response.json()
// console.log(result)
// console.log(result.stargazers_count)
