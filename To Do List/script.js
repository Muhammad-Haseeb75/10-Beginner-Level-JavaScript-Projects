const form = document.querySelector('form')
const alltask = document.querySelector('#alltask')
const input = document.getElementById('input')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const text = input.value.trim()

    if(text == "") return

    const parent = document.createElement('div')
    parent.style.width = "100%"

    const task = document.createElement('span')
    task.textContent = text
    task.style.width = "70%"
    task.style.height = "20px"
  task.style.marginRight = "10px"

    const Done = document.createElement('button')
    Done.textContent = "Done"
    Done.style.width = "50px"
    Done.style.height = "20px"
    Done.style.marginLeft = "5px"
    

    const Delete = document.createElement('button')
    Delete.textContent = "Delete"
    Delete.style.width = "50px"
    Delete.style.height = "20px"
    Delete.style.marginLeft = "5px"
    

    parent.append(task , Done , Delete)

    alltask.append(parent)

    Done.addEventListener('click' , ()=>{
        task.style.textDecoration = "line-through"
        task.style.color = 'grey'
    })

    Delete.addEventListener('click' , ()=>{
        parent.remove(parent)
    })

    form.reset()

})




