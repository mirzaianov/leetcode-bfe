// const isValid = function (s) {
//     let stack = [];
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '[',
//     };
//     for (let i = 0; i < s.length; i++) {
//         if (stack.length !== 0 && map[s[i]] === stack[stack.length - 1]) {
//             stack.pop();
//         } else {
//             stack.push(s[i]);
//         }
//     }
//     return !stack.length;
// };

// #2

const isValid = function (s) {
  let result = [];
  const store = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    if (result.length !== 0 && result[result.length - 1] === store[s[i]]) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return !result.length;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('{([)]}')); // false
console.log(isValid('[{(])[]]}')); // false
