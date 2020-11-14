/* eslint-disable no-unused-vars */
function reverse(arr) {
  if (arr.length === 0) return [];
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
