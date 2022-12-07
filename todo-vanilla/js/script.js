// Todo area DOM
const addBtn = document.getElementsByClassName('add-btn')[0]
const todolist = document.getElementsByClassName('todo-list')[0]

// Add area DOM
const addCard = document.getElementById('add')
const addIpt = document.getElementsByClassName('add-ipt')[0]
const addSub = document.getElementsByClassName('submit-btn')[0]

// Done area DOM
const donelist = document.getElementsByClassName('done-list')[0]

// baseURL
const baseURL = 'http://localhost:3030'

async function getTodoList() {
  const todos = await fetch(
    baseURL + '/',
    { method: 'GET' }
  )
    .then(res => res.json())
  console.log(todos)
  const dones = await fetch(
    baseURL + '/done',
    { method: 'GET' }
  )
    .then(res => res.json())
  console.log(dones)

  // display todo items
  let todoitems = ''
  todos.forEach(item => {
    todoitems += `
      <li class="todo-item item">
        <span class="text">${item.name}</span>
        <input id="${item.id}" type="checkbox">
      </li>
    `
  });
  todolist.innerHTML = todoitems

  // display done items
  let doneitems = ''
  dones.forEach(item => {
    doneitems += `
      <li class="done-item item">
        <span class="text">${item.name}</span>
      </li>
    `
  });
  donelist.innerHTML = doneitems

  // bind checkbox with checked happened
  Array
    .from(document.getElementsByClassName('todo-item'))
    .forEach(item => {
      item.children[1].addEventListener('change', e => {
        if (e.target.checked) {
          deleteTodo(e.target.id)
          e.target.parentNode.parentNode.removeChild(e.target.parentNode)
          donelist.innerHTML = `
            <li class="done-item item fade-in">
              <span class="text">${item.children[0].innerText}</span>
            </li>
          ` + donelist.innerHTML
        }
      })
  })
}

async function deleteTodo(id) {
  const response = await fetch(
    baseURL + `/delete/${id}`,
    { method: 'PUT' }
  )
  .then(res => res.json())
  console.log(response)
}

addBtn.addEventListener('click', () => {
  addCard.className = 'neumorph pop-up'
  addIpt.focus()
})

addSub.addEventListener('click', async e => {
  e.preventDefault()
  addCard.className = 'no-display'
  if (!addIpt.value) {
    return
  }
  const response = await fetch(
    baseURL + `/add?name=${addIpt.value}`,
    { method: 'PUT' }
  )
    .then(res => res.json())
  console.log(response)
  addIpt.value = ''
  getTodoList()
})

// execute immediately
getTodoList()
