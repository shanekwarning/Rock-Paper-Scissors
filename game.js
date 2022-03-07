

class Game {
  constructor(player1, player2, gameType) {
    this.player1 = player1,
    this.player2 = player2,
    this.gameType = gameType
    this.weapons = ['rock', 'paper', 'scissors', 'lizard', 'scissors']
    this.winConditions = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'alien'],
      scissors: ['paper', 'lizard'],
      lizard: ['paper', 'alien'],
      alien: ['scissors', 'rock']
    }
  }
  // gameMode() {
  //   if (this.gameType = 'classic'){
  //
  //   } else if (this.gameType = 'advanced')
  // }
  checkWinner(player, computer) {
      if (player === computer) {
        banner.innerText = 'It\s a tie.'
        return
      } else if (this.winConditions[player].includes(computer)) {
        this.player1.wins += 1;
        banner.innerText = 'You Win!'
      } else {
        this.player2.wins += 1;
        banner.innerText = 'Computer Wins.'
      }
  }
  displayScore() {
    if (banner.innerText === 'Computer Wins.') {
      computerScore.innerText = `Win\s ${this.player2.wins}`
    } else if (banner.innerText === 'You Win!') {
      playerScore.innerText = `Win\s ${this.player1.wins}`
    }
  }
}
