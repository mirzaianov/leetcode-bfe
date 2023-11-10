// Quick sort with additional space

// function quickSort(arr) {
//     if (arr.length < 2) return arr;

//     const pivotIndex = Math.floor(arr.length / 2);
//     const pivot = arr[pivotIndex];
//     const smaller = [];
//     const bigger = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === pivotIndex) continue;

//         if (arr[i] <= pivot) {
//             smaller.push(arr[i]);
//         } else {
//             bigger.push(arr[i]);
//         }
//     }

//     console.log(smaller, pivot, bigger);

//     return [...quickSort(smaller), pivot, ...quickSort(bigger)];
// }

// Quick sort WITHOUT additional space

// function quickSort(arr) {
//     return quickSortHelper(arr, 0, arr.length - 1);
// }

// function quickSortHelper(arr, left, right) {
//     if (arr.length < 2) return arr;

//     const index = partition(arr, left, right);

//     if (left < index - 1) {
//         quickSortHelper(arr, left, index - 1);
//     }

//     if (index < right) {
//         quickSortHelper(arr, index, right);
//     }

//     return arr;
// }

// function partition(arr, left, right) {
//     const pivot = arr[Math.floor((left + right) / 2)];

//     while (left <= right) {
//         while (arr[left] < pivot) {
//             left++;
//         }

//         while (arr[right] > pivot) {
//             right--;
//         }

//         if (left <= right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }

//     return left;
// }

// #2

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivotIndex = Math.floor((arr.length - 1) / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let more = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) continue;

    if (arr[i] < pivot) {
      less.push(arr[i]);
    }

    if (arr[i] > pivot) {
      more.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(more)];
}

console.log(quickSort([3, 2, 15, 1, 5, 3, 11, 0]));
