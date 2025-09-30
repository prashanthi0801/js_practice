// using onclick
// function saveFunc(){
//     console.log("Button Clicked!")
// }
// using addEventlistener
const inputBtn=document.getElementById("input-btn")
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    // console.log("Button is being clicked!")
    inputEl.value=""
    renderLeads()
})

let myLeads=[]
const ulEl=document.getElementById("ul-el")
const inputEl=document.getElementById("input-el")
function renderLeads(){
    let listItems=""
for(let i=0;i<myLeads.length;i++){
    // console.log(myLeads[i])
    // listItems+=  "<li><a href='" +  myLeads[i] + "' target='_blank'>" + myLeads[i] +"</a></li>"
    //template string
    listItems+=`<li>
    <a href='${myLeads[i]}' target='_blank'>
        ${myLeads[i]}
        </a>
    </li>`
    // create element
    // set text content
    // append to ul
//     const li=document.createElement("li")
//     li.textContent=myLeads[i]
//     ulEl.append(li)
    // console.log(listItems)
}
ulEl.innerHTML=listItems
}
// local storage
localStorage.setItem("MyLeads","www.google.com")
localStorage.getItem("MyLeads")
localStorage.clear()

 