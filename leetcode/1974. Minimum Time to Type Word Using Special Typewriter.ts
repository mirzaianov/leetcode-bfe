const minTimeToType = (word: string): number => {
  let curr = 'a';
  let count = 0;

  for (const char of word) {
    const diff = Math.abs(curr.charCodeAt(0) - char.charCodeAt(0));

    diff > 13 ? (count += 26 - diff + 1) : (count += diff + 1);
    curr = char;
  }

  return count;
};

export default minTimeToType;
