const isIsomorphic = (s: string, t: string): boolean => {
  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }

  return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
