const inquirer = require('inquirer');
const genList = (round) => {
  let card = round.returnCurrentCard();
  
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard()) {
      round.timer.stopTimer();
      console.log(round.endRound());
      console.log(round.timer.getTime());
      console.log('Try to beat your time and score!!!');
      round.incorrectGuesses = []
      round.turns = 0
      round.timer.startTimer();
      main(round)
    } else {
      main(round);
    }
}

module.exports.main = main;