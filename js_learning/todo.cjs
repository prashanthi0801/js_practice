const { error } = require("console")

let fs=require("fs/promises")
let data=process.argv
async function writeToFile(p){
       await fs.appendFile("todo.json",p+"\n")
       .then(()=>console.log("yes its working"))
       .catch((error)=>console.log(error))

}
async function getCount(){
       return fs.readFile("todo.json","utf-8")
       .then((content)=>  {if(content==="") return 0 
       return content.trim().split("\n").length})
       .catch((error)=>0)

}

async function processData(data){
       if(data[2]=="add"){
              let count=await getCount()
              // console.log(count)

              
              task=data.slice(3)
              return JSON.stringify({"id":count+1,"task":task})
              
       }
       // if(data[3])
}
processData(data).then((task)=>{
       if(task) writeToFile(task)
})