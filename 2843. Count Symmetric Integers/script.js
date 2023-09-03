var countSymmetricIntegers = function (low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    let toString = i.toString();

    if (toString.length % 2 !== 0) continue;

    let left = 0;
    let right = toString.length - 1;

    let leftSum = 0;
    let rightSum = 0;

    while (left <= right) {
      leftSum += +toString[left];
      rightSum += +toString[right];

      left++;
      right--;
    }

    if (leftSum === rightSum) count++;
  }

  return count;
};

// console.log(countSymmetricIntegers(1100, 1107)); // 9
console.log(countSymmetricIntegers(1, 100)); // 9
console.log(countSymmetricIntegers(1200, 1230)); // 4
