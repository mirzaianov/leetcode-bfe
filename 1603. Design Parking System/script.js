var ParkingSystem = function (big, medium, small) {
  this.count = [null, big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.count[carType]) {
    this.count[carType]--;
    return true;
  }

  return false;
};
