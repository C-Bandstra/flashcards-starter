
const chai = require('chai');
const assert = chai.assert;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  let deck;
  let round;

  beforeEach('reset', function() {
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be an instance of Round', function() {
    assert.isObject(round).isEqual(Round)
  })

  it('should be instantiated with zero turns', function() {
    expect(round.turns).to.equal(0);
  })

  it('should be instantiated with an empty array of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should be instantiated with a deck of cards', function() {
    expect(round.deck).to.equal(deck);
  })

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
    round.takeTurn('Camel');
    expect(round.returnCurrentCard()).to.equal(deck.cards[1])
  })

  it('should increment the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1)
    round.takeTurn('my guess');
    expect(round.returnCurrentCard()).to.deep.equal(card2)
  })

  it('should increment turn count when taking a turn', function() {
    expect(round.turns).to.equal(0)
    round.takeTurn('my guess');
    expect(round.turns).to.equal(1)
    round.takeTurn('my guess');
    expect(round.turns).to.equal(2)
  })

  it('should evaluate the guess and update number of incorrect guesses', function() {
    round.takeTurn('totally incorrect guess');
    expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it('should provide feedback', function() {
    expect(round.takeTurn('totally wrong')).to.equal('Incorrect!')
    expect(round.takeTurn('gallbladder')).to.equal('Correct!')
  })

  it('should calculate the percentage correct', function() {
    round.takeTurn('sea otter')
    round.takeTurn('gallbladder')
    console.log(round)
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('a wrong guess')
    expect(round.calculatePercentCorrect()).to.equal(66)
  })

  it('should report percent correct at end of round', function() {
    round.takeTurn('sea otter')
    round.takeTurn('gallbladder')
    round.takeTurn('a wrong guess')
    expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!')
  })

})