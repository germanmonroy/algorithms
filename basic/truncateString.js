function truncateString(str, num) {
  if (str.length > num) {
    const ellipsis = "...";
    const arr = str.split("");
    arr.splice(num, arr.length - num, ellipsis);
    let newStr = "".concat(...arr);
    return newStr;
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
