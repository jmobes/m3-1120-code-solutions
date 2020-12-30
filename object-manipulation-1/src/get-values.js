/* eslint-disable no-unused-vars */
function getValues(obj) {
  const vals = [];
  for (const key in obj) {
    vals.push(obj[key]);
  }
  return vals;
}
