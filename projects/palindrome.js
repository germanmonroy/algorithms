function palindrome(str) {
  const sanitizedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const arr1 = sanitizedStr.split("");
  const arr2 = [...arr1].reverse();
  function arrayEquals(arr1, arr2) {
    return (
      Array.isArray(arr1) &&
      Array.isArray(arr2) &&
      arr1.length === arr2.length &&
      arr1.every((val, index) => val === arr2[index])
    );
  }
  return arrayEquals(arr1, arr2);
}

console.log(palindrome("eye"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("A man, a plan, a canal. Panama"));
