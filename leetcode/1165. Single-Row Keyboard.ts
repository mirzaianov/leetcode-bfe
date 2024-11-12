const calculateTime = (keyboard: string, word: string): number => {
  const map = new Map<string, number>();

  for (let i = 0; i < keyboard.length; i += 1) {
    map.set(keyboard[i], i);
  }

  let count = 0;
  let index = 0;

  for (const letter of word) {
    const curr: number | undefined = map.get(letter);

    if (curr !== undefined) {
      count += Math.abs(index - curr);
      index = curr;
    }
  }

  return count;
};

export default calculateTime;
