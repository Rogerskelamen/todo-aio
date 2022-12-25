import { useEffect, useState } from 'react';
import './App.css';
import AddCard from './components/AddCard';
import DoneCard from './components/DoneCard';
import TodoCard from './components/TodoCard';

function App() {
  const [toggleAddCard, setToggleAddCard] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [doneList, setDoneList] = useState([])

  useEffect(() => {
    getData()
  }, [])

  // get todos and dones using fetch
  function getData() {
    fetch(`http://localhost:3030`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => setTodoList(result))

    fetch(`http://localhost:3030/done`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => setDoneList(result))
  }

  // handler after add a new todo
  function postAddTodo() {
    setToggleAddCard(false)
    getData()
  }

  function checkItem() {

  }

  return (
    <div className="App">
      <header>
        <h3 className="title">Todo React</h3>
      </header>
      <div className="container">
        {
          toggleAddCard ? (
            <AddCard postAddTodo={postAddTodo} />
          ) : null
        }
        <TodoCard
          clickAddBtn={() => setToggleAddCard(true)}
          todoList={todoList}
          checkItem={() => checkItem}
          />
        <DoneCard doneList={doneList} />
      </div>
    </div>
  );
}

export default App;
