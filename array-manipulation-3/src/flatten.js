/* eslint-disable no-unused-vars */
function flatten(arr) {
  if (!arr.length) return [];
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        res.push(arr[i][j]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
