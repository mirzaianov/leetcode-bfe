const toGoatLatin = (sentence: string): string => {
  const words: string[] = sentence.split(' ');
  const pattern: RegExp = /[aeiou]/i;
  const res: string[] = [];
  const appendix1: string = 'ma';
  const appendix2: string = 'a';

  for (let i = 0; i < words.length; i += 1) {
    let word: string = words[i];

    if (word[0].match(pattern)) {
      word += appendix1;
    } else {
      word = word.slice(1) + word[0] + appendix1;
    }

    word += appendix2.repeat(i + 1);

    res.push(word);
  }

  return res.join(' ');
};

export default toGoatLatin;
