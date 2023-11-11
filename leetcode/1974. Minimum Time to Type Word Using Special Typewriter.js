var minTimeToType = function (word) {
  let curr = 'a';
  let count = 0;

  for (let char of word) {
    const diff = Math.abs(curr.charCodeAt(0) - char.charCodeAt(0));

    if (diff > 13) count += 26 - diff + 1;
    else count += diff + 1;

    curr = char;
  }

  return count;
};
