import { useState } from "react";
import { getRandomNumber } from "./utils/helpers";

export default function Visualizer() {
  const [values, setValues] = useState(generateArray());

  function generateArray() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(getRandomNumber());
    }

    return arr;
  }

  console.log(values);
  return (
    <div>
      {values.map((x, i) => (
        <div key={`${x} - ${i}`}>{x}</div>
      ))}
    </div>
  );
}
