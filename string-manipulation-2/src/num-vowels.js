/* eslint-disable no-unused-vars */
function numVowels(str) {
  str = str.toUpperCase();
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count++;
}
