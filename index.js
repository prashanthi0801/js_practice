// //document.getElementById("count-el").innerText=5
// let count=19
// count=count+1
// console.log(count)
function increment(){
    console.log("The button is clicked")
}
let count=0
function increment(){
    count+=1
    document.getElementById("count-el").innerText=count
    // console.log("count")
}
function save(){
    let msg=count+" - "
    document.getElementById("message").textContent+=msg
    count=0
    document.getElementById("count-el").textContent=count

}
let userName="prashanthi"
let greeting="Hi there! "
function greet(){
    console.log(greeting+userName)
}
greet()
console.log(userName)
let name=42
// let greeting="Hi, my name is "
console.log(greeting+name+"!")
// function count(){
//     n=5
//     console.log(n)
//     n=n-1
// } 
// count()
// onclick takes function as string and let is used to initialize variables and doc and console are like stdio.h in c
// dom--> document(HTML doc we work on) object(HTML file/doc is made into obj by js) model(representation/copy real is html and  model is js) basically dom is nothing but using js to modify  web pages
