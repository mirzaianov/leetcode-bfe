var calPoints = function (operations) {
  const arr = [];

  for (let i = 0; i < operations.length; i++) {
    if (!isNaN(+operations[i])) {
      arr.push(+operations[i]);
    } else {
      if (operations[i] === '+') {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      }

      if (operations[i] === 'D') {
        arr.push(arr[arr.length - 1] * 2);
      }

      if (operations[i] === 'C') {
        arr.pop();
      }
    }
  }

  return arr.reduce((acc, item) => acc + item, 0);
};

console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // 27
console.log(calPoints(['1', 'C'])); // 0
