function confirmEnding(str, target) {
  let regExp = new RegExp(`${target}$`);
  let result = regExp.test(str);
  return result;
}

confirmEnding("Bastian", "n");
