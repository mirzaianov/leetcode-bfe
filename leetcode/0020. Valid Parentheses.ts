const isValid = (s: string): boolean => {
  if (s.length % 2 !== 0) return false;

  const store: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i += 1) {
    const currentInS: string = s[i];
    const currentInStore: string | undefined = store[currentInS];
    const lastInStack: string | undefined = stack[stack.length - 1];

    if (stack.length !== 0 && currentInStore === lastInStack) {
      stack.pop();
    } else {
      stack.push(currentInS);
    }
  }

  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('{([)]}')); // false
console.log(isValid('[{(])[]]}')); // false
