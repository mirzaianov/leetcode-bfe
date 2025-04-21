const titleToNumber = (columnTitle: string): number => {
  let res = 0;
  let dec = 1;

  for (let i = columnTitle.length - 1; i >= 0; i -= 1) {
    const curr: number = columnTitle[i].charCodeAt(0) - 64;

    res += dec * curr;
    dec *= 26;
  }

  return res;
};

export default titleToNumber;
