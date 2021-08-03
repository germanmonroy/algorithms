function reverseString(str) {
  let arr = str.split('')
  let newArr = []
  let reversedStr;
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i])
  }
  reversedStr = "".concat(...newArr)
  return reversedStr;
}

reverseString("hello");