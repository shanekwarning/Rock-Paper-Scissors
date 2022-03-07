var clickToPlayEasy = document.querySelector('.easy')
var clickToPlay = document.querySelectorAll('.difficulty-box')
var weaponButtons = document.querySelectorAll('.weapon')
var classicWeapons = document.querySelectorAll('.classic')
var changeGameBtn = document.querySelector('.change-game')
var chooseWeapon = document.querySelector('.weapon-icons')
var banner = document.querySelector('h2')
var playerScore = document.querySelector('.player-score')
var computerScore = document.querySelector('.computer-score')
var weaponsArray = ['rock', 'paper', 'scissors']

var randomWeapon = weaponsArray[getRandomIndex(weaponsArray)]


clickToPlayEasy.addEventListener('click', function() {
  for (var i = 0; i < classicWeapons.length; i++) {
    toggle(classicWeapons[i])
  }
  toggle(clickToPlay[0])
  toggle(clickToPlay[1])
  toggle(chooseWeapon)
})

changeGameBtn.addEventListener('click', function() {
  for (var i = 0; i < weaponButtons.length; i++) {
    hide(weaponButtons[i])
    toggle(chooseWeapon)
    show(clickToPlay[i])
  }

})

chooseWeapon.addEventListener('click', function() {
  playerWeaponChoice(event)
  computerPlayer.takeTurn()
  startGame.checkWinner(newPlayer.currentWeapon, computerPlayer.currentWeapon)
  startGame.displayScore()
  compareWeapons()
  setTimeout(roundTwo, 3000)
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
  selection = event.target.id
  for (var i = 0; i < weaponButtons.length; i++) {
    if (weaponButtons[i].className === event.target.className) {
      newPlayer.currentWeapon = selection
    }
  }
}

function compareWeapons() {
  for (var i = 0; i < weaponButtons.length; i++) {
    if (weaponButtons[i].id !== startGame.player1.currentWeapon && weaponButtons[i].id !== startGame.player2.currentWeapon) {
      hide(weaponButtons[i])
    }
  }
}

function roundTwo() {
  for (var i = 0; i < classicWeapons.length; i++) {
    if (classicWeapons[i].classList.contains('hidden')) {
      show(classicWeapons[i])
      banner.innerText = 'Choose Your Weapon!'
    }
  }
}
