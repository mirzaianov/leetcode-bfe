const isSameLetter = (letter1: string, letter2: string): boolean => {
  if (letter1 !== letter2 && letter1.toLowerCase() === letter2.toLowerCase()) {
    return true;
  }

  return false;
};

const makeGood = (s: string): string => {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i += 1) {
    const curr: string = s[i];
    const last: string | undefined = stack.length > 0 ? stack.at(-1) : undefined;

    if (last && isSameLetter(curr, last)) {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }

  return stack.join('');
};

export default makeGood;
