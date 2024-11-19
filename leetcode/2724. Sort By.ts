type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

const sortBy = (arr: JSONValue[], fn: Fn): JSONValue[] => arr.sort((a, b) => fn(a) - fn(b));

export default sortBy;
