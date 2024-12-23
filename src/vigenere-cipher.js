const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let diff = 0;
    const code = message.toUpperCase().split('').map((el, ind) => {
      const crypt = el.codePointAt(0);
      const keyStr = key.toUpperCase();
      if (crypt >= 65 && crypt <= 90) {
        return String.fromCodePoint(((crypt + keyStr.codePointAt((ind - diff) % keyStr.length)) % 26) + 65);
      }
      diff++;
      return el;
    });
    return this.reverse ? code.join('') : code.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let diff = 0;
    let code = message.toUpperCase().split('').map((el, ind) => {
      const crypt = el.codePointAt(0);
      const keyStr = key.toUpperCase();
      if (crypt >= 65 && crypt <= 90) {
        return String.fromCodePoint(((26 + (crypt - keyStr.codePointAt((ind - diff) % keyStr.length))) % 26) + 65);
      }
      diff++;
      return el;
    });
    return this.reverse ? code.join('') : code.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
