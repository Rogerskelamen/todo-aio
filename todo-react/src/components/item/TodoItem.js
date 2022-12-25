import './TodoItem.css'

function TodoItem (props) {

  return (
    <li className="todo-item item">
      <span className="text">{ props.text }</span>
      <input type="checkbox" />
    </li>
  )
}

export default TodoItem;
