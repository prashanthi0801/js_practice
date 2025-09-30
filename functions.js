// function expression
let add=function(num1 , num2){
        return num1+num2;
}                                                                                            
let sum=add(1,3)
console.log(sum)
console.log(add)
// arrow functions
let greet=()=>{
    console.log("Arrow functions executed with return value of:");
    return 0
}
console.log(greet())
let add_new=(num1 , num2)=> num1+num2;       // return is also not required  but curly brackets should be ommited                                                                                   
let sum_new=add_new(1,3)
console.log(sum_new)
let addition=(num1,num2)=>((num2<0)? num2*-1:num2)+((num1<0)? num1*-1:num1)

let res=addition(1,-1)
console.log(res)
// rest parameters and spread syntax
// setTimeout takes function , milliseconds and othr parameters , calls the function for each for milliseconds (specified delay)
setTimeout(()=>{console.log("hey")},2000) // after 2 secs it stops
// setInterval takes same parameters as setTimeout 
let count=0;
const intervalId=setInterval(()=> 
{
    console.log("hey its now"+count);
    count++;
    if(count>5){
        clearInterval(intervalId); // after clearInterval it stops
    }
},1000)
// function binding
let name={
    firstName:"Sai",
    lastName:"Prashanthi",
    printFullName: function () {
        console.log(this.firstName+" "+this.lastName)

    }
}
name.printFullName()
let name2={
    firstName:"sai",
    lastName:"ram"
}
name.printFullName.call(name2)
//instead of call we can use aapply onluy passing arguments is different , here as a list in call comma seperated
// bind method --> same as call,just returns a copy of function , can be invoked later