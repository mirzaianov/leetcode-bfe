const isStrictlyPalindromic = (n) => {
  const isPalindrom = (string) => {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
      if (string[left] !== string[right]) return false;

      left += 1;
      right -= 1;
    }

    return true;
  };

  for (let i = 2; i <= n - 2; i += 1) {
    const str = n.toString(i);

    if (!isPalindrom(str)) return false;
  }

  return true;
};

console.log(isStrictlyPalindromic(9)); // false
console.log(isStrictlyPalindromic(4)); // false
