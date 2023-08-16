// var destCity = function (paths) {
//   const map = new Map();
//   const flat = paths.flat();

//   for (let city of flat) {
//     map.get(city) ? map.set(city, map.get(city) + 1) : map.set(city, 1);
//   }

//   const mapOne = new Map();

//   for (let [key, value] of map.entries()) {
//     if (value === 1) mapOne.set(key, 1);
//   }

//   for (let i = 0; i < paths.length; i++) {
//     if (mapOne.has(paths[i][1])) return paths[i][1];
//   }

//   return -1;
// };

var destCity = function (paths) {
  let set = new Set();

  for (let path of paths) {
    set.add(path[0]);
  }

  for (let path of paths) {
    if (!set.has(path[1])) {
      return path[1];
    }
  }
};

console.log(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo'],
  ]),
); // Sao Paulo
console.log(
  destCity([
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A'],
  ]),
); // A
console.log(destCity([['A', 'Z']])); // Z
