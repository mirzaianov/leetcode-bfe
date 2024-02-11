const numJewelsInStones = (jewels: string, stones: string): number => {
  const set = new Set<string>(jewels);
  let count = 0;

  for (const stone of stones) {
    set.has(stone) ? (count += 1) : null;
  }

  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
