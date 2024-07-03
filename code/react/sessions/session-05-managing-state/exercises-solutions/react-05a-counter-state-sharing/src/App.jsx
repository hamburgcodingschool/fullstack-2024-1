import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Counter count={count} onIncrement={handleIncrement} />
      <Counter count={count} onIncrement={handleIncrement} />
    </div>
  );
}
