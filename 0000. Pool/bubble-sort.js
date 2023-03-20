// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length - 1 - i; j++) {
//             if (array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//             }
//         }
//     }

//     return array;
// }

// #2

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

console.log(bubbleSort([23, 9, 34, 5, 6, 3, 44, 56, 1, 7, 2]));
