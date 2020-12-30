/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const values = [
  ['2', 'clubs'], ['3', 'clubs'], ['4', 'clubs'], ['5', 'clubs'], ['6', 'clubs'], ['7', 'clubs'], ['8', 'clubs'], ['9', 'clubs'], ['10', 'clubs'], ['jack', 'clubs'], ['queen', 'clubs'], ['king', 'clubs'], ['ace', 'clubs'],
  ['2', 'diamonds'], ['3', 'diamonds'], ['4', 'diamonds'], ['5', 'diamonds'], ['6', 'diamonds'], ['7', 'diamonds'], ['8', 'diamonds'], ['9', 'diamonds'], ['10', 'diamonds'], ['jack', 'diamonds'], ['queen', 'diamonds'], ['king', 'diamonds'], ['ace', 'diamonds'],
  ['2', 'hearts'], ['3', 'hearts'], ['4', 'hearts'], ['5', 'hearts'], ['6', 'hearts'], ['7', 'hearts'], ['8', 'hearts'], ['9', 'hearts'], ['10', 'hearts'], ['jack', 'hearts'], ['queen', 'hearts'], ['king', 'hearts'], ['ace', 'hearts'],
  ['2', 'spades'], ['3', 'spades'], ['4', 'spades'], ['5', 'spades'], ['6', 'spades'], ['7', 'spades'], ['8', 'spades'], ['9', 'spades'], ['10', 'spades'], ['jack', 'spades'], ['queen', 'spades'], ['king', 'spades'], ['ace', 'spades']
];

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  getValue() {
    return this.value;
  }

  getSuit() {
    return this.suit;
  }

  getValueScore() {
    switch (this.value) {
      case 'ace': return 11;
      case 'king': return 10;
      case 'queen': return 10;
      case 'jack': return 10;
      default: return Number(this.value);
    }
  }
}

class Deck {
  constructor() {
    this.count = 52;
    this.deck = [];
    this.initializeDeck();
    this.shuffleDeck();
    console.log('Shuffling deck...');
  }

  initializeDeck() {
    for (let i = 0; i < values.length; i++) {
      this.deck.push(new Card(values[i][0], values[i][1]));
    }
  }

  dealCard() {
    this.count -= 1;
    return this.deck.pop();
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * i);
      const temp = this.deck[i];
      this.deck[i] = this.deck[random];
      this.deck[random] = temp;
    }
  }
}

class Player {
  constructor(name, card1, card2) {
    this.name = name;
    this.hand = [card1, card2];
    console.log(`${name} was dealt 2 cards. A ${this.hand[0].getValue()} of ${this.hand[0].getSuit()} and a ${this.hand[1].getValue()} of ${this.hand[1].getSuit()}`);
  }

  calculateScore() {
    const cardOneValue = this.hand[0].getValueScore();
    const cardTwoValue = this.hand[1].getValueScore();
    console.log(`${this.name} has a score of ${cardOneValue + cardTwoValue}`);
    return cardOneValue + cardTwoValue;
  }

  getName() {
    return this.name;
  }
}

function findWinner(scores) {
  console.log('Finding a winner...');
  let highest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return checkTie(scores, highest) ? 'tie' : scores.indexOf(highest);
}

function checkTie(scores, highest) {
  let highScoreTie = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highest) {
      highScoreTie++;
    }
  }
  if (highScoreTie > 1) {
    return true;
  }
  return false;
}

function playGame() {
  console.log('Starting game...');
  const deck = new Deck();
  const p1 = new Player('Joe', deck.dealCard(), deck.dealCard());
  const p2 = new Player('Bob', deck.dealCard(), deck.dealCard());
  const p3 = new Player('Nicole', deck.dealCard(), deck.dealCard());
  const p4 = new Player('Heather', deck.dealCard(), deck.dealCard());
  const scores = [p1.calculateScore(), p2.calculateScore(), p3.calculateScore(), p4.calculateScore()];
  const winner = findWinner(scores) + 1;
  if (winner === 1) console.log(`Winner is ${p1.getName()}`);
  else if (winner === 2) console.log(`Winner is ${p2.getName()}`);
  else if (winner === 3) console.log(`Winner is ${p3.getName()}`);
  else if (winner === 4) console.log(`Winner is ${p4.getName()}`);
  else console.log('There was a tie! There is no winner!');
}

playGame();
