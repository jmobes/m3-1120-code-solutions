/* eslint-disable no-unused-vars */
function ransomCase(str) {
  let res = str[0].toLowerCase();
  for (let i = 1; i < str.length; i++) {
    if (i % 2 === 0) {
      res += str[i].toLowerCase();
    } else {
      res += str[i].toUpperCase();
    }
  }
  return res;
}
