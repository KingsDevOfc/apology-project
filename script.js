const startButton = document.getElementById("startButton")
const intro = document.getElementById("intro")
const content = document.getElementById("content")
const music = document.getElementById("music")
const musicControl = document.getElementById("musicControl")

startButton.onclick = () => {

intro.style.display="none"
content.classList.remove("hidden")

music.volume = 0.2
music.play()

startTimer()
typeLetter()

}

musicControl.onclick = () => {

if(music.paused){
music.play()
}else{
music.pause()
}

}


function startTimer(){

const startDate = new Date("2025-01-01")

setInterval(()=>{

let now = new Date()
let diff = now - startDate

let days = Math.floor(diff/(1000*60*60*24))
let hours = Math.floor((diff/(1000*60*60))%24)
let minutes = Math.floor((diff/(1000*60))%60)

document.getElementById("timer").innerText =
days+" dias "+hours+" horas "+minutes+" minutos"

},1000)

}


function typeLetter(){

const text = `

Júlia,

Eu queria começar dizendo que sinto muito.

Eu sei que em vários momentos eu fui muito mlk.
Deixei minhas inseguranças e meu ciúmes falarem mais alto.

Hoje eu reconheço meus erros.

Mas existe algo que eu nunca menti:
o que eu sinto por você sempre foi real.

Eu amo você.

Mesmo sendo um relacionamento que começou no Roblox,
você virou alguém extremamente importante pra mim.

Entre milhões de pessoas naquele jogo,
foi você que apareceu na minha vida.

Eu sei que errei.
E estou aqui tentando me redimir.

Eu não fiz esse site pra te pressionar.
Eu fiz porque você merece um pedido de desculpas verdadeiro.

Se algum dia você quiser conversar de novo,
eu vou estar aqui.

Com carinho.
`

let i=0

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i)

i++

setTimeout(typing,35)

}else{

createHearts()

}

}

typing()

}
