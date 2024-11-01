type P = Promise<number>;

const addTwoPromises = async (promise1: P, promise2: P): P => (await promise1) + (await promise2);

export default addTwoPromises;
