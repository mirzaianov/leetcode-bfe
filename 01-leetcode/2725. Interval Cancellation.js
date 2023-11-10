var cancellable = function (fn, args, t) {
  fn(...args);

  const muFunc = setInterval(() => fn(...args), t);

  return (cancelFn = () => clearInterval(muFunc));
};
