const findArray = (pref: number[]): number[] => {
  const res: number[] = [];

  for (let i = 0; i < pref.length; i += 1) {
    res[i] = pref[i] ^ pref[i - 1];
  }

  return res;
};

export default findArray;
