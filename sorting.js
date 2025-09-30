fruits=["🍎",'🍎',"🍊","🍊","🍊"]
let appleEl=document.getElementById("apple-shelf")
let orangeEl=document.getElementById("orange-shelf")
function sortfruit(){
    for(let i=0; i<fruits.length;i++){
    if (fruits[i]==="🍎"){
        appleEl.textContent+="🍎"
    }
    else if (fruits[i]==="🍊"){
        orangeEl.textContent+="🍊"
    }
}

}
sortfruit()
