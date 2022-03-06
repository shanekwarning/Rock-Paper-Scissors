var clickToPlayEasy = document.querySelector('.easy')
var clickToPlay = document.querySelectorAll('.difficulty-box')
var weaponButtons = document.querySelectorAll('.weapon')
var changeGameBtn = document.querySelector('.change-game')
var weaponsArray = ['Rock', 'Paper', 'Scissors']

var randomWeapon = weaponsArray[getRandomIndex(weaponsArray)]


clickToPlayEasy.addEventListener('click', function() {
  for (var i = 0; i < weaponButtons.length; i++){
    toggle(weaponButtons[i])}
    toggle(clickToPlay[0])
    toggle(clickToPlay[1])
    computerPlayer.takeTurn()
})

changeGameBtn.addEventListener('click', function() {
  for (var i = 0; i < weaponButtons.length; i++){
    hide(weaponButtons[i])
    show(clickToPlay[i]) }
})

function classic() {
  for (var i = 0; i < clickToPlay.length; i++){
toggle(clickToPlay[i])
toggle(weaponButtons[i])}
computerPlayer.takeTurn()
}

function getRandomIndex(weapon) {
    return  Math.floor(Math.random() * weapon.length)
  }

function toggle(element) {
  element.classList.toggle('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
