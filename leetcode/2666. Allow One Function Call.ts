type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

const once = (fn: Function): OnceFn => {
  let isCalled = false;

  return (...args) => {
    if (isCalled) return undefined;

    isCalled = true;

    return fn(...args);
  };
};

export default once;
