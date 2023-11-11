// const peakIndexInMountainArray = function (arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] < arr[mid + 1]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return left;
// };

const peakIndexInMountainArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) return i;
  }
};

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1
console.log(peakIndexInMountainArray([0, 10, 7, 5, 2])); // 1
console.log(peakIndexInMountainArray([0, 5, 7, 10, 9])); // 3
