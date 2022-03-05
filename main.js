var weaponsArray = ['Rock', 'Paper', 'Scissors']

var newPlayer = new Player

var randomWeapon = weaponsArray[getRandomIndex(weaponsArray)]

function getRandomIndex(weapon) {
    return  Math.floor(Math.random() * weapon.length)}
