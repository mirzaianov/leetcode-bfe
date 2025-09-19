const findingUsersActiveMinutes = (logs: number[][], k: number): number[] => {
  const map = new Map<number, Set<number>>();

  for (const [id, time] of logs) {
    let curr: Set<number>;

    map.has(id) ? (curr = map.get(id)!) : (curr = new Set<number>());

    curr.add(time);
    map.set(id, curr);
  }

  const res: number[] = new Array(k).fill(0);

  for (const [, value] of map) {
    res[value.size - 1] += 1;
  }

  return res;
};

export default findingUsersActiveMinutes;
