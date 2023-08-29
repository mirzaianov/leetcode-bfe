var checkDistances = function (s, distance) {
  const mapS = new Map();

  for (let i = 0; i < s.length; i++) {
    mapS.has(s[i]) ? mapS.set(s[i], Math.abs(mapS.get(s[i]) - i + 1)) : mapS.set(s[i], i);
  }

  const mapD = new Map();

  for (let k = 0; k < distance.length; k++) {
    mapD.set(String.fromCharCode(k + 97), distance[k]);
  }

  for (let [key, value] of mapS) {
    if (mapD.get(key) !== value) return false;
  }

  return true;
};

console.log(checkDistances('abaccb', [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // true
console.log(checkDistances('aa', [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // false
