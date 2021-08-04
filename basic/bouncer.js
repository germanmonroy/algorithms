function bouncer(arr) {
  let truthyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) truthyArr.push(arr[i]);
  }
  return truthyArr;
}

bouncer([7, "ate", "", false, 9]);
