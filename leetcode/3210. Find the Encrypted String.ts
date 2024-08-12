const getEncryptedString = (s: string, k: number): string => {
  const len = s.length;

  if (k === len) return s;

  if (k > len) k %= len;

  return s.slice(k) + s.slice(0, k);
};

export default getEncryptedString;
