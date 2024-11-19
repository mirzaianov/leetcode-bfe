type Fn = (...params: any[]) => Promise<any>;

const timeLimit =
  (fn: Fn, t: number): Fn =>
  async (...args) => {
    const originalFnPromise: Promise<any> = fn(...args);
    const timeoutPromise: Promise<Error> = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });

    return Promise.race([originalFnPromise, timeoutPromise]);
  };

export default timeLimit;
