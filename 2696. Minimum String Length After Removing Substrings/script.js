// const minLength = (s) => {
//   const arr = s.split('');

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] + arr[i + 1] === 'AB' || arr[i] + arr[i + 1] === 'CD') {
//       arr.splice(i, 2);
//       i -= 2;
//     }
//   }

//   return arr.join('').length;
// };

const minLength = (s) => {
  const arr = s.split('');
  const stack = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (
      (stack[stack.length - 1] === 'A' && arr[i] === 'B') ||
      (stack[stack.length - 1] === 'C' && arr[i] === 'D')
    ) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  return stack.length;
};

console.log(minLength('ABFCACDB')); // 2
console.log(minLength('ACBBD')); // 5
console.log(minLength('CCCCDDDD')); // 0
