/* eslint-disable no-unused-vars */
function dropRight(arr, count) {
  if (!arr.length) return [];

  const newArr = [];
  for (let i = 0; i < arr.length - count; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
