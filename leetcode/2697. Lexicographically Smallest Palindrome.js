var makeSmallestPalindrome = function (s) {
  const arr = Array.from(s);

  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (arr[left] < arr[right]) arr[right] = arr[left];
    if (arr[left] > arr[right]) arr[left] = arr[right];

    left++;
    right--;
  }

  return arr.join('');
};

console.log(makeSmallestPalindrome('egcfe')); // "efcfe"
console.log(makeSmallestPalindrome('abcd')); // "abba"
console.log(makeSmallestPalindrome('seven')); // "neven"
