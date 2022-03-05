var weaponsArray = ['Rock', 'Paper', 'Scissors']

var newPlayer = new Player('rock')
var computerPlayer = new Player('rock')
var startGame = new Game(newPlayer, computerPlayer)



var randomWeapon = weaponsArray[getRandomIndex(weaponsArray)]

function getRandomIndex(weapon) {
    return  Math.floor(Math.random() * weapon.length)}

startGame.checkWinner(newPlayer.name, computerPlayer.name)
