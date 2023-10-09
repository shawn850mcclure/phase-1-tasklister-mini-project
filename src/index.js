document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  //console.log(form)
  form.addEventListener('submit', (e)=> {
    e.preventDefault()
    //console.log(e.target.new-task-description)
    buildToDO(e.target['new-task-description'].value)
    form.reset()
  })
});

function buildToDO(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  btn.addEventListener("click",handleDelete)
  li.textContent = `${todo}`
  li.appendChild(btn)
  //console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
