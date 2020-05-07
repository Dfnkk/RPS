let time = 1;

function getPLayerOpp() {
  let done = false;
  let playerInput = prompt('What do you choose');
  while (done != true) {
    playerInput = playerInput.toLowerCase();
    if (playerInput === 'rock' || playerInput === 'scissors' || playerInput === 'paper') {
      return playerInput;
    }
    playerInput = prompt('please enter rock, paper or scissors');
  }
}

function compOpp() {
  var compNum = Math.floor(Math.random() * 3);
  let opp;
  if (compNum === 0) {
    opp = 'rock';
  } else if (compNum === 1) {
    opp = 'scissors';
  } else if (compNum === 2) {
    opp = 'paper';
  } else {
    alert('error!');
  }

  return opp;
}

function getWinner(user, comp) {
  // false is lost true is won
  if ((user === 'rock' && comp === 'paper') || (user === 'paper' && comp === 'scissors') || (user === 'scissors' && user === 'rock')) {
    return false;
  } else if ((user === 'paper' && comp === 'rock') || (user === 'scissors' && comp === 'paper') || (user === 'rock' && user === 'scissors')) {
    return true;
  }
}

const main = () => {
  let userInput = getPLayerOpp();
  let compInput = compOpp();
  let answer = document.createElement('h1')
  let win = getWinner(userInput, compInput);
  if (win === false) {
    answer.innerHTML =  `${time}:` + ' You lost! w(ﾟДﾟ)w';
  } else if (win === undefined) {
    answer.innerHTML = `${time}:` + 'A tie =|';
  } else {
    answer.innerHTML = `${time}:` + 'You won!!! 😂 🤣 😁 😊';
  }
  time++;
  document.body.appendChild(answer);
};

main();

const playAgain = () => {
  main();
}