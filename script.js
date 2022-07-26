// janken game
// https://basics.rocketacademy.co/projects/project-1-scissors-paper-stone/project-1-scissors-paper-stone-part-1

let myOutputValue = `JAN KEN PON!`;

// roll to generate random number
var roll = function() {
  let randomDecimal = Math.random() * 3;
  let randomNumber = Math.floor(randomDecimal);
  let num = randomNumber + 1;
  return num;
};

// to generate jan, ken or pon
var random = function() {
  let randomiser = roll();
  let randomPick = '';

  if (randomiser == 1) {
    randomPick = 'scissors';
  } else if (randomiser == 2) {
    randomPick = 'paper';
  } else {
    randomPick = 'stone';
  }
  return randomPick;
};

// game

var main = function (input) {
  let pcPick = random();
  console.log('game picks:', pcPick);

  let user = input.toLowerCase();

  // reversed game
  // win condition
  if ((user == 'reversed scissors' && pcPick == 'stone') || (user == 'reversed paper' && pcPick == 'scissors') || (user == 'reversed stone' && pcPick == 'paper')) {
    myOutputValue = `(✯◡✯) you picked ${input} which trumps the computer's ${pcPick}. you win! 。.:☆:･'(⌒―⌒*)))`;
    // draw condition
  } else if (user == 'reversed ' + pcPick) {
    myOutputValue = `you picked ${input} and the computer also picked ${pcPick}. it's a draw! (￣ω￣)`;
    // lose condition
  } else if ((user == 'reversed scissors' && pcPick == 'paper') || (user == 'reversed paper' && pcPick == 'stone') || (user == 'reversed stone' && pcPick == 'scissors')) {
    // user reversed lose condition
    myOutputValue = `(」°ロ°)」 you picked ${input} and computer trumps over you with ${pcPick}. sorry, you lose! (￢_￢;)`;
  } else

  // validation
  if (user != 'scissors' && user != 'paper' && user != 'stone') {
    
    myOutputValue = `${input} is not a valid word! (눈_눈) please enter either valid words listed above with <em>no extra spaces</em> between and <em>no additional symbols</em>. thank you! (シ_ _)シ`;
    // normal game
    // win condition
  } else if ((user == 'scissors' && pcPick == 'paper') || (user == 'paper' && pcPick == 'stone') || 
    (user == 'stone' && pcPick == 'scissors')) {
      myOutputValue = `(๑˃ᴗ˂)ﻭ you picked ${input} and trumps the pc's pick of ${pcPick}. you win! (つ・▽・)つ⊂(・▽・⊂)`;
    } else if (user == pcPick) {
      // user draw condition
      myOutputValue = `you picked ${input} and the pc also picked ${pcPick}. it's a draw! (¬◡¬)✧`;
    } else {
      // user lose condition
      myOutputValue = `( : ౦ ‸ ౦ : ) you picked ${input} and pc trumps over you with the pick of ${pcPick}. sorry, you lose! Σ（￣□￣；）`;
    };
  return myOutputValue;
};
