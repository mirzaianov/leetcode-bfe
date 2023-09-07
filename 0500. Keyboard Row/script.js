const findWords = function (words) {
  const rowOne = 'qwertyuiopQWERTYUIOP';
  const rowTwo = 'asdfghjklASDFGHJKL';
  const rowThree = 'zxcvbnmZXCVBNM';

  const res = [];

  const checkWord = (w, row) => {
    let status = true;

    for (let i = 0; i < w.length; i += 1) {
      const letter = w[i];

      status = status && row.includes(letter);
    }

    if (status === true) return w;
    else return null;
  };

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];

    const checkOne = checkWord(word, rowOne);

    if (checkOne !== null) res.push(checkOne);
  }

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];

    const checkTwo = checkWord(word, rowTwo);

    if (checkTwo !== null) res.push(checkTwo);
  }

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];

    const checkThree = checkWord(word, rowThree);

    if (checkThree !== null) res.push(checkThree);
  }

  return res;
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])); // ["Alaska","Dad"]
console.log(findWords(['omk'])); // []
console.log(findWords(['adsdf', 'sfd'])); // ["adsdf","sfd"]
