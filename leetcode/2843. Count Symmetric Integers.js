const countSymmetricIntegers = (low, high) => {
  let count = 0;

  for (let i = low; i <= high; i += 1) {
    const toString = i.toString();

    if (toString.length % 2 !== 0) continue;

    let left = 0;
    let right = toString.length - 1;

    let leftSum = 0;
    let rightSum = 0;

    while (left <= right) {
      leftSum += +toString[left];
      rightSum += +toString[right];

      left += 1;
      right -= 1;
    }

    if (leftSum === rightSum) count += 1;
  }

  return count;
};

// console.log(countSymmetricIntegers(1100, 1107)); // 9
console.log(countSymmetricIntegers(1, 100)); // 9
console.log(countSymmetricIntegers(1200, 1230)); // 4
