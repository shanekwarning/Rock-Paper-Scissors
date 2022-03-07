

class Game {
  constructor(player1, player2, gameType) {
    this.player1 = player1,
    this.player2 = player2,
    this.gameType = gameType
  }
  // gameMode() {
  //   if (this.gameType = 'classic'){
  //
  //   } else if (this.gameType = 'advanced')
  // }
  checkWinner(player, computer) {
    if (player === 'rock' && computer === 'paper') {
      this.player2.wins += 1;
      banner.innerText = 'Computer Wins.'
    } else if (player === 'paper' && computer === 'scissors') {
       this.player2.wins += 1;
       banner.innerText = 'Computer Wins.'
    } else if (player === 'scissors' && computer === 'rock') {
      this.player2.wins += 1;
      banner.innerText = 'Computer Wins.'
    } else if (player === computer){
        banner.innerText = 'It\s a tie.'
      } else {
        this.player1.wins += 1;
        banner.innerText = 'You Win!'
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

var startGame = new Game(newPlayer, computerPlayer)
