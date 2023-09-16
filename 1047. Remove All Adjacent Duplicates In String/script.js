// const removeDuplicates = function (s) {
//   if (s.length < 2) return s;

//   const arr = s.split('');

//   let i = 0;

//   while (arr[i] || arr[i + 1]) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 2);
//       i -= 1;
//     } else {
//       i += 1;
//     }

//     i
//   }

//   return arr.join('');
// };

const removeDuplicates = function (s) {
  const store = [];

  for (const letter of s) {
    const last = store[store.length - 1];

    letter === last ? store.pop() : store.push(letter);
  }

  return store.join('');
};

console.log(removeDuplicates('abbaca')); // "ca"
console.log(removeDuplicates('azxxzy')); // "ay"
console.log(removeDuplicates('aaaaaaaa')); // ''
