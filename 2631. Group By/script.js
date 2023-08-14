Array.prototype.groupBy = function (fn) {
  const ans = {};

  for (let el of this) {
    const key = fn(el);

    ans[key] = ans[key] ?? [];
    ans[key].push(el);
  }

  return ans;
};
