class Player {
  constructor(name, currentWeapon) {
    this.name = name,
    this.currentWeapon = currentWeapon,
    this.wins = 0
  }
  takeTurn(weapon) {
    randomWeapon = weaponsArray[getRandomIndex(5)]
    return this.currentWeapon = weapon || randomWeapon
  }
}
