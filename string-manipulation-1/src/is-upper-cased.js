/* eslint-disable no-unused-vars */
function isUpperCased(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
