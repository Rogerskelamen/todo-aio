import './App.css';
import AddCard from './components/AddCard';
import DoneCard from './components/DoneCard';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div className="App">
      <header>
        <h3 className="title">Todo React</h3>
      </header>
      <div className="container">
        <AddCard />
        <TodoCard />
        <DoneCard />
      </div>
    </div>
  );
}

export default App;
