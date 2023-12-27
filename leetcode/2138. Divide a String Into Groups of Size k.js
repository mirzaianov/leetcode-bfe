const divideString = (s, k, fill) => {
  const arr = s.split('');

  while (arr.length % k !== 0) {
    arr.push(fill);
  }

  const res = [];
  let i = 0;

  while (arr[i]) {
    const current = arr.slice(i, i + k).join('');

    res.push(current);
    i += k;
  }

  return res;
};
