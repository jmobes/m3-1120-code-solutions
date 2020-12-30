/* eslint-disable no-unused-vars */
function reverseWords(str) {
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let word;
    for (let j = 0; j < arr[i].length; j++) {
      word = arr[i].split('');
      word = word.reverse();
    }
    arr[i] = word.join('');
  }
  return arr.join(' ');
}
