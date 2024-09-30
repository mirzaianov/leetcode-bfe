const isCircularSentence = (sentence: string): boolean => {
  const array: string[] = sentence.split(' ');
  const len: number = array.length;

  if (array[0][0] !== array.at(-1)!.at(-1)) return false;

  for (let i = 0; i < len - 1; i += 1) {
    if (array.at(i)!.at(-1) !== array.at(i + 1)!.at(0)) return false;
  }

  return true;
};

export default isCircularSentence;
