const music = document.getElementById("music")
const musicBtn = document.getElementById("musicBtn")

musicBtn.onclick = () => {

if(music.paused){

music.play()

}else{

music.pause()

}

}


const startDate = new Date("2026-02-27")

setInterval(()=>{

let now = new Date()
let diff = now - startDate

let days = Math.floor(diff/(1000*60*60*24))

document.getElementById("timer").innerText =
days+" dias desde que nos conhecemos"

},1000)
