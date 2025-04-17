const addDigits = (num: number): number => {
  if (!num) return 0;

  const rem: number = num % 9;

  return rem === 0 ? 9 : rem;
};

export default addDigits;
