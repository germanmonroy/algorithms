function findLongestWordLength(str) {
  const arrWords = str.split(" ");
  const arrNum = [];
  for (let i = 0; i < arrWords.length; i++) {
    arrNum.push(arrWords[i].length);
  }
  return Math.max(...arrNum);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
