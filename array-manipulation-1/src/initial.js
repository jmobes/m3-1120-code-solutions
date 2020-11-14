/* eslint-disable no-unused-vars */
function initial(arr) {
  if (arr.length === 0) return [];
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}
