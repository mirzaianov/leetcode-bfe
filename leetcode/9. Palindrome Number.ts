const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;

  let original: number = x;
  let reversed = 0;

  while (original) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }

  return x === reversed;
};

export default isPalindrome;
