const createInfiniteObject = (): Record<string, () => string> =>
  new Proxy(
    {},
    {
      get: (_, prop) => () => prop.toString(),
    },
  );

export default createInfiniteObject;
