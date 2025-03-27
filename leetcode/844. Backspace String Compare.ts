const typedString = (s: string): string => {
  const stack: string[] = [];

  for (const l of s) {
    l === '#' ? stack.pop() : stack.push(l);
  }

  return stack.join('');
};

const backspaceCompare = (s: string, t: string): boolean => typedString(s) === typedString(t);

export default backspaceCompare;
