const toGoatLatin = (sentence) => {
  const vowels = `aeiouAEIOU`.split('');
  const words = sentence.split(' ');
  const len = words.length;
  const res = [];

  for (let i = 0; i < len; i += 1) {
    let word = words[i];

    if (vowels.includes(word[0])) {
      word += 'ma';
    } else {
      word = word.slice(1) + word[0] + 'ma';
    }

    word += 'a'.repeat(i + 1);

    res.push(word);
  }

  return res.join(' ');
};
