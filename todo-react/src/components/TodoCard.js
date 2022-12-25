import TodoItem from './item/TodoItem';
import './TodoCard.css'

function TodoCard (props) {
  return (
    <div id="todo" className="neumorph">
      <button
        className="add-btn"
        onClick={props.clickAddBtn}
      >+</button>
      <h4 className="title">
        to be done
      </h4>
      <ul className="todo-list">
        {
          props.todoList.map(todo => {
            return <TodoItem key={todo.id} text={todo.name} />;
          })
        }
      </ul>
    </div>
  )
}

export default TodoCard;
