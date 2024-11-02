const numberOfEmployeesWhoMetTarget = (hours: number[], target: number): number =>
  hours.filter((hour) => hour >= target).length;

export default numberOfEmployeesWhoMetTarget;
