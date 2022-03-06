class Player {
  constructor(name, currentWeapon) {
    this.name = name,
    this.currentWeapon = currentWeapon,
    this.wins = 0
  }
  takeTurn(weapon) {
    randomWeapon = weaponsArray[getRandomIndex(weaponsArray)]
    return this.currentWeapon = weapon || randomWeapon
  }
}


var newPlayer = new Player
var computerPlayer = new Player
