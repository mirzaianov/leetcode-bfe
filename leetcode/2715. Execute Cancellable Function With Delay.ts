type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

const cancellable = (fn: Fn, args: JSONValue[], t: number): Function => {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  const cancelId = () => {
    clearTimeout(timeoutId);
  };

  return cancelId;
};

export default cancellable;
