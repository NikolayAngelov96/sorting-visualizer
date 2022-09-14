import { useState } from "react";
import { generateArray, sleep } from "./utils/helpers";
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
        <button className="btn" onClick={() => selectionSort(values)}>
          Selection Sort
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
      domArray[j + 1].style.backgroundColor = "purple";
    }
    await sleep(500);
  }
  domArray[0].style.backgroundColor = "purple";

  await sleep(1000);
  domArray.forEach((e) => (e.style.backgroundColor = "blue"));
};

const selectionSort = async (arr) => {
  const domArray = [...document.getElementsByClassName("item")];

  for (let i = 0; i < arr.length; i++) {
    let minNumber = arr[i];
    let minIndex = i;
    domArray[i].style.backgroundColor = "red";
    await sleep(500);

    for (let j = i + 1; j < arr.length; j++) {
      domArray[j].style.backgroundColor = "green";
      await sleep(500);
      if (arr[j] < minNumber) {
        domArray[minIndex].style.backgroundColor = "blue";
        minNumber = arr[j];
        minIndex = j;

        domArray[minIndex].style.backgroundColor = "red";

        await sleep(500);
      } else {
        domArray[j].style.backgroundColor = "blue";
        await sleep(500);
      }
    }

    // pick different color when swaping for better understanding

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    domArray[i].style.height = arr[i] + "px";
    domArray[i].textContent = arr[i];

    domArray[minIndex].style.height = arr[minIndex] + "px";
    domArray[minIndex].textContent = arr[minIndex];
    domArray[minIndex].style.backgroundColor = "blue";

    domArray[i].style.backgroundColor = "purple";
    await sleep(500);
  }

  await sleep(1000);
  domArray.forEach((x) => (x.style.backgroundColor = "blue"));
};
