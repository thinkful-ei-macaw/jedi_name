'use strict';
function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('Ian', 'Drews'));

function beyond(num) {
    if (num === 0) {
        return 'staying home';
    } if (num === Infinity) {
        return 'and beyond';
    } else if (num > 0) {
        return 'to infinity';
    } else if (num < 0) {
        return 'to negative infinity';
    } else { throw 'enter a number'; }
}
console.log(beyond(0));

function getLetter(word) {
    if(word.charAt(0) === 'a') {
      return word.charAt(1);
    } else if (word.charAt(0)=== 'b') {
      return word.charAt(2);
    } else if (word.charAt(0)=== 'c') {
      return word.charAt(3);
    } else if (word.charAt(0)=== 'd') {
      return word.charAt(4);
    } else {return ' ';}
  }
  function decode(code) {
    let answer = '';
    code = code.split(' ');
    for (let i = 0; i < code.length; i++) {
      answer = answer + getLetter(code[i]);
    } return answer;
  }
  console.log(decode('craft block argon meter bells brown croon droop'));

  