function debounce(func, wait) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), wait);
  };
}
