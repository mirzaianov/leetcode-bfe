const isValidChar = (l: string): boolean => /^[A-Za-z]$/.test(l);

const reverseOnlyLetters = (s: string): string => {
  const stack: string[] = [...s].filter(isValidChar);

  return [...s].map((char) => (isValidChar(char) ? stack.pop() : char)).join('');
};

export default reverseOnlyLetters;
