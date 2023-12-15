const removeVowels = (s) => {
  const vowels = `aeiou`;
  const arr = [];

  for (const letter of s) {
    if (!vowels.includes(letter)) arr.push(letter);
  }

  return arr.join('');
};
