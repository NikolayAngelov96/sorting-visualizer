import { useState } from "react";
import { getRandomNumber } from "./utils/helpers";
import "./Visualizer.css";

const initialArray = generateArray();

export default function Visualizer() {
  const [values, setValues] = useState(initialArray);

  return (
    <div className="container">
      {values.map((x, i) => (
        <div>
          <div
            key={`${x} - ${i}`}
            style={{ height: `${x}px` }}
            className="item"
          ></div>
          {x}
        </div>
      ))}
      <button onClick={() => setValues(generateArray())}>
        Generate New Array
      </button>
    </div>
  );
}

function generateArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(getRandomNumber());
  }

  return arr;
}
