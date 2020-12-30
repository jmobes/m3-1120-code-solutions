/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const shorter = first < second ? first : second;
  const res = [];
  for (let i = 0; i < shorter.length; i++) {
    if (second.includes(first[i])) {
      res.push(first[i]);
    }
  }
  return res;
}
