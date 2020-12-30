/* eslint-disable no-unused-vars */
function difference(first, second) {
  const res = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      res.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      res.push(second[i]);
    }
  }
  return res;
}
