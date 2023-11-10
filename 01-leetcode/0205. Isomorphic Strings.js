// const isIsomorphic = function(s, t) {
//   const sToMap = stringToMap(s);
//   const tToMap = stringToMap(t);
//   const sToNum = mapToNum(sToMap, s);
//   const tToNum = mapToNum(tToMap, t);

//   return sToNum === tToNum;

//   function mapToNum (object, string) {
//       let result = '';

//       for (let i = 0; i < string.length; i++) {
//           const value = object[string[i]]

//           result += value;
//       }

//       return result;
//   }

//   function stringToMap (string) {
//       const map = {};

//       for (let i = 0; i < string.length; i++) {
//           map[string[i]] = map[string[i]] ? map[string[i]] : i;
//       }

//       return map;
//   }
// };

const isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }

  return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
