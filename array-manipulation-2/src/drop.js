/* eslint-disable no-unused-vars */
function drop(arr, count) {
  if (arr.length === 0) {
    return [];
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < count) continue;
    newArr.push(arr[i]);
  }
  return newArr;
}
