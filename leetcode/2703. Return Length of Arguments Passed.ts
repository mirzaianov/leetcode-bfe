type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

const argumentsLength = (...args: JSONValue[]): number => args.length;

export default argumentsLength;
