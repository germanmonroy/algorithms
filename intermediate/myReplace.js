function myReplace(str, before, after) {
  return str
    .split(" ")
    .map((x) =>
      x == before
        ? x[0] == x[0].toUpperCase()
          ? after[0].toUpperCase() + after.slice(1)
          : after.toLowerCase()
        : x
    )
    .join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");