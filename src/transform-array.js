const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr);
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if(arr[i] === '--double-next') {
      if (i + 2 < arr.length && arr[i + 1] !== undefined) {
        result.push(arr[i + 1]);
        result.push(arr[i + 1]);
        i += 1;
        continue;
      } else continue;
    } else if(arr[i] === '--discard-next' ) {
      if (i + 2 < arr.length) {
        i += 1;
        continue;
      } else continue;
    } else if(arr[i] === '--discard-prev') {
      if (i - 1 > 0 && result.length > 0 && arr[i - 2] !== '--discard-next') {
        result.pop();
        continue;
      } else continue;
    } else if(arr[i] === '--double-prev') {
      if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1]);
        continue;
      } else continue;
    }  result.push(arr[i]);
  }
  return result;
}


module.exports = {
  transform
};
