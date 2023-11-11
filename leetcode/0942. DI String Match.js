var diStringMatch = function (s) {
  let left = 0;
  let right = s.length;
  let i = 0;

  let res = [];

  while (s[i]) {
    if (s[i] === 'I') {
      res.push(left);
      left++;
    }

    if (s[i] === 'D') {
      res.push(right);
      right--;
    }

    i++;
  }

  res.push(left);

  return res;
};
