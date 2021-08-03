/*
  C = 5/9 * (F - 32)
  F = C * 9.0 / 5 + 32
*/

class Thermostat {
  constructor(temp) {
    this._temp = temp;
  }

  get temperature() {
    return (5 / 9) * (this._temp - 32);
  }

  set temperature(temp) {
    this._temp = (temp * 9) / 5 + 32;
  }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log("temp:", temp)
thermos.temperature = 26;
temp = thermos.temperature;
console.log("new temp:", temp)