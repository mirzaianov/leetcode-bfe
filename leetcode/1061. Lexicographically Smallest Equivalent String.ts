const smallestEquivalentString = (s1: string, s2: string, baseStr: string): string => {
  const store: Record<string, string> = {};

  for (let i = 0; i < 26; i += 1) {
    const val: string = String.fromCharCode(i + 97);

    store[val] = val;
  }

  const getMinValue = (s: string): string => {
    if (store[s] !== s) {
      store[s] = getMinValue(store[s]);
    }

    return store[s];
  };

  for (let i = 0; i < s1.length; i += 1) {
    const val1: string = s1[i];
    const minVal1: string = getMinValue(val1);

    const val2: string = s2[i];
    const minVal2: string = getMinValue(val2);

    const min: string = minVal1 < minVal2 ? minVal1 : minVal2;

    store[minVal1] = min;
    store[minVal2] = min;
  }

  const res: string[] = [];

  for (const s of baseStr) {
    res.push(getMinValue(s));
  }

  return res.join('');
};

export default smallestEquivalentString;
