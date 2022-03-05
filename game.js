

class Game {
  constructor(player1, player2) {
    this.player1 = player1,
    this.player2 = player2
  }
  checkWinner(player, computer) {
    if (player === 'rock' && computer === 'paper') {
      this.player2.wins += 1;
      return 'Computer Wins.'
    } else if (player === 'paper' && computer === 'scissors') {
       this.player2.wins += 1;
       return 'Computer Wins.'
    } else if (player === 'scissors' && computer === 'rock') {
      this.player2.wins += 1;
      return 'Computer Wins.'
    } else if (player === computer){
        return 'It\s a tie.'
      } else {
        this.player1.wins += 1;
        return 'You Win!'
      }
    }
}

var startGame = new Game(newPlayer, computerPlayer)

startGame.checkWinner(newPlayer.name, computerPlayer.name)
