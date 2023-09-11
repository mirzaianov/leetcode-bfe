const splitNum = function (num) {
  const sortedArr = num
    .toString()
    .split('')
    .sort((a, b) => a - b);

  let num1 = '';
  let num2 = '';
  let pivot1 = 0;
  let pivot2 = 1;

  while (sortedArr[pivot1] || sortedArr[pivot2]) {
    if (typeof sortedArr[pivot1] !== 'undefined') {
      num1 += sortedArr[pivot1];
    }

    if (typeof sortedArr[pivot2] !== 'undefined') {
      num2 += sortedArr[pivot2];
    }

    pivot1 += 2;
    pivot2 += 2;
  }

  return Number(num1) + Number(num2);
};

console.log(splitNum(4325)); // 59
console.log(splitNum(687)); // 75
