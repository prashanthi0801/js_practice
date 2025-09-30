let ulEl=document.createElement("ul")
console.log(ulEl)
for(let i=0;i<3;i++){
    let liEl=document.createElement('li')
    liEl.textContent=prompt("type out")
    ulEl.appendChild(liEl)

}
document.body.appendChild(ulEl)
// console.log(document.body)