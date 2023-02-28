var dice1 = randomFirstDice();
var dice2 = randomSecondDice();
switch (dice1) {
  case 1:
    document.querySelector('.img1').setAttribute('src', 'images/dice1.png');
    break;
  case 2:
    document.querySelector('.img1').setAttribute('src', 'images/dice2.png');
    break;
  case 3:
    document.querySelector('.img1').setAttribute('src', 'images/dice3.png');
    break;
  case 4:
    document.querySelector('.img1').setAttribute('src', 'images/dice4.png');
    break;
  case 5:
    document.querySelector('.img1').setAttribute('src', 'images/dice5.png');
    break;
  case 6:
    document.querySelector('.img1').setAttribute('src', 'images/dice6.png');
    break;
}

switch (dice2) {
  case 1:
    document.querySelector('.img2').setAttribute('src', 'images/dice1.png');
    break;
  case 2:
    document.querySelector('.img2').setAttribute('src', 'images/dice2.png');
    break;
  case 3:
    document.querySelector('.img2').setAttribute('src', 'images/dice3.png');
    break;
  case 4:
    document.querySelector('.img2').setAttribute('src', 'images/dice4.png');
    break;
  case 5:
    document.querySelector('.img2').setAttribute('src', 'images/dice5.png');
    break;
  case 6:
    document.querySelector('.img2').setAttribute('src', 'images/dice6.png');
    break;
}

if (dice2 > dice1) {
  document.querySelector('h1').textContent = 'Player 2 wins!!';
} else if (dice1 > dice2) {
  document.querySelector('h1').textContent = 'Player 1 wins!!';
} else {
  document.querySelector('h1').textContent = 'Draw!!';
}

function randomFirstDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function randomSecondDice() {
  return Math.floor(Math.random() * 6 + 1);
}
