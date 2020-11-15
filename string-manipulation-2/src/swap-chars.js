/* eslint-disable no-unused-vars */
function swapChars(index1, index2, str) {
  const strArr = str.split('');
  const temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
  return strArr.join('');
}
