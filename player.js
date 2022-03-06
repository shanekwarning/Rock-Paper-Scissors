class Player {
  constructor(name, token, currentWeapon, wins) {
    this.name = name,
    this.token = token,
    this.currentWeapon = currentWeapon
    this.wins = wins || 0
  }
  takeTurn(weapon) {
    randomWeapon =weaponsArray[getRandomIndex(weaponsArray)]
    return this.currentWeapon = weapon || randomWeapon
  }
}


var newPlayer = new Player
var computerPlayer = new Player
