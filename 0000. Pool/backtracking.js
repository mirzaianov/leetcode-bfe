// #1 - Simple recursion

function perm1(arr) {
  let result = [];

  if (arr.length === 1) return [arr];

  arr.forEach((letter) => {
    let tmp = perm1(arr.filter((_l) => _l !== letter));

    tmp = tmp.map((_set) => [letter, ..._set]);
    result = [...result, ...tmp];
  });

  return result;
}

console.log(perm1([1, 2, 3]));

// #2 - Swap

function perm2(arr, n) {
  if (n < 2) {
    console.log(arr);
  } else {
    for (let j = n - 1; j >= 0; j--) {
      [arr[j], arr[n - 1]] = [arr[n - 1], arr[j]];
      perm2(arr, n - 1);
      [arr[j], arr[n - 1]] = [arr[n - 1], arr[j]];
    }
  }
}

console.log(perm2([1, 2, 3], 3));
