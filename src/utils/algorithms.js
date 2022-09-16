import { colors, sleep } from "./helpers";

export async function bubbleSort(arr, setIsButtonDisabled) {
  const barsArray = [...document.getElementsByClassName("item")];

  for (let i = 0; i < arr.length; i++) {
    setIsButtonDisabled(true);

    for (let j = 0; j < arr.length - 1 - i; j++) {
      barsArray[j].style.backgroundColor = colors.pink;
      barsArray[j + 1].style.backgroundColor = colors.pink;
      await sleep(400);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        barsArray[j].style.height = arr[j] + "px";
        barsArray[j].style.backgroundColor = colors.pink;
        barsArray[j].textContent = arr[j];

        barsArray[j + 1].style.height = arr[j + 1] + "px";
        barsArray[j + 1].style.backgroundColor = colors.pink;
        barsArray[j + 1].textContent = arr[j + 1];
        await sleep(400);
      }

      barsArray[j].style.backgroundColor = colors.blue;
      barsArray[j + 1].style.backgroundColor = colors.purple;
    }
    await sleep(400);
  }
  barsArray[0].style.backgroundColor = colors.purple;

  await sleep(1000);
  barsArray.forEach((e) => (e.style.backgroundColor = colors.blue));

  setIsButtonDisabled(false);
}

export async function selectionSort(arr, setIsButtonDisabled) {
  const barsArray = [...document.getElementsByClassName("item")];

  for (let i = 0; i < arr.length; i++) {
    setIsButtonDisabled(true);

    let minNumber = arr[i];
    let minIndex = i;
    barsArray[i].style.backgroundColor = colors.pink;
    await sleep(400);

    for (let j = i + 1; j < arr.length; j++) {
      barsArray[j].style.backgroundColor = colors.green;
      await sleep(400);
      if (arr[j] < minNumber) {
        barsArray[minIndex].style.backgroundColor = colors.blue;
        minNumber = arr[j];
        minIndex = j;

        barsArray[minIndex].style.backgroundColor = colors.pink;

        await sleep(400);
      } else {
        barsArray[j].style.backgroundColor = colors.blue;
        await sleep(400);
      }
    }

    barsArray[i].style.backgroundColor = colors.pink;
    await sleep(400);

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    barsArray[i].style.height = arr[i] + "px";
    barsArray[i].textContent = arr[i];

    barsArray[minIndex].style.height = arr[minIndex] + "px";
    barsArray[minIndex].textContent = arr[minIndex];
    barsArray[minIndex].style.backgroundColor = colors.blue;

    barsArray[i].style.backgroundColor = colors.purple;
    await sleep(400);
  }

  await sleep(1000);
  barsArray.forEach((x) => (x.style.backgroundColor = colors.blue));

  setIsButtonDisabled(false);
}

export async function insertionSort(arr, setIsButtonDisabled) {
  const barsArray = [...document.getElementsByClassName("item")];

  for (let i = 1; i < arr.length; i++) {
    setIsButtonDisabled(true);
    let key = arr[i];

    for (let j = i; j > 0; j--) {
      let current = arr[j - 1];

      // color pink is blinking

      if (key < current) {
        let temp = arr[j - 1];
        arr[j - 1] = key;
        arr[j] = temp;

        barsArray[j].style.backgroundColor = colors.pink;
        await sleep(300);

        barsArray[j - 1].style.backgroundColor = colors.green;
        await sleep(300);

        barsArray[j - 1].style.height = arr[j - 1] + "px";
        barsArray[j - 1].textContent = arr[j - 1];

        barsArray[j].style.height = arr[j] + "px";
        barsArray[j].textContent = arr[j];
        barsArray[j].style.backgroundColor = colors.purple;
        await sleep(300);

        barsArray[i].style.backgroundColor = colors.purple;
        barsArray[j - 1].style.backgroundColor = colors.purple;
        await sleep(400);
      } else {
        barsArray[j].style.backgroundColor = colors.pink;
        await sleep(300);

        barsArray[j - 1].style.backgroundColor = colors.green;
        await sleep(300);
        barsArray[j - 1].style.backgroundColor = colors.purple;
        barsArray[j].style.backgroundColor = colors.purple;

        await sleep(300);
        break;
      }
    }
  }

  barsArray[arr.length - 1].style.backgroundColor = colors.purple;
  await sleep(1000);
  barsArray.forEach((el) => (el.style.backgroundColor = colors.blue));
  setIsButtonDisabled(false);
}
