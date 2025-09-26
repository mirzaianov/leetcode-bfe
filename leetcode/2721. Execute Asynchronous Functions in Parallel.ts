type Fn<T> = () => Promise<T>;

const promiseAll = <T>(functions: Fn<T>[]): Promise<T[]> =>
  new Promise<T[]>((resolve, reject) => {
    if (functions.length === 0) resolve([]);

    const res: T[] = new Array(functions.length).fill(null);

    let resolvedCount = 0;

    functions.forEach(async (el, idx) => {
      try {
        const subResult: T = await el();

        res[idx] = subResult;
        resolvedCount += 1;

        if (resolvedCount === functions.length) resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  });

export default promiseAll;
