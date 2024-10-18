const kthCharacter = (k: number): string => {
  let word = 'a';

  while (word.length <= k) {
    let temp: string = '';

    for (const l of word) {
      if (l === 'z') {
        temp += 'a';
      } else {
        temp += String.fromCharCode(l.charCodeAt(0) + 1);
      }
    }

    word += temp;
  }

  return word[k - 1];
};

export default kthCharacter;
