function compareNumbers(a, b) {
  return a - b;
}

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(compareNumbers);
  const index = (el) => el === num;
  return arr.findIndex(index);
}

getIndexToIns([40, 60], 50);
