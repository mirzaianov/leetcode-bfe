type CashKey = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type CashValue = string;

const letterCombinations = (digits: string): string[] => {
  const len: number = digits.length;

  if (!len) return [];

  const cash: Record<CashKey, CashValue> = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const res: string[] = [];

  const backtrack = (index: number, letter: string): void => {
    if (index === len) {
      res.push(letter);
      return;
    }

    const currentDigit: string = digits[index];
    if (!cash.hasOwnProperty(currentDigit)) {
      throw new Error(`Digit ${currentDigit} is not a valid key.`);
    }

    for (const item of cash[currentDigit as CashKey]) {
      backtrack(index + 1, letter + item);
    }
  };

  backtrack(0, '');

  return res;
};

export default letterCombinations;
