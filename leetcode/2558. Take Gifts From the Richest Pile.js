const pickGifts = (gifts, k) => {
  for (let i = 0; i < k; i += 1) {
    gifts.sort((a, b) => a - b);

    const old = gifts.pop();
    const last = Math.floor(Math.sqrt(old));

    gifts.push(last);
  }

  return gifts.reduce((acc, item) => acc + item, 0);
};

console.log(pickGifts([25, 64, 9, 4, 100], 4)); // 29
// console.log(pickGifts([1, 1, 1, 1], 4)); // 4
