const largestOddNumber = (num: string): string => {
  for (let i = num.length - 1; i >= 0; i -= 1) {
    if (Number(num[i]) & 1) return num.slice(0, i + 1);
  }

  return '';
};

export default largestOddNumber;
