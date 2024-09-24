const findTheDifference = (s: string, t: string): string => {
  let xor = 0;

  for (const char of s) xor ^= char.charCodeAt(0);
  for (const char of t) xor ^= char.charCodeAt(0);

  return String.fromCharCode(xor);
};

export default findTheDifference;
