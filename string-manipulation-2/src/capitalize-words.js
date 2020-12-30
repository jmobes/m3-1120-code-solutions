/* eslint-disable no-unused-vars */
function capitalizeWords(str) {
  const strArr = str.split(' ');
  let capitalized = '';
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toLowerCase();
    capitalized += strArr[i][0].toUpperCase() + strArr[i].slice(1) + ' ';
  }
  return capitalized.slice(0, -1);
}
