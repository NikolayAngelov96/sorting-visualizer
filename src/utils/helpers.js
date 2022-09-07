export function getRandomNumber(min = 25, max = 500) {
  return Math.floor(Math.random() * (max - min)) + min;
}
