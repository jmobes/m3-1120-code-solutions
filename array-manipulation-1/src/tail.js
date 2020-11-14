/* eslint-disable no-unused-vars */
function tail(array) {
  if (array.length === 0) {
    return [];
  }
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr[i - 1] = array[i];
  }
  return newArr;
}
