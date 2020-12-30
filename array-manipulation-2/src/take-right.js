/* eslint-disable no-unused-vars */
function takeRight(arr, count) {
  if (arr.length === 0) return [];

  const newArr = [];
  for (let i = arr.length - count; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
