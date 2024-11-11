type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

const isEmpty = (obj: Obj): boolean => {
  if (!Object.values(obj).length) return true;

  return false;
};

export default isEmpty;
