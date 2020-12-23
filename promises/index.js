/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const result = takeAChance('Joe')
  .then(res => console.log(res))
  .catch(err => console.error(err));
console.log(result);
