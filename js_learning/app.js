let url="https://dog.ceo/api/breeds/list/all"
let ulEl=document.getElementById("ul")
let liEl=document.querySelectorAll("li")



const getBreeds=async()=>{
    console.log("getting data...")
    let promise= await fetch(url)
console.log(promise)
let data= await promise.json()
console.log(data)
console.log(data["message"]["australian"])
let arr=data.message["australian"]
ulEl.textContent="australian"
liEl.forEach((li,index) => {
    if(index < arr.length){
      li.textContent=arr[index]

    }
    
});

}
getBreeds()