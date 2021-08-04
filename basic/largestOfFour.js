function largestOfFour(arr) {
  const arrOfLargestNumbers = []
  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i]
    arrOfLargestNumbers.push(Math.max(...currentArr))
  }
  return arrOfLargestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);