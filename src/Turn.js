class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    let evaluation = false;
    const correct = this.card.answers.filter(answer => answer == this.guess);
    correct.length ? evaluation = true : evaluation;
    this.giveFeedback(evaluation);
    return evaluation
  }

  giveFeedback(evaluation) {
    let feedback;
    evaluation ? feedback = 'Correct!' : feedback = 'Incorrect!'
    return feedback;
  }
}

module.exports = Turn;