const chai = require('chai');
const {expect} = chai;

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', function() {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should initialize with an array of cards', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards.length).to.equal(3);
    expect(deck.countCards()).to.equal(3);
  })

})