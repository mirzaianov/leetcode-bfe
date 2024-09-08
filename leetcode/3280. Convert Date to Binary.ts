const convertDateToBinary = (date: string): string => {
  const [year, month, day]: string[] = date.split('-').map((item) => Number(item).toString(2));

  return `${year}-${month}-${day}`;
};

export default convertDateToBinary;
