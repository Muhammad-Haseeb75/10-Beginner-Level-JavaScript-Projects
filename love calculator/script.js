const form = document.querySelector("form")
const Boy = document.getElementById('Boy')
const Girl = document.getElementById('Girl')

form.addEventListener('submit' , (e)=>{
    e.preventDefault(); 
    const l1 =Boy.value.length
    const l2 =Girl.value.length

    const result = Math.pow(l1+l2 , 9) % 101
    const output = document.querySelector('h2').textContent = `Result: ${result}%`
    form.reset() 
})