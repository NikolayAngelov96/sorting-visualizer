export function getRandomNumber(min = 5, max = 500) {
  return Math.floor(Math.random() * (max - min)) + min;
}
