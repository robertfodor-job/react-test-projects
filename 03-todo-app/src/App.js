import './App.css';
import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import TodoList from './components/test/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>No Nekúp to</h1>
      {/* <TodoList /> */}
      <TodoList />
    </div>
  );
}

export default App;
