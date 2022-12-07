// Todo area DOM
const addBtn = document.getElementsByClassName('add-btn')[0]
const todolists = document.getElementsByClassName('todo-item')

// Add area DOM
const addCard = document.getElementById('add')
const addIpt = document.getElementsByClassName('add-ipt')[0]
const addSub = document.getElementsByClassName('submit-btn')[0]

// baseURL
const baseURL = 'http://localhost:3030'

async function getTodoList() {
  const response = await fetch(
    baseURL + '/',
    { method: 'GET' }
  )
    .then(res => res.json())
  console.log(response)
  if (response.code !== 200) {
    return
  }
  todolists.forEach((item, index) => {

  })
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
