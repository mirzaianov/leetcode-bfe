const isPrefixOfWord = (sentence: string, searchWord: string): number => {
  const array: string[] = sentence.split(' ');
  const regex: RegExp = new RegExp(`^${searchWord}`);

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].match(regex)) return i + 1;
  }

  return -1;
};

export default isPrefixOfWord;
