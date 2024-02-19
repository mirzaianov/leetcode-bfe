const evalRPN = (tokens: string[]): number => {
  const stack: number[] = [];

  for (const token of tokens) {
    if (token === '+') {
      const second: number = stack.pop()!;
      const first: number = stack.pop()!;

      stack.push(first + second);
    } else if (token === '-') {
      const second: number = stack.pop()!;
      const first: number = stack.pop()!;

      stack.push(first - second);
    } else if (token === '*') {
      const second: number = stack.pop()!;
      const first: number = stack.pop()!;

      stack.push(first * second);
    } else if (token === '/') {
      const second: number = stack.pop()!;
      const first: number = stack.pop()!;

      stack.push(Math.trunc(first / second));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
