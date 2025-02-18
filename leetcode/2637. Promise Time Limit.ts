type Fn = (...params: any[]) => Promise<any>;

const timeLimit =
  (fn: Fn, t: number): Fn =>
  async (...args) => {
    const fnPromise = fn(...args);
    const racePromise = new Promise((_, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t);
    });

    return Promise.race([fnPromise, racePromise]);
  };

export default timeLimit;
