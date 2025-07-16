const smallestNumber = (pattern: string): string => {
  const len: number = pattern.length;
  const stack: number[] = [];
  let res = '';

  for (let i = 0; i <= len; i += 1) {
    stack.push(i + 1);

    if (i === len || pattern[i] === 'I') {
      while (stack.length > 0) {
        res += stack.pop();
      }
    }
  }

  return res;
};

export default smallestNumber;
