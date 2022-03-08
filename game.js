

class Game {
  constructor(player1, player2, gameType) {
    this.player1 = player1,
    this.player2 = player2,
    this.gameType = gameType
    this.weapons = ['rock', 'paper', 'scissors', 'lizard', 'alien']
    this.winConditions = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'alien'],
      scissors: ['paper', 'lizard'],
      lizard: ['paper', 'alien'],
      alien: ['scissors', 'rock']
    }
    this.images = [`<img class="classic weapon rock" id="rock" src="./images/happy-rocks.png" alt="emoji rock"/>`,
                `<img class="classic weapon paper" id="paper" src="./images/happy-paper.png" alt="emoji paper" />`,
                `<img class="classic weapon scissors" id="scissors" src="./images/happy-scissors.png" alt="emoji scissors" />`,
                `<img class="weapon advanced" id="lizard" src="./images/flat-lizard.png" alt="emoji lizard" />`,
                `<img class="weapon advanced" id="alien" src="./images/flat-alien.png" alt="emoji alien" />`]
  }
  gameMode() {
    if (this.gameType === 'classic'){
      return this.player2.takeTurn(3)
    } else if (this.gameType ==='advanced') {
      return this.player2.takeTurn(5)
    }
  }

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
  
  compareWeapons() {
    hide(chooseWeapon);
    weaponChoice.classList.remove("hidden");
    for (var i = 0; i < 5; i++) {
      if (this.player1.currentWeapon === this.weapons[i]) {
        humanChoice.innerHTML = this.images[i];
      }
    } for (var i = 0; i < 5; i++) {
      if (this.player2.currentWeapon === this.weapons[i]) {
        computerChoice.innerHTML = this.images[i];
      }
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
