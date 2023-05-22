var letterCasePermutation = function (s) {
  let n = s.length;
  let res = [];
  let char = /[a-zA-Z]/;
  let arr = [];

  function backtrack(i) {
    if (i === n) {
      res.push(arr.join(''));
      return;
    }

    if (char.test(s[i])) {
      arr[i] = s[i].toLowerCase();
      backtrack(i + 1);
      arr[i] = s[i].toUpperCase();
      backtrack(i + 1);
    } else {
      arr[i] = s[i];
      backtrack(i + 1);
    }
  }

  backtrack(0);
  return res;
};

console.log(letterCasePermutation('a1b2')); // ["a1b2","a1B2","A1b2","A1B2"]
