

class Game {
  constructor(player1, player2) {
    this.player1 = player1,
    this.player2 = player2
    // this.gameData = gameData
  }
  checkWinner(player, computer) {
    if (player === 'rock' && computer === 'paper') {
      return this.player2.wins += 1
    } else if (player === 'paper' && computer === 'scissors') {
      return this.player2.wins += 1
    } else if (player === 'scissors' && computer === 'rock') {
      return this.player2.wins += 1
    } else if (player === computer){
        console.log('It\s a tie.')
      } else {
        return this.player1.wins += 1
      }
    }
}
