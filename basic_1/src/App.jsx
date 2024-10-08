import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( prevCount =>  prevCount + 1);
    setCount(prevCount =>  prevCount + 1); // prevCounter is last updated state as it is a callback
    setCount(prevCount =>  prevCount + 1);
    // setCount(count + 1);
    // setCount(count + 1); // useState updates UI and variable in batches 
    // setCount(count + 1); // so repatitive updates are not visible
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
