function createHearts(){

setInterval(()=>{

const heart=document.createElement("div")

heart.innerHTML="❤️"

heart.style.position="fixed"
heart.style.left=Math.random()*100+"%"
heart.style.bottom="0"
heart.style.fontSize="24px"

document.body.appendChild(heart)

let pos=0

let anim=setInterval(()=>{

pos++

heart.style.bottom=pos+"px"

if(pos>800){

clearInterval(anim)
heart.remove()

}

},20)

},500)

}
