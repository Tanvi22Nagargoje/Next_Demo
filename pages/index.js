// pages/index.js
import { useState } from 'react';


export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Welcome to My Demo Next.js Project!</h1>
      <p>This is the homepage.</p>
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
