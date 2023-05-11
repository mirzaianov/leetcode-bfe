var findMatrix = function (nums) {
  let output = [];
  let map = new Map();

  for (let num of nums) {
    let idx = map.get(num) || 0;
    let arr = output[idx] || [];

    arr.push(num);
    output[idx] = arr;
    map.set(num, idx + 1);
  }

  return output;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1])); // [[1,3,4,2],[1,3],[1]]
// console.log(findMatrix([1, 2, 3, 4])); // [[4,3,2,1]]
