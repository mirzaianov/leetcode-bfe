const replaceDigits = (s: string): string => {
  let res = '';

  for (let i = 0; i < s.length; i += 2) {
    const letter: string = s[i];
    const digit: string = s[i + 1];

    if (!digit) {
      res += letter;
    } else {
      const target: string = String.fromCharCode(letter.charCodeAt(0) + Number(digit));

      res += letter + target;
    }
  }

  return res;
};

export default replaceDigits;
