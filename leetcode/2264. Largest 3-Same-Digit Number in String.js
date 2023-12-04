const largestGoodInteger = (num) => {
  let res = '';

  for (let i = 0; i < num.length - 2; i += 1) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      const current = `${num[i]}${num[i + 1]}${num[i + 2]}`;

      current > res ? (res = current) : null;
    }
  }

  return res;
};
