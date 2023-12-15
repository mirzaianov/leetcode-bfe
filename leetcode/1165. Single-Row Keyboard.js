const calculateTime = (keyboard, word) => {
  const map = new Map();

  for (let i = 0; i < keyboard.length; i += 1) {
    map.set(keyboard[i], i);
  }

  let count = 0;
  let index = 0;

  for (const letter of word) {
    count += Math.abs(index - map.get(letter));
    index = map.get(letter);
  }

  return count;
};

console.log(calculateTime('gsdwqxfavuhbimkeycptnrzljo', 'lintcode')); // 89
