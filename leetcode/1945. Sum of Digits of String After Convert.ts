const transformNum = (n: string, k: number): number => {
  let res: string = n;

  while (k) {
    res = res
      .split('')
      .reduce((acc, item) => acc + Number(item), 0)
      .toString();

    k -= 1;
  }

  return Number(res);
};

const getLucky = (s: string, k: number): number => {
  let res = '';

  for (const l of s) {
    res += String(l.charCodeAt(0) - 96);
  }

  return transformNum(res, k);
};

export default getLucky;
