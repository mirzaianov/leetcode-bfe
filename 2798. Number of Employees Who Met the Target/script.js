var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter(item => item >= target).length;
};
