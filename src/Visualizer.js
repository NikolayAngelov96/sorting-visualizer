import { useState } from "react";
import { getRandomNumber } from "./utils/helpers";
import "./Visualizer.css";

const initialArray = generateArray();

export default function Visualizer() {
  const [values, setValues] = useState(initialArray);

  return (
    <div>
      <div className="header">
        <button
          onClick={() => setValues(generateArray())}
          className="btn generate-btn"
        >
          Generate New Array
        </button>
        <button className="btn" onClick={() => bubbleSort(values)}>
          Bubble Sort
        </button>
        <button className="btn">Selection Sort</button>
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const bubbleSort = async (arr) => {
  const domArray = [...document.getElementsByClassName("item")];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      domArray[j].style.backgroundColor = "red";
      domArray[j + 1].style.backgroundColor = "red";
      await sleep(500);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        domArray[j].style.height = arr[j] + "px";
        domArray[j].style.backgroundColor = "red";
        domArray[j].textContent = arr[j];

        domArray[j + 1].style.height = arr[j + 1] + "px";
        domArray[j + 1].style.backgroundColor = "red";
        domArray[j + 1].textContent = arr[j + 1];
        await sleep(500);
      }

      domArray[j].style.backgroundColor = "blue";
      domArray[j + 1].style.backgroundColor = "blue";
    }
    await sleep(500);
  }

  domArray.forEach((e) => (e.style.backgroundColor = "blue"));
};

function generateArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(getRandomNumber());
  }

  return arr;
}
