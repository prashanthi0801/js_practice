// let secondcard=getRandomCard()

// let firstcard=getRandomCard()
// let cards=[firstcard,secondcard] // array ,ordered
let player={
    name: "prashanthi",
    chips: 143
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $" + player.chips
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector(".sum-el") //class selector
let cardsEl=document.getElementById("cards-el")
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }
    
}
function startGame(){
    let secondcard=getRandomCard()
    isAlive=true
    let firstcard=getRandomCard()
    cards=[firstcard,secondcard] // array ,ordered
    sum=firstcard+secondcard
    renderGame()
}

console.log(messageEl)
function renderGame(){
    sumEl.textContent="Sum: "+ sum
    // cardsEl.textContent="Cards: " + cards[0] + " " + cards[1]
    cardsEl.textContent="Cards: " 
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+= cards[i] + " "
    }
    if (sum<=20){
    message="Do you want to draw a new card?"
}
else if(sum===21){
    hasBlackJack=true
    message="Wohooo! you've won the blackjack!"
 }
else{
    isAlive=false
    message="You're out of the game"
}
// console.log(hasBlackJack)
// console.log(isAlive)
messageEl.textContent=message
console.log(message)
}

function newCard(){
    if( isAlive===true && hasBlackJack===false){
        console.log("Drawing a new card")
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    
}
    
}
