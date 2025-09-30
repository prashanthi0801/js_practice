// Qs1.  Create  a  const  object  called  “product”  to  store 
// information. (name:,rating:,price:,offer:,) 
// Qs2.  Create  a  const  object  called  “profile”  to  store 
// information on your facebook.
// const product={name:"AirPodsPro",
//     rating:5.0,
//     price:12000,
//     offer:20
// }
// console.log(product)
// Qs1.  Get  users  to  input  a  number  using  a 
// prompt(“Enter  a  number:”).  Check  if  the  number  is  a 
// multiple of 5 or not. 
// Qs2.  Write  a  code  which  can  give  grades  to  students 
// according to their scores: 80-100, A 
// 70-89, B 
// 60-69, C 
// 50-59, D 
// 0-49, F
// let num=prompt("Enter a number:")
// if(num%5===0){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// Qs1. Print all even numbers from 0 to 100. 
// Qs2.Create  a  game  where  you  start  with  any  random 
// game  number.  Ask  the  user  to  keep  guessing  the  game 
// number until the user enters the correct value.
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
    
// }
// const num=27
// let guess=prompt("Enter your guess:")
// if(guess==num){
//     console.log("yes!")
// }
// else{
//     while(num!=guess){
//     console.log("no!")
//     guess=prompt("Enter your guess:")

//     }
   

// }
// Qs1.  Prompt  the  user  to  enter  their  full  name.  Generate 
// a  username  for  them  based  on  the  input.  Start 
// username  with  @,  followed  by  their  full  name  and 
// ending with the full name length. 
// eg:  user  name  =  “ANUSHA  MAHANTI”  ,  username 
// should be “@anushamahanti09”
// let name=prompt("Enter your name")
// name=name.replace(" ","")
// let n=name.length
// let username='@'+ name.toLowerCase().trim() + n
// console.log(username)
//  Rewrite the function using '?' or '||'
//  importance: 4
//  The following function returns 
// true if the parameter 
// age is greater than 
// 18.
//  Otherwise it asks for a confirmation and returns its result.
//  function checkAge(age) {
//  if (age > 18) {
//  return true;
//  } else {
//  return confirm('Did parents allow you?');
//  }
//  }
//  Rewrite it, to perform the same, but without 
// if, in a single line.
//  Make two variants of 
// checkAge:
//  1. Using a question mark operator 
// 2. Using OR 
// ||
// function checkAge(age) {
//     let a= age>18? true:'Did your parents allow?'
//     return a
// }
// checkAge(19)
//  Function min(a, b)
//  importance: 1
//  Write a function 
// min(a,b) which returns the least of two numbers 
// For instance:
//  min(2, 5) == 2
//  min(3, -1) == -1
//  min(1, 1) == 1
//  a and b.
// function min(a,b){
//     if (a<b){
//         return a
//     }
//     else{
//         return b
//     }
// }
// min(2,3)
//  Function pow(x,n)
//  importance: 4
//  Write a function 
// pow(x,n) that returns 
// result.
//  pow(3, 2) = 3 * 3 = 9
//  pow(3, 3) = 3 * 3 * 3 = 27
//  pow(1, 100) = 1 * 1 * ...* 1 = 1
//  x in power n. Or, in other words, multiplies 
// x by itself 
// n times and returns the
//  Create a web-page that prompts for 
// x and n, and then shows the result of 
// pow(x,n)
// base=prompt("enter base")
// exponent=prompt("enter exponent")
// function power(base,exponent){
//     let num=1
//     for(let i=1;i<=exponent;i++){
//         num=num*base
//     }
//     return num

// }
// power(base,exponent)
// function sayHi() {
//  alert( "Hello" );
//  }
//  alert( sayHi );
// function hello(callback=goodbye){
//     document.getElementById("greeting").textContent="hello"
//     callback()
// }
// function wait(){
//     document.getElementById("greeting").textContent+=" wait"
// }
// function leave(){
//     console.log("leave")
// }
// function goodbye(){
//     console.log("goodbye")
// }
// hello(wait)
// //  Working with variables
// //  importance: 2
// //  1. Declare two variables: 
// // admin and 
// // name.
// //  2. Assign the value 
// // "John" to 
// // name.
// //  3. Copy the value from 
// // name to 
// // admin.
// //  4. Show the value of 
// // admin using 
// // alert (must output “John”)
// let admin
// let name="john"
// admin=name
// alert(admin)
//  Giving the right name
//  importance: 3
//  1. Create a variable with the name of our planet. How would you name such a variable?
//  2. Create a variable to store the name of a current visitor to a website. How would you name that variable
// let planet="Earth"
// let currentVisitor
//  let name = "Ilya"
//  alert( `hello ${1}` )
//  alert( `hello ${"name"}` )
//  alert( `hello ${name}` )
//  "" + 1 + 0
//  "" - 1 + 0
//  true + false
//  6 / "3"
//  "2" * "3"
//  4 + 5 + "px"
//  "$" + 4 + 5
//  "4" - 2
//  "4px" - 2
//  "  -9  " + 5
//  "  -9  " - 5
//  null + 1
//  undefined + 1
//  " \t \n" - 2
// let name=prompt(" What is the official name of JavaScript?");
// if (name==="ECMAScript"){
//     alert("Right!");
// }
// else{
//     alert( “You don’t know? ECMAScript!”)
// }
// let n=10
// for(let i=1;i<=n;i++){
    
//         if (i==2){
//             console.log(i)
//         }
//         else if(i==1){
//             console.log(`${i} is neither prime nor composite`)
//         }
//         else{
//             let count=0
//             for(let j=1;j<=i;j++){
//                 if (i%j==0){
//                     count+=1
//                 }
//             }
//             if (count==2){
//                 console.log(i)
//             }

//         }
    
// }
/* Write the code, one line for each action:
 1. Create an empty object 
2. Add the property 
user.
 name with the value 
3. Add the property 
John.
 surname with the value 
Smith.
 4. Change the value of the 
name to 
Pete.
 5. Remove the property 
name from the object. */
// let user={
//     name:"jhon",
//     surname:"smith"

// }
// user.name="Pete";
// delete user.surname;
// console.log(user)

//  let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130,
//  ti:"age"
//  }
//  let sum=0;
//  for (let key in salaries){
//     if (typeof salaries[key]==="number"){
//         salaries[key]*=2
//     }
//   }
//   console.log(salaries)
function A(name) { 
    this.name=name;
    this.sayHi=function (name){
        console.log("Hey! "+this.name+" Hi");
    };

 }
 function B(name) { 
    this.name=name;
    this.sayBye=function (name){
        console.log("Hey! "+this.name+" bye");
    };

  }
 let a = new A("john");
 let b = new B("john");
 console.log( a == b );