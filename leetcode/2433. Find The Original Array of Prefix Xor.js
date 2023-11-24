const findArray = (pref) => {
  const arr = [];
  const len = pref.length;

  for (let i = 0; i < len; i += 1) {
    arr[i] = pref[i] ^ pref[i - 1];
  }

  return arr;
};

console.log(findArray([5, 2, 0, 3, 1])); // [5,7,2,3,2]
