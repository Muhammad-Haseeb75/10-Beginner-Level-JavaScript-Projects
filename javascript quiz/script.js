const form = document.querySelector('form')

form.addEventListener('submit' , (e)=>{

    e.preventDefault()


    let asnwers = {
        q1:"Babar Azam",
        q2:"Wasim Akram",
        q3:"Sarfraz Ahmad",
        q4:"Sarfraz Ahmad",
        q5:"Sarfraz Ahmad"
    }

    const data = new FormData(form)

    let result = 0;


    for(let [name , values] of data.entries()) {
        if(asnwers[name] == values) {
            result++;
        }
    }

    document.getElementById('result').textContent = `You marks are : ${result} out of 5`
    document.getElementById('result').style.fontWeight = "600"


    form.reset()
})

