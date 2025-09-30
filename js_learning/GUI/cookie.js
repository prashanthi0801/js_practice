// function getcookie(name){
//     let cookies=document.cookie.split("; ")
//     for(let c of cookies){
//             let [key,value]=c.split("=")
//             if(key==name){
//                 return value
//             }

//     }

// }
// li.sort((a,b)=>{b[1]-a[1]}) // ascending
let time=new Date()
console.log(time.toLocaleString())
let tomorrow=new Date()

console.log(tomorrow.setTime(time.getTime()+24*60*60*1000))
