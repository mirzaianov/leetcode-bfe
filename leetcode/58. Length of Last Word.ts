const lengthOfLastWord = (s: string): number => {
  let len = 0;
  let isStarted = false;

  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (!isStarted && s[i] !== ' ') {
      isStarted = true;
      len += 1;
    } else if (isStarted && s[i] !== ' ') {
      len += 1;
    } else if (isStarted && s[i] === ' ') {
      return len;
    }
  }

  return len;
};

export default lengthOfLastWord;
