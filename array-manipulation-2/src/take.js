/* eslint-disable no-unused-vars */
function take(arr, count) {
  if (arr.length === 0) {
    return [];
  }
  const newArr = [];
  for (let i = 0; i < count; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
