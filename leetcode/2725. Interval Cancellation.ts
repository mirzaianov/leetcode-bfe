type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

const cancellable = (fn: Fn, args: JSONValue[], t: number): Function => {
  fn(...args);

  const muFunc = setInterval(() => fn(...args), t);

  return () => clearInterval(muFunc);
};

export default cancellable;
