class Timer {
  constructor() {
    this.start = null;
    this.stop = null;
    this.time = null;
  }

  startTimer() {
    this.start = Date.now()
  }

  stopTimer() {
    this.stop = Date.now()
    this.time = this.stop - this.start
  }

  resetTimer() {
    this.start = null;
    this.stop = null;
  }

  getTime() {
    let minutes = Math.floor(this.time / 1000 / 60) % 60;
    let seconds = Math.floor(this.time / 1000) % 60
    return `You finished this round in ${minutes} minutes and ${seconds} seconds`
  }

}

module.exports = Timer;