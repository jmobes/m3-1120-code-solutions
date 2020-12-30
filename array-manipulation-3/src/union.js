/* eslint-disable no-unused-vars */
function union(first, second) {
  const res = [];
  for (let i = 0; i < first.length; i++) {
    if (!res.includes(first[i])) {
      res.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!res.includes(second[i])) {
      res.push(second[i]);
    }
  }
  return res;
}
