var subsets = function (nums) {
  let res = [[]];

  for (let i = 0; i < nums.length; i++) {
    const sub = [];

    for (let j = 0; j < res.length; j++) {
      sub.push([...res[j], nums[i]]);
    }

    res.push(...sub);
  }

  return res;
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
