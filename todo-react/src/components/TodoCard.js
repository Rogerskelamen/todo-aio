import TodoItem from './item/TodoItem';
import './TodoCard.css'

function TodoCard () {
  return (
    <div id="todo" className="neumorph">
      <button className="add-btn">+</button>
      <h4 className="title">
        to be done
      </h4>
      <ul className="todo-list">
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
}

export default TodoCard;
