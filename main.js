var clickToPlayEasy = document.querySelector('.easy')
var clickToPlay = document.querySelectorAll('.difficulty-box')
var weaponButtons = document.querySelectorAll('.weapon')
var changeGameBtn = document.querySelector('.change-game')
var weaponsArray = ['Rock', 'Paper', 'Scissors']

var randomWeapon = weaponsArray[getRandomIndex(weaponsArray)]


clickToPlayEasy.addEventListener('click', function() {
  console.log('click')
  for (var i = 0; i < clickToPlay.length; i++){
toggle(clickToPlay[i])
toggle(weaponButtons[i])}
})

changeGameBtn.addEventListener('click', function() {
  for (var i = 0; i < weaponButtons.length; i++){
    hide(weaponButtons[i])
    show(clickToPlay[i]) }
})


function getRandomIndex(weapon) {
    return  Math.floor(Math.random() * weapon.length)}

function toggle(element) {
  element.classList.toggle('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
