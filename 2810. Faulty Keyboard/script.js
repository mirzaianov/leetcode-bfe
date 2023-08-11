var finalString = function (s) {
  let res = '';

  for (item of s) {
    if (item === 'i') {
      res = res.split('').reverse().join('');
    } else {
      res += item;
    }
  }

  return res;
};
