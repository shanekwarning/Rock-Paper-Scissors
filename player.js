class Player {
  constructor(name, token, currentWeapon, wins) {
    this.name = name,
    this.token = token,
    this.currentWeapon = currentWeapon
    this.wins = wins || 0
  }
  takeTurn(weapon) {
    // var randomWeapon = ''
    randomWeapon =weaponsArray[getRandomIndex(weaponsArray)]
    return this.currentWeapon = weapon || randomWeapon
  }
}
