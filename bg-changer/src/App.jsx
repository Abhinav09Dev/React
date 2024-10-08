import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap flex-row justify-start top-12 inset-x-0 px-4">
        <div className="flex flex-col flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-2 py-2">
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
