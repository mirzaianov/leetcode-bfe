var countSeniors = function (details) {
  return details.filter((item) => +item.slice(11, 13) > 60).length;
};
