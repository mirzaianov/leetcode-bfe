// const minPartitions = (n) => Math.max(...n);

var minPartitions = function (n) {
  let res = 0;
  for (let i = 0; i < n.length; i++) {
    if (+n[i] > res) {
      res = n[i];
    }
  }
  return res;
};

console.log(minPartitions('32')); // 3
console.log(minPartitions('82734')); // 8
console.log(minPartitions('27346209830709182346')); // 9
