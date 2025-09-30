const slides=document.querySelectorAll(".slide")
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
function goPrev(){
    counter--
    imageslider()
}
function goNext(){
    counter++
    imageslider()
}

function imageslider(){
    slides.forEach((slide) =>{
        slide.style.transform=translateX(-`${counter*100}%`)
    })
}