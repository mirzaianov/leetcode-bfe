const findDelayedArrivalTime = (arrivalTime: number, delayedTime: number): number =>
  (arrivalTime + delayedTime) % 24;

export default findDelayedArrivalTime;
