// const topKFrequent = (nums: number[], k: number): number[] => {
//   const map = new Map<number, number>();

//   for (const num of nums) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }

//   return Array.from(map.keys())
//     .sort((a, b) => map.get(b)! - map.get(a)!)
//     .splice(0, k);
// };

// #2

const topKFrequent = (nums: number[], k: number): number[] => {
  const map = new Map<number, number>();
  const buckets = new Array<number[]>(nums.length + 1);

  for (let i = 0; i < buckets.length; i += 1) {
    buckets[i] = [];
  }

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, count] of map.entries()) {
    buckets[count].push(num);
  }

  const flat = buckets.flat();

  return flat.slice(flat.length - k);
};
