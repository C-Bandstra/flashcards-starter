const chai = require('chai');
const assert = chai.assert;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    assert.isFunction(Turn)
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    assert.isObject(turn)
  }); 

  it('should be able to store a guess', function() {
    const turn = new Turn('blah');
    assert.equal(turn.guess, 'blah')
  })

  it('should be able to store a card', function() {
    const turn = new Turn('blah');
    assert.equal(turn.guess, 'blah')
  })

  it('should be able to return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    const turn = new Turn('array', card)
    const guess = turn.returnGuess();

    assert.equal(guess, 'array')

  });  

  it('should be able to return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    const turn = new Turn('array', card)
    const currentCard = turn.returnCard();

    assert.equal(currentCard, card)
  });  

  it('should return true if guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    const turn = new Turn('array', card)
    const checkGuess = turn.evaluateGuess()

    assert.equal(checkGuess, true);
  });  

  it('should return false if guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    const turn = new Turn('string', card)

    const checkGuess = turn.evaluateGuess()

    assert.equal(checkGuess, false);
  });  

  it('should return Correct! if guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    const turn = new Turn('array', card)
  
    const checkGuess = turn.evaluateGuess(turn.guess)
  
    assert.equal(turn.giveFeedback(checkGuess), 'Correct!');
  });  

  it('should return Incorrect! if guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')

    const turn = new Turn('boolean', card)
  
    const checkGuess = turn.evaluateGuess(turn.guess)
  
    assert.equal(turn.giveFeedback(checkGuess), 'Incorrect!');
  });    
});