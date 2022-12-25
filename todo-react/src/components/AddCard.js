import { useState } from 'react';
import './AddCard.css'

function AddCard (props) {
  const [newTodo, setNewTodo] = useState('')

  async function addTodo(e) {
    e.preventDefault()
    const result = await fetch(`http://localhost:3030/add?name=${newTodo}`, {
      method: 'POST'
    })
      .then(response => response.json())
    console.log(result.message)
    if (result.code !== 200) {
      console.log(result.message)
      return
    }
    props.postAddTodo()
  }

  function changeNewTodo(event) {
    setNewTodo(event.target.value)
  }

  return (
    <div id="add" className="neumorph pop-up">
      <div className="title">
        please enter
      </div>
      <form className="add-form">
        <input className="add-ipt" type="text" value={props.newTodo} onChange={event => changeNewTodo(event)} name="todo" autoFocus />
        <button className="submit-btn" type="submit" onClick={event => addTodo(event)}>submit</button>
      </form>
    </div>
  )
}

export default AddCard;
