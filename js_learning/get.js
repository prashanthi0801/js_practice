import fetch from "node-fetch"
let result=await fetch("http://localhost:3000/students")
let response= await result.json()
console.log(response)