function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  if (n === 0 || n > 1000000) {
    throw new Error(`n must be greater than 0 and less than 1,000,000. Given: ${n}`);
  }
  let range = Array.from({length: n}, (v, k) => -1+k+1);
  let firstSet = [];
  let secondSet = [];
  while (range.length > 1) {
    let half = Math.floor(range.length/2);
    firstSet = range.slice(0, half);
    secondSet = range.slice(half, range.length);
    range = flip() ? firstSet : secondSet;
  }
  return range.pop();
}
console.log(
  randomNumber(13)
);