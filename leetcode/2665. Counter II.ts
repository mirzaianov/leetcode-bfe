type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

const createCounter = (init: number): Counter => {
  let curr: number = init;

  return {
    increment: () => (curr += 1),
    decrement: () => (curr -= 1),
    reset: () => (curr = init),
  };
};

export default createCounter;
