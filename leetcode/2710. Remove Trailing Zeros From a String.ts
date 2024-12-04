const removeTrailingZeros = (num: string): string => {
  let lastIndex = num.length;

  for (let i = num.length - 1; i >= 0; i -= 1) {
    if (num[i] !== '0') break;

    lastIndex = i;
  }

  return num.slice(0, lastIndex);
};

export default removeTrailingZeros;
