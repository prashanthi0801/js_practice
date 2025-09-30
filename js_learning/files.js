let filename="access.log"
// const fs=require("fs")
import fs from "fs"
 fs.readFile(filename, async (err,result)=>{
    if(err) throw err;
    // console.log(result.toString())
    console.log("reading your log file...")
    let data = result.toString()
    // console.log(data)
    let arr=[]
    let new_arr=[]
    arr.push(data.split("\n"))
    for(let i of arr[0]){
        new_arr.push(i.slice(0,-1))
        
    }
    let ip_addresses=[]
    // add=[]
    // console.log(new_arr)
    for(let i of new_arr){
        // let regex=new re
        ip_addresses.push(i.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]{1,3}/)[0])
        // add.push(a)
        // console.log(a)


    }
    console.log(ip_addresses)
    let map={}
    // let count=1
    for(let i of ip_addresses){
        if (i in map){
            map[i]+=1

        }
        else{
            map[i]=1
        }

    }
    console.log(map)

    let freq=[]
    for(let key in map){
       let row=[key,map[key]]
        freq.push(row)
    }
    console.log(freq)
    freq.sort((a,b)=>b[1]-a[1])
    console.log(freq)
    console.log("top 5 ids")
    console.log(freq.slice(0,5))
    // function processData(result){
    //     for(i of data){
    //         // console.log(i)
    //         // let arr=
            
    //     }
    //     // if(data.includes(/[0-9]+\.[0-9]+\.[0-9]+\./)){

    //     // }
    // }
    // processData(data)
})
