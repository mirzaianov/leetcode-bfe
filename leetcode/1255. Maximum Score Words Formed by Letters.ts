const getScore = (word: string, score: number[]): number => {
  let sum = 0;

  for (const ch of word) {
    sum += score[ch.charCodeAt(0) - 97];
  }

  return sum;
};

const canForm = (word: string, counts: number[]): boolean => {
  const temp: number[] = [...counts];

  for (const ch of word) {
    const idx: number = ch.charCodeAt(0) - 97;

    if (temp[idx] === 0) return false;

    temp[idx] -= 1;
  }

  return true;
};

const maxScoreWords = (words: string[], letters: string[], score: number[]): number => {
  const letterCount: number[] = new Array(26).fill(0);

  for (const ch of letters) {
    letterCount[ch.charCodeAt(0) - 97] += 1;
  }

  const backtrack = (index: number, counts: number[]): number => {
    if (index === words.length) return 0;

    let max: number = backtrack(index + 1, counts);

    const word: string = words[index];

    if (canForm(word, counts)) {
      const updatedCounts = [...counts];

      for (const ch of word) {
        updatedCounts[ch.charCodeAt(0) - 97] -= 1;
      }

      const scoreWithWord = getScore(word, score) + backtrack(index + 1, updatedCounts);

      max = Math.max(max, scoreWithWord);
    }

    return max;
  };

  return backtrack(0, letterCount);
};

export default maxScoreWords;
