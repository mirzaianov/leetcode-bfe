var halvesAreAlike = function (s) {
  const vowels = 'aeiouAEIOU'.split('');
  const halfIndex = s.length / 2;
  const a = s.slice(0, halfIndex);
  const b = s.slice(halfIndex);

  return counter(a, vowels) === counter(b, vowels);

  function counter(string, array) {
    let counter = 0;

    for (let letter of string) {
      if (array.includes(letter)) counter++;
    }

    return counter;
  }
};

console.log(halvesAreAlike('book')); // true
console.log(halvesAreAlike('textbook')); // false
