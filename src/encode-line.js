const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (s === str[i + 1]) {
      count++;
    } else {
      result += `${count > 1 ? count : ""}${s}`;
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
