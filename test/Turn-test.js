const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  let card;
  let turn;

  beforeEach('reset', function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    turn = new Turn('Bicycle', card);
  })

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it('should have a guess and card', function() {
    expect(turn.guess).to.equal('Bicycle');
    expect(turn.card).to.equal(card);
  })

  it('should return the guess', function() {
    expect(turn.returnGuess()).to.equal('Bicycle');
  })

  it('should return the card', function() {
    expect(turn.returnCard()).to.equal(card);
  })

  it('should evaluate the guess', function() {
    const turn1 = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn1.evaluateGuess()).to.equal(true);
  })

  it('should give feedback', function () {
    const turn1 = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
    expect(turn1.giveFeedback()).to.equal('Correct!');
  })

})