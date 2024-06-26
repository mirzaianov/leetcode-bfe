const getNextStates = (s = '0000'): string[] => {
  const ans: string[] = [];

  for (let i = 0; i < s.length; i += 1) {
    ans.push(s.slice(0, i) + ((Number(s[i]) + 1) % 10).toString() + s.slice(i + 1));
    ans.push(s.slice(0, i) + ((Number(s[i]) + 9) % 10).toString() + s.slice(i + 1));
  }

  return ans;
};

const openLock = (deadends: string[], target: string): number => {
  const dead = new Set<string>(deadends);
  const queue: [string, number][] = [['0000', 0]];
  const seen = new Set<string>(['0000']);

  for (const [curr, turns] of queue) {
    if (curr === target) return turns;
    if (!dead.has(curr)) {
      for (const next of getNextStates(curr)) {
        if (!seen.has(next)) {
          seen.add(next);
          queue.push([next, turns + 1]);
        }
      }
    }
  }

  return -1;
};
