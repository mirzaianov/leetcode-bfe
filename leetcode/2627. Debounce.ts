type F = (...args: number[]) => void;

const debounce = (fn: F, t: number): F => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};

export default debounce;
