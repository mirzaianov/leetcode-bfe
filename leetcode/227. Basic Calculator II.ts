const calculate = (s: string): number => {
  const stack: number[] = [];
  let accumulatedNumber: string | number = '';
  let prevOperator: string | null = null;

  for (let i = 0; i <= s.length; i += 1) {
    if (s[i] === ' ') {
      continue;
    }

    if (Number.isInteger(Number(s[i]))) {
      accumulatedNumber += s[i];
      continue;
    }

    accumulatedNumber = Number(accumulatedNumber);

    switch (prevOperator) {
      case '+':
        stack.push(accumulatedNumber);
        break;
      case null:
        stack.push(accumulatedNumber);
        break;
      case '-':
        stack.push(-accumulatedNumber);
        break;
      case '*':
        stack.push(stack.pop()! * accumulatedNumber);
        break;
      case '/':
        stack.push(Math.trunc(stack.pop()! / accumulatedNumber));
        break;
      default:
        break;
    }

    prevOperator = s[i];
    accumulatedNumber = '';
  }

  return stack.reduce((acc: number, item: number) => acc + item, 0);
};

console.log(calculate('3+2*2')); // 7
console.log(calculate(' 3/2 ')); // 1
console.log(calculate(' 3+5 / 2 ')); // 5
