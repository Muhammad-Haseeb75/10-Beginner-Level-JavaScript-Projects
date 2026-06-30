const body = document.querySelector('body')

body.addEventListener('click' , (e)=>{
  

   const newElement = document.createElement('div')
   newElement.classList.add('circle')

   const text = ["Hi" , "Aoa" , "Kaise HO" , "Khush Raho" , "JS" , "C++" , "HTML" , 'CSS']
   newElement.textContent = text[Math.floor(Math.random()*8)]

   const colors = ['red' , 'green' , 'blue' , 'yellow' , 'gray' , 'pink']
   newElement.style.backgroundColor = colors[Math.floor(Math.random()*6)]
   console.log(colors[Math.floor(Math.random()*6)])
   console.log(e.clientX , e.clientY)

   newElement.style.top = `${e.clientY-25}px`
   newElement.style.left = `${e.clientX-25}px`

   body.append(newElement)

   setTimeout(()=>{
    newElement.remove()
   }, 5000)

})