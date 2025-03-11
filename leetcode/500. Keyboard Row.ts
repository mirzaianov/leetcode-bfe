const isInOneRow = (word: string): boolean => {
  const row1: string = 'qwertyuiop';
  const row2: string = 'asdfghjkl';
  const row3: string = 'zxcvbnm';
  const rows: number[] = [];

  for (const letter of word) {
    const curr: string = letter.toLowerCase();

    if (row1.includes(curr)) {
      rows.push(1);
    } else if (row2.includes(curr)) {
      rows.push(2);
    } else if (row3.includes(curr)) {
      rows.push(3);
    }
  }

  return rows.every((item) => item === rows[0]);
};

const findWords = (words: string[]): string[] => {
  const res: string[] = [];

  for (const word of words) {
    if (isInOneRow(word)) res.push(word);
  }

  return res;
};

export default findWords;
