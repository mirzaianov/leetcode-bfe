const canBeTypedWords = (text: string, brokenLetters: string): number => {
  const words: string[] = text.trim().split(' ');
  const brokenLettersSet: Set<string> = new Set(brokenLetters);
  let count = 0;

  for (const word of words) {
    let isValid = true;

    for (const letter of word) {
      if (brokenLettersSet.has(letter)) {
        isValid = false;
        break;
      }
    }

    if (isValid) count += 1;
  }

  return count;
};

export default canBeTypedWords;
