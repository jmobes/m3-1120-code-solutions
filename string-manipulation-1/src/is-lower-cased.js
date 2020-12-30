/* eslint-disable no-unused-vars */
function isLowerCased(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
