const sortVowels = (s: string): string => {
  const pattern = /[aeiou]/i;
  const res: string[] = s.split('');
  const vowels: string[] = res.filter((item) => item.match(pattern)).sort();
  let j = 0;

  for (let i = 0; i < res.length; i += 1) {
    if (res[i].match(pattern)) {
      res[i] = vowels[j];
      j += 1;
    }
  }

  return res.join('');
};

export default sortVowels;
