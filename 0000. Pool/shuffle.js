// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// Fisher–Yates shuffle

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const randIdx = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[randIdx]] = [arr[randIdx], arr[i]];
  }

  return arr;
}

console.log(shuffle([1, 2, 3, 4]));
