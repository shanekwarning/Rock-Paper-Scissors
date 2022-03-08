class Player {
  constructor(name, currentWeapon) {
    this.name = name,
    this.currentWeapon = currentWeapon,
    this.wins = 0
  }
  takeTurn(num) {
      var randomIndex = Math.floor(Math.random() * num);
     var randomWeapon = weaponsArray[randomIndex]
    return this.currentWeapon = randomWeapon
  }
}
