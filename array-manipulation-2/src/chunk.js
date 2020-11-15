/* eslint-disable no-unused-vars */
function chunk(arr, size) {
  if (!arr.length) return [];

  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
