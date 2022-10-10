'use strict'

const number = document.querySelector('.number');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const again = document.querySelector('.again');

let SecretNumber = Math.trunc(Math.random()*20)+1;
let Highscore = 0;


let num = 20;


check.addEventListener('click', () => {

/*
! When There is no input
*/
    const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    message.textContent ="No Number"
  }

/*
! When Player Wins The Game
*/  
  else if(guess === SecretNumber){
    message.textContent ="correct";
    number.textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if(num > Highscore){
      Highscore = num;
      document.querySelector('.highscore').textContent = Highscore;
    }
  }

/*
! When Guess is Greater Than Secret Number
*/  
  else if(guess > SecretNumber){
    if(num > 1){
      message.textContent = "Too High Try again";
      num--;
      score.textContent = num;
    }else{
      message.textContent = "You Lost The Game";
      score.textContent = 0;
    }
  }
  
/*
! When Guess is Lower Than Secret Number
*/  
  else if(guess < SecretNumber){
    if(num > 1){
      message.textContent = "Too Low Try again";
      num--;
      score.textContent = num;
    }else{
      message.textContent = "You Lost The Game";
      score.textContent = 0;
    }
  }
})

/*
! Resetting The App
*/ 
again.addEventListener('click', () => {
    num = 20;
    SecretNumber = Math.trunc(Math.random()*20)+1;
    message.textContent ="Start guessing... ";
    document.querySelector('body').style.backgroundColor = '#222';
    number.style.width = '15rem';
    score.textContent = num;
    document.querySelector('.guess').value = "";
    number.textContent = "?";
    
})


