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

    return status;
  };

  const pushRes = (arr, row) => {
    for (let i = 0; i < arr.length; i += 1) {
      const word = arr[i];
      const checkOne = checkWord(word, row);

      if (checkOne) res.push(word);
    }
  };

  pushRes(words, rowOne);
  pushRes(words, rowTwo);
  pushRes(words, rowThree);

  return res;
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])); // ["Alaska","Dad"]
console.log(findWords(['omk'])); // []
console.log(findWords(['adsdf', 'sfd'])); // ["adsdf","sfd"]
