import './TodoItem.css'
import { useState } from "react"

function TodoItem () {
  const [text, setText] = useState('asdf')

  return (
    <li className="todo-item item">
      <span className="text">{ text }</span>
      <input type="checkbox" />
    </li>
  )
}

export default TodoItem;
