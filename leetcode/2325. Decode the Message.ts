const toAlphabetMap = (s: string): Map<string, string> => {
  const map = new Map<string, string>();
  let i = 97;

  for (const l of s) {
    if (l.match(/[a-z]/) && !map.has(l)) {
      map.set(l, String.fromCharCode(i));
      i += 1;
    }
  }

  return map;
};

const decodeMessage = (key: string, message: string): string => {
  const newAlphabet: Map<string, string> = toAlphabetMap(key);

  let res = '';

  for (const l of message) {
    if (l.match(/[a-z]/)) {
      res += newAlphabet.get(l);
    } else {
      res += l;
    }
  }

  return res;
};

export default decodeMessage;
