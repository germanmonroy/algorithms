function titleCase(str) {
  let newStr = str.toLowerCase();
  let arr = newStr.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) arr[0] = arr[0].toUpperCase();
    if (arr[i] === " ") arr[i + 1] = arr[i + 1].toUpperCase();
  }
  newStr = "".concat(...arr);
  return newStr;
}

titleCase("sHoRt AnD sToUt");