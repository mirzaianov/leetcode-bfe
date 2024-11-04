type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

const chunk = (arr: Obj[], size: number): Obj[][] => {
  const res: Obj[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
};

export default chunk;
