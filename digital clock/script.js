


setInterval( ()=>{
    const div = document.getElementById('div')
    let time = new Date()
    div.textContent = time.toLocaleTimeString() 
    div.style.color = "white"
} , 1000)