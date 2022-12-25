import './TodoItem.css'

function TodoItem (props) {
  function itemCheck() {
    props.itemCheck(props.id)
  }

  return (
    <li className="todo-item item">
      <span className="text">{ props.text }</span>
      <input type="checkbox" onClick={itemCheck} />
    </li>
  )
}

export default TodoItem;
