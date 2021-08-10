function diffArray(arr1, arr2) {
  let combinedArr = arr1.concat(arr2);
  let newArr = combinedArr.filter(
    (el) => !arr1.includes(el) || !arr2.includes(el)
  );
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
