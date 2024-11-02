const defangIPaddr = (address: string): string => address.replace(/\./g, '[.]');

export default defangIPaddr;
