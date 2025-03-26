const minLength = (s: string): number => {
  const stack: string[] = [];

  for (const l of s) {
    const last: string = stack.at(-1) || '';

    if ((last === 'A' && l === 'B') || (last === 'C' && l === 'D')) {
      stack.pop();
    } else {
      stack.push(l);
    }
  }

  return stack.length;
};

export default minLength;
