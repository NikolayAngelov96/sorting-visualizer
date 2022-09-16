import { useState } from "react";
import { generateArray } from "./utils/helpers";
import { bubbleSort, selectionSort, insertionSort } from "./utils/algorithms";
import "./Visualizer.css";

const initialArray = generateArray();

export default function Visualizer() {
  const [values, setValues] = useState(initialArray);
  const [isAnimating, setIsAnimating] = useState(false);

  const setIsButtonDisabled = (isBtnDisabled) => {
    setIsAnimating(isBtnDisabled);
  };

  return (
    <div>
      <div className="header">
        <button
          onClick={() => setValues(generateArray())}
          className="btn generate-btn"
          disabled={isAnimating}
        >
          Generate New Array
        </button>
        <button
          className="btn"
          onClick={() => bubbleSort(values, setIsButtonDisabled)}
          disabled={isAnimating}
        >
          Bubble Sort
        </button>
        <button
          className="btn"
          onClick={() => selectionSort(values, setIsButtonDisabled)}
          disabled={isAnimating}
        >
          Selection Sort
        </button>
        <button
          className="btn"
          onClick={() => insertionSort(values, setIsButtonDisabled)}
          disabled={isAnimating}
        >
          Insertion Sort
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
