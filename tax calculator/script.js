const form = document.querySelector('form')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()


    const income = document.querySelector("#income")
    const amount = parseInt(income.value)
    let totalTax = 0;

   
    if(amount <= 600000 ) {
        totalTax = 0
    }else if(amount <= 1200000) {
        totalTax =  (amount - 600000) * 0.1
    } else if(amount <= 2200000) {
        totalTax = (amount - 1200000) * 0.11 + 60000
    } else if(amount <= 3200000) {
        totalTax = (amount - 2200000) * 0.23 + 60000 + 110000
    } else if (amount <= 4100000) {
        totalTax = (amount - 3200000) * 0.30 + 60000 +  110000 + 230000
    } else {
        totalTax = (amount - 4100000) * 0.35 + 60000 +  110000 + 230000 + 270000
    }

   const result = document.querySelector('h2')
   result.textContent = `Total Tax : ${totalTax}`
    form.reset()
})