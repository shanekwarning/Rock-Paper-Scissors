var clickToPlayEasy = document.querySelector('.easy')
var clickToPlay = document.querySelectorAll('.difficulty-box')
var weaponButtons = document.querySelectorAll('.weapon')
var changeGameBtn = document.querySelector('.change-game')
var chooseWeapon = document.querySelector('.weapon-icons')
var weaponsArray = ['Rock', 'Paper', 'Scissors']

var randomWeapon = weaponsArray[getRandomIndex(weaponsArray)]


clickToPlayEasy.addEventListener('click', function() {
  for (var i = 0; i < weaponButtons.length; i++) {
    toggle(weaponButtons[i])
  }
  toggle(clickToPlay[0])
  toggle(clickToPlay[1])
})

changeGameBtn.addEventListener('click', function() {
  for (var i = 0; i < weaponButtons.length; i++) {
    hide(weaponButtons[i])
    show(clickToPlay[i])
  }
})

chooseWeapon.addEventListener('click', function(){
  playerWeaponChoice(event)
  computerPlayer.takeTurn()
  startGame.checkWinner(newPlayer.currentWeapon, computerPlayer.currentWeapon)
})

function classic() {
  for (var i = 0; i < clickToPlay.length; i++) {
    toggle(clickToPlay[i])
    toggle(weaponButtons[i])
  }
}

function getRandomIndex(weapon) {
  return Math.floor(Math.random() * weapon.length)
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

function playerWeaponChoice(event) {
  mouseClick = event.target.className
  for (var i = 0; i < weaponButtons.length; i++) {
    if (weaponButtons[i].className === event.target.className) {
      newPlayer.currentWeapon = weaponButtons[i].id
    }
  }
}
