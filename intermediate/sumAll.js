function sumAll(arr) {
  const newArr = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return newArr.reduce(reducer);
}

sumAll([1, 4]);
