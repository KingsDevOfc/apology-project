const music = document.getElementById("music")

function toggleMusic(){

if(music.paused){

music.play()

}else{

music.pause()

}

}

const startDate = new Date("2026-02-24")

setInterval(()=>{

const now = new Date()

const diff = now - startDate

const days = Math.floor(diff/(1000*60*60*24))

document.getElementById("timer").innerText =
days + " dias desde que nos conhecemos"

},1000)
