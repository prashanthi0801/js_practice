import fetch from "node-fetch"
let response=await fetch("http://localhost:3000/students",{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify({id:3,name:"sai",marks:89})
}


)
console.log(await response.json())