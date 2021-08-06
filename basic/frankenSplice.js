function frankenSplice(arr1, arr2, n) {
  const arr1Copy = arr1.slice();
  const arr2Copy = arr2.slice();
  arr2Copy.splice(n, 0, ...arr1Copy);
  return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
