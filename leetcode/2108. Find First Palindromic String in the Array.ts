const isPalindrome = (s: string): boolean => {
  let l = 0;
  let r: number = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false;

    l += 1;
    r -= 1;
  }

  return true;
};

const firstPalindrome = (words: string[]): string => {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  }

  return '';
};

export default firstPalindrome;
