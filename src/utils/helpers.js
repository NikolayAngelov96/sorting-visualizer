export function getRandomNumber(min = 25, max = 400) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(getRandomNumber());
  }

  return arr;
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const colors = {
  purple: "#845EC2",
  pink: "#FF6F91",
  blue: "#0089BA",
  green: "#00C9A7",
};
