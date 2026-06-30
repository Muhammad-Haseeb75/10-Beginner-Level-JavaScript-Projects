setInterval(()=>{
    let today =  Date.now()
let olympday = new Date(2028 , 6 , 14).getTime()
// console.log(today)
// console.log(olympday)

let timeLeft = olympday-today

const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
timeLeft %= (1000 * 60 * 60 * 24)
const hours = Math.floor(timeLeft / (1000 * 60 * 60))
timeLeft %= (1000 * 60 * 60 )
const minutes = Math.floor(timeLeft / (1000 * 60))
timeLeft %= (1000 * 60)
const seconds = Math.floor(timeLeft / (1000))
timeLeft %= (1000)

document.getElementById('result').textContent = `${days} : Days   ${hours} : Hours   ${minutes} : Minutes   ${seconds} : Seconds`
})