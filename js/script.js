const Hours= document.getElementById('hour')
const Minute= document.getElementById('minute')
const Second= document.getElementById('second')

const getHours= () => {
    let data= new Date()
    let horaAtual= Number(data.getHours())
    let minAtual= Number(data.getMinutes())
    let secAtual= Number(data.getSeconds())

    Hours.innerHTML= `${horaAtual}`
    Minute.innerHTML= `${minAtual}`
    Second.innerHTML= `${secAtual}`
}

setInterval(() => {
    getHours()
}, 1000)