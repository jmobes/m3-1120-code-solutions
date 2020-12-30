/* eslint-disable no-unused-vars */
function truncate(len, str) {
  if (str.length === 0) return '...';
  if (str.length < len) return str + '...';

  const newStr = '';
  while (str.length !== len) {
    str = str.slice(0, -1);
  }
  str += '...';

  return str;
}
