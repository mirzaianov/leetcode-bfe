const removeOuterParentheses = function (s) {
  let result = '';
  let count = 0;
  let i = 0;

  while (s[i]) {
    if (s[i] === ')') count--;

    if (count >= 1) result += s[i];

    if (s[i] === '(') count++;

    i++;
  }

  return result;
};

console.log(removeOuterParentheses('(()())(())')); // "()()()"
console.log(removeOuterParentheses('(()())(())(()(()))')); // "()()()()(())"
console.log(removeOuterParentheses('()()')); // ""
