var createCounter = function (init) {
  let curr = init;
  return {
    increment: () => ++curr,
    decrement: () => --curr,
    reset: () => (curr = init),
  };
};
