const digitSum = (s: string, k: number): string => {
  let res: string = s;

  while (res.length > k) {
    const arr: string[] = [];

    for (let i = 0; i < res.length; i += k) {
      const curr: string = res
        .slice(i, i + k)
        .split('')
        .reduce((acc, item) => acc + Number(item), 0)
        .toString();

      arr.push(curr);
    }

    res = arr.join('');
  }

  return res;
};

export default digitSum;
