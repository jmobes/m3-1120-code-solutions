/* eslint-disable no-unused-vars */
function titleCase(str) {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    if (arr[i] === arr[0] && arr[i] !== 'javascript:') {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    } else if (arr[i] === 'api') {
      arr[i] = 'API';
    } else if (arr[i] === 'web') {
      arr[i] = 'Web';
    } else if (arr[i] === 'in-depth') {
      arr[i] = 'In-Depth';
    } else if (arr[i] === 'javascript') {
      arr[i] = 'JavaScript';
    } else if (arr[i] === 'javascript:') {
      arr[i] = 'JavaScript:';
    } else if ((arr[i] !== arr[0]) && (arr[i].length <= 3) && (arr[i - 1].includes(':') || arr[i].includes('-'))) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    } else if (arr[i] !== arr[0] && arr[i].length <= 3) {
      arr[i] = arr[i][0].toLowerCase() + arr[i].slice(1);
    } else {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  const res = arr.join(' ');
  return res;
}
