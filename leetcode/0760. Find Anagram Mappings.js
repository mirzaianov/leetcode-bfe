const anagramMappings = (a, b) => {
  const res = [];

  for (let i = 0; i < a.length; i += 1) {
    res.push(b.indexOf(a[i]));
  }

  return res;
};
