function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      newStr = newStr.concat("", str);
    }
    return newStr;
  }
  return "";
}

repeatStringNumTimes("abc", 3);
