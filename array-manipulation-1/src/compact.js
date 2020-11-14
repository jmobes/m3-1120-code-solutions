/* eslint-disable no-unused-vars */
function compact(arr) {
  if (arr.length === 0) return [];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
