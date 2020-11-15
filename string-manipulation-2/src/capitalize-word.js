/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  word = word.toLowerCase();
  if (word === 'javascript') return 'JavaScript';

  return word[0].toUpperCase() + word.slice(1);

}
