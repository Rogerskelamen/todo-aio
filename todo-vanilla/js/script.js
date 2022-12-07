// Todo area DOM
const addBtn = document.getElementsByClassName('add-btn')[0]
const todolists = document.getElementsByClassName('todo-item')

// Add area DOM
const addCard = document.getElementById('add')
const addIpt = document.getElementsByClassName('add-ipt')[0]
const addSub = document.getElementsByClassName('submit-btn')[0]

async function getTodoList() {
  // fetch()
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
  const response = await fetch(`http://localhost:3030/add?name=${addIpt.value}`, {
    method: 'PUT'
  })
  getTodoList()
})
