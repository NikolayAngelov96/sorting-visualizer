import { useState } from "react";
import { getRandomNumber } from "./utils/helpers";
import "./Visualizer.css";

const initialArray = generateArray();

export default function Visualizer() {
  const [values, setValues] = useState(initialArray);

  return (
    <div>
      <div className="header">
        <button onClick={() => setValues(generateArray())} className="btn">
          Generate New Array
        </button>
        <button className="btn" onClick={() => bubbleSort(values)}>
          Bubble Sort
        </button>
      </div>
      <div className="container">
        {values.map((x, i) => (
          <div key={`${i}`} style={{ height: `${x}px` }} className="item">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

const bubbleSort = (arr) => {
  const domArray = document.getElementsByClassName("item");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
};

function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(getRandomNumber());
  }

  return arr;
}
