// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// Fisher–Yates shuffle

function shuffle(arr) {
  const len = arr.length;

  for (let i = len - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

console.log(shuffle([1, 2, 3, 4]));
