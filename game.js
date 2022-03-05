class Game {
  constructor(player1, player2) {
    this.player1 = player1,
    this.player2 = player2,
    this.gameData = gameData
  }
  checkWinner() {
  if (player1.currentWeapon === 'rock' && player2.currentWeapon === 'paper') {
    return player2.wins += 1
} else if (player1.currentWeapon === 'paper' && player2.currentWeapon === 'scissors') {
  return player2.wins += 1
} else if (player1.currentWeapon === 'scissors' && player2.currentWeapon === 'rock') {
  return player2.wins += 1
} else {
  return player1.wins += 1
}

  }
}
