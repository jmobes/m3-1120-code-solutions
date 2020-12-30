/* eslint-disable no-unused-vars */
function lastChars(len, str) {
  if (len > str.length) return str;
  return str.slice(str.length - len);
}
