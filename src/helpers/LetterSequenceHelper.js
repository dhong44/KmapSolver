let numToLetter = function(num){
  return String.fromCharCode(parseInt(num) + 65);
};

let letterSequence = function(num) {
  let letters = [];
  for (let i = 0; i < num; i++) {
    letters.push(numToLetter(i));
  }
  return letters
};

export { numToLetter, letterSequence };
