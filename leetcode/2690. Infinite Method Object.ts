function createInfiniteObject(): Record<string, () => string> {
  return new Proxy(
    {},
    {
      get: (_, prop) => () => prop.toString(),
    },
  );
}

export default createInfiniteObject;
