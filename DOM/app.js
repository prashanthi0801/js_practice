console.log("hey");
//get element by id
// const Title=document.getElementById("main-heading");
// console.log(Title)
// get element by class name
// const Listitems= document.getElementByClassName('list-items');
// console.log(Listitems)
// get element by tag name
// const list_items=document.getElementByTagName("li");
// query selector
// const divEl=document.querySelector("div");
// // DOM manipulation , styling
// const  Title =document.querySelector("main-heading");
// // Title.style.color="red";
// // creating elements
// const ulEl= document.getElementById('hey');
// const liEl= document.createElement("li");
// // adding elements
// ulEl.append(liEl)
// liEl.innerText="dps";
// liEl.setAttribute("id","main-heading")
// liEl.removeAttribute("id");
// liEl.classList.add("list-items")
// liEl.classList.remove("list-items")
// console.log(liEl.classList.contains("list-items"))
// liEl.remove() 
ulEl=document.querySelector("ul");
console.log(ulEl.parentNode.parentNode)
console.log(ulEl.parentElement.parentElement)
console.log(ulEl.children)