class ParkingSystem {
  parkingSpaces: number[];

  constructor(big: number, medium: number, small: number) {
    this.parkingSpaces = [big, medium, small];
  }

  addCar(carType: number): boolean {
    if (this.parkingSpaces[carType - 1] > 0) {
      this.parkingSpaces[carType - 1] -= 1;

      return true;
    }

    return false;
  }
}

export default ParkingSystem;
