const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const repeatTimes = options.repeatTimes || 1;
  let addition = options.addition || '';
  if (typeof(options.addition) === 'boolean') {
    addition = options.addition.toString();
  }
  if (options.addition === null) {
    addition = String(null);
  }
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  let result = "";
  for (let i = 0; i < repeatTimes; i += 1) {
    result += String(str);
      for (let k = 0; k < additionRepeatTimes; k += 1) {
        if (k != additionRepeatTimes - 1) {
          result += String(addition) + additionSeparator;
        } else {
          result += String(addition);
        }
      }
    if (i != repeatTimes - 1) {
        result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
