function spinalCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/\s+/)
    .join("-")
    .replace(/_/g, "-");
}

spinalCase("This Is Spinal Tap");
spinalCase("AllThe-small Things");
spinalCase("The_Andy_Griffith_Show");
