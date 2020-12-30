/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const obj = { ...source };

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in obj) {
      delete obj[keys[i]];
    }
  }
  return obj;
}
