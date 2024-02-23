class ShiftCipher {
    constructor(shift) {
      this.shift = shift;
    }
    encrypt(phrase) {
        let encryptedPhrase = '';
        
        for (let i = 0; i < phrase.length; i++) {
            if (phrase.charCodeAt(i)>= 97 && phrase.charCodeAt(i) <=122) {
                let newNumber = phrase.charCodeAt(i) + this.shift;
                if (newNumber > 122) {
                  newNumber = 96 + (newNumber - 122);
                }
                encryptedPhrase += String.fromCharCode(newNumber)
            } else {encryptedPhrase += String.fromCharCode(phrase.carCodeAt(i))}; 
        
        }
        return encryptedPhrase.toUpperCase(); 
    }
    decrypt(phrase) {
        let decryptedPhrase = '';
        for (let i = 0; i < phrase.length; i++) {
            if (phrase.charCodeAt(i)>= 65 && phrase.charCodeAt(i) <=90) {
                let newNumber = phrase.charCodeAt(i) - this.shift;
                if (newNumber < 65) {
                  newNumber = 90 - (65 - newNumber);
                }
                decryptedPhrase += String.fromCharCode(newNumber)
            } else {decryptedPhrase += String.fromCharCode(phrase.carCodeAt(i))}
        }
    return decryptedPhrase.toLowerCase();
    }
  }
  
  const cipher = new ShiftCipher(1);
  console.log(cipher.encrypt('xyz'));
  console.log(cipher.decrypt('JHYF'))