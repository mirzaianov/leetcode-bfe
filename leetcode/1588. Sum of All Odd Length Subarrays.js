// const sumOddLengthSubarrays = function (arr) {
//     let i = 1;
//     let sum = 0;

//     while (i <= arr.length) {
//         for (let j = 0; j <= arr.length - i; j++) {
//             for (let k = j; k < i + j; k++) {
//                 sum += arr[k];
//                 console.log(`[i] ${i}, [j] ${j}, [k] ${k}, [arr[k]] ${arr[k]}, [sum] ${sum}`);
//             }
//         }
//         i += 2;
//     }

//     return sum;
// };

// const sumOddLengthSubarrays = function (arr) {
//     let i = 1;
//     let sum = 0;

//     for (i = 1; i <= arr.length; i += 2) {
//         for (let j = 0; j <= arr.length - i; j++) {
//             for (let k = j; k < i + j; k++) {
//                 sum += arr[k];
//                 console.log(`[i] ${i}, [j] ${j}, [k] ${k}, [arr[k]] ${arr[k]}, [sum] ${sum}`);
//             }
//         }
//     }

//     return sum;
// };

// #2

const sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let total = i * (len - i) + (len - i);
    sum += Math.ceil(total / 2) * arr[i];
  }

  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); //58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66
