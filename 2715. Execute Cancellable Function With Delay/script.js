var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  const cancelId = () => {
    clearTimeout(timeoutId);
  };

  return cancelId;
};
