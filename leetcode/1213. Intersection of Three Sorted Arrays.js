const arraysIntersection = (arr1, arr2, arr3) => {
  const store = new Map();

  const toMap = (array, map) => {
    for (const item of array) {
      map.set(item, map.get(item) + 1 || 1);
    }
  };

  toMap(arr1, store);
  toMap(arr2, store);
  toMap(arr3, store);

  const res = [];

  for (const [key, value] of store) {
    if (value === 3) res.push(key);
  }

  return res;
};

console.log(arraysIntersection([1, 2, 3], [2, 3, 4], [3, 4, 5])); // [3]
