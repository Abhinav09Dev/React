import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {count} </h2>
      <div>
        <button
          style={{ marginRight: "10px" }}
          onClick={decrement}
          disabled={count === 0}
        >
          -
        </button>
        <button onClick={increment} disabled={count === 20}>+</button>
      </div>
    </>
  );
}

export default App;
