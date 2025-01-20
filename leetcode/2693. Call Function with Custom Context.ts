type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

interface Function {
  callPolyfill(context: Record<string, JSONValue>, ...args: JSONValue[]): JSONValue;
}

Function.prototype.callPolyfill = function (context, ...args): JSONValue {
  Object.defineProperty(context, 'fn', {
    value: this,
    enumerable: false,
  });

  return (context.fn as any)(...args);
};
