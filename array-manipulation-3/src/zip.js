/* eslint-disable no-unused-vars */
function zip(first, second) {
  const shortest = first < second ? first : second;
  const res = [];
  for (let i = 0; i < shortest.length; i++) {
    res[i] = [first[i], second[i]];
  }
  return res;
}
