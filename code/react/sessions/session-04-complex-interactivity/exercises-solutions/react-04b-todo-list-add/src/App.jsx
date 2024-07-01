import './App.css';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="App">
      <h1 className="App-headline">My Todos</h1>
      <TodoList />
    </div>
  );
}
