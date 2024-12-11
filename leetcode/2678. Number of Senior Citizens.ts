const countSeniors = (details: string[]): number =>
  details.filter((d) => Number(d.slice(11, 13)) > 60).length;

export default countSeniors;
