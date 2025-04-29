type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

const expect = (val: any): ToBeOrNotToBe => ({
  toBe: (newVal: any): boolean => {
    if (val === newVal) return true;

    throw new Error('Not Equal');
  },
  notToBe: (newVal: any): boolean => {
    if (val !== newVal) return true;

    throw new Error('Equal');
  },
});

export default expect;
