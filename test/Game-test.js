const chai = require('chai');
const {expect} = chai;
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', function() {
  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should keep track of the current round', function() {
    const game = new Game()
    expect(game.currentRound).to.equal(null)
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })

  it('should instantiate cards and put them in a deck', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound.deck.countCards()).to.equal(30)
  })

  it('should create a new round with a deck', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })

})