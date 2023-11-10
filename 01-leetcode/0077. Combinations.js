var combine = function (n, k) {
  let result = [];

  dfs(1, []);

  return result;

  function dfs(index, current) {
    // base case
    if (current.length === k) result.push([...current]);

    for (let i = index; i <= n; i++) {
      current.push(i);

      // recurse
      dfs(i + 1, current);

      // backtrack
      current.pop();
    }
  }
};

console.log(combine(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(1, 1)); // [[1]]
