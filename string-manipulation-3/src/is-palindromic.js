/* eslint-disable no-unused-vars */
function isPalindromic(str) {
  str = str.split(' ').join('');
  return str.split(' ').join('') === str.split('').reverse().join('');
}
