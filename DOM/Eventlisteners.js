// adding event listeners ("click", function )
const buttonEl=document.querySelector(".btn-2");
function alertBtn(){
    alert("Button 2 is being clicked");
}
buttonEl.addEventListener("click",alertBtn);
// mouse over
const newBackgroundColor=document.querySelector(".box-3")
function changeBgcolor(){
    newBackgroundColor.style.backgroundColor="#1A4B65";
};
newBackgroundColor.addEventListener("mouseover",changeBgcolor);
function removeBgcolor(){
    newBackgroundColor.style.backgroundColor="";
};
newBackgroundColor.addEventListener("mouseout",removeBgcolor);
const buttonEl1=document.querySelector(".btn-1")
buttonEl1.addEventListener("submit",message);
function message(){
    alert("succesfully submitted!")
}
document.ge