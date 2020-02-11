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

  'use strict';
function daysInAMonth(month, leapYear) {
  if (month === 'February'&& leapYear) {
    return 28;
  } if (month === 'February' && !leapYear) {
    return 29;
  } 
  
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return 31;
    break;
  } 
  
  switch(month) {
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return 30;
    break;
  }
throw ('enter a month and remember to capitolize')
}

console.log(daysInAMonth('January', false))

let choices = ['rock', 'paper', 'scissors']; //sets the possible choices for the computer to choose from
let round = 0;
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
} //randomizes the computers choice
function playRound(player) {
  const computer = computerPlay();
  if (player == 'rock') {
    if (computer == 'rock') {
      return 'Tie';
    } else if (computer == 'scissors') {
      return 'You Win!';
    } else if (computer == 'paper') {
      return 'You Lose!';
    } else {
      return 'error';
    }
  } else if (player == 'scissors') {
    if (computer == 'rock') {
      return 'You Lose!';
    } else if (computer == 'scissors') {
      return 'Tie';
    } else if (computer == 'paper') {
      return 'You Win!';
    } else {
      return 'error';
    }
  } else if (player == 'paper') {
    if (computer == 'rock') {
      return 'You Win!';
    } else if (computer == 'scissors') {
      return 'You Lose!';
    } else if (computer == 'paper') {
      return 'Tie';
    }
  } else {
    return 'error';
  }
}