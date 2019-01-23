function produceDrivingRange(blockRange) {
  return function (b1, b2) {
    let range = parseInt(b2) - parseInt(b1);
    if (range < blockRange) {
      return `within range by ${blockRange - range}`
    } else {
      return `${range- blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(calculateTip) {
    return calculateTip * tip;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
