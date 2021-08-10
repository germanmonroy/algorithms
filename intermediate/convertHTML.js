function convertHTML(str) {
  let tempStr = str.split("");
  for (let i = 0; i < tempStr.length; i++) {
    switch (tempStr[i]) {
      case "<":
        tempStr[i] = "&lt;";
        break;
      case "&":
        tempStr[i] = "&amp;";
        break;
      case ">":
        tempStr[i] = "&gt;";
        break;
      case '"':
        tempStr[i] = "&quot;";
        break;
      case "'":
        tempStr[i] = "&apos;";
        break;
    }
  }
  tempStr = tempStr.join("");
  return tempStr;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")