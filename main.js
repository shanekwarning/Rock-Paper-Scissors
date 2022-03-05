var weaponsArray = ['Rock', 'Paper', 'Scissors']

var randomWeapon = weaponsArray[getRandomIndex(weaponsArray)]

function getRandomIndex(weapon) {
    return  Math.floor(Math.random() * weapon.length)}
