const isValid = (s: string): boolean => {
  if (s.length < 2 || s.length % 2 !== 0) return false;

  const stack: string[] = [];
  const map = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  for (const l of s) {
    if (!map.has(l) || stack.at(-1) !== map.get(l)) {
      stack.push(l);
    }

    if (stack.at(-1) === map.get(l)) {
      stack.pop();
    }
  }

  return stack.length === 0;
};

export default isValid;
