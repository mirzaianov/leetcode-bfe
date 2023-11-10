// Return the index of the number in the array

// function binarySearch(array, number) {
//     let left = 0,
//         right = array.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (array[mid] === number) return mid;

//         if (array[mid] < number) {
//             left = mid + 1;
//         }

//         if (array[mid] > number) {
//             right = mid - 1;
//         }

//         console.log(left, mid, right);
//     }

//     return -1;
// }

// #2

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;

    if (array[mid] < target) left = mid + 1;

    if (array[mid] > target) right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 3, 6, 7, 9, 11, 23, 56, 78, 99], 11));
