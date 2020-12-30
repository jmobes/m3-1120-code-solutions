/* eslint-disable no-unused-vars */
function isVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowels.length; i++) {
    if (str === vowels[i]) {
      return true;
    }
  }
  return false;
}
