const countLetters = (s) => {
  let count = 0;
  let i = 0;

  while (s[i]) {
    count += 1;

    let j = i + 1;

    while (s[j] && s[j] === s[i]) {
      count += 1;
      j += 1;
    }

    i += 1;
  }

  return count;
};

console.log(countLetters('aabb')); // 6
