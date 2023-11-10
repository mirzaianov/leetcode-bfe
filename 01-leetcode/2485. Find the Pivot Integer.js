// var pivotInteger = function (n) {
//   for (let i = 1; i <= n; i++) {
//     let leftPivot = (i * (i + 1)) / 2;
//     let rightPivot = (n * (n + 1)) / 2 - leftPivot + i;
//     if (leftPivot === rightPivot) return i;
//   }

//   return -1;
// };

var pivotInteger = function (n) {
  let totalSum = 0,
    removedSum = 0;

  for (let i = 0; i <= n; i++) {
    totalSum = totalSum + i;
  }

  for (let i = 0; i <= n; i++) {
    if (totalSum === removedSum + i) {
      return i;
    }

    totalSum = totalSum - i;
    removedSum = removedSum + i;

    console.log(`i >>`, i);
    console.log(`total sum >>`, totalSum);
    console.log(`removed sum >>`, removedSum);
  }

  return -1;
};

console.log(pivotInteger(8)); // 6
// console.log(pivotInteger(1)); // 1
// console.log(pivotInteger(4)); // -1
