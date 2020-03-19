const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }

    this.turns++

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const percentage = Math.floor(((this.deck.cards.length - this.incorrectGuesses.length) / this.deck.cards.length) * 100)

    return percentage 
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;