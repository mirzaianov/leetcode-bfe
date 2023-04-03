const averageOfLevels = function (root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    let row = 0;
    let queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();

      row += current.val;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    result.push(row / queueLength);
  }

  return result;
};
