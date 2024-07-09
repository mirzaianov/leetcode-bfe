const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
  const map = new Map<number, number[]>();

  for (let i = 0; i < numCourses; i += 1) {
    map.set(i, []);
  }

  for (const [crs, pre] of prerequisites) {
    if (map.has(crs)) {
      map.set(crs, [...map.get(crs)!, pre]);
    } else {
      map.set(crs, [pre]);
    }
  }

  const set = new Set<number>();

  const dfs = (crs: number): boolean => {
    if (set.has(crs)) return false;

    if (map.has(crs) && map.get(crs)!.length === 0) return true;

    set.add(crs);

    const preArr = map.get(crs)!;

    for (let i = 0; i < preArr.length; i += 1) {
      if (!dfs(preArr[i])) return false;
    }

    set.delete(crs);
    map.set(crs, []);

    return true;
  };

  for (let i = 0; i < numCourses; i += 1) {
    if (!dfs(i)) return false;
  }

  return true;
};

export default canFinish;
