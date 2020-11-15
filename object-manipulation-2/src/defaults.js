/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (const prop in source) {
    if (!(prop in target)) {
      target[prop] = source[prop];
    }
  }
}
