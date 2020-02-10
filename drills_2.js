'use strict';
function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0,2);
}

console.log(jediName('Ian', 'Drews'));

function beyond(num) {
  if (num === 0 ) {
    return 'staying home';
  } if (num === Infinity) {
    return 'and beyond';
  } else if (num > 0) {
    return 'to infinity';
  }else if(num < 0 ) {
    return 'to negative infinity';
  } else {throw 'enter a number';}
}