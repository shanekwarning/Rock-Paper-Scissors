var clickToPlayEasy = document.querySelector(".easy");
var clickToPlayHard = document.querySelector(".hard");
var clickToPlay = document.querySelectorAll(".difficulty-box");
var weaponButtons = document.querySelectorAll(".advanced");
var classicWeapons = document.querySelectorAll(".classic");
var rules = document.querySelectorAll(".rules");
var changeGameBtn = document.querySelector(".change-game");
var chooseWeapon = document.querySelector(".weapon-icons");
var gameBox = document.querySelector(".gamebox");
var banner = document.querySelector("h2");
var playerScore = document.querySelector(".player-score");
var computerScore = document.querySelector(".computer-score");
var weaponsArray = ["rock", "paper", "scissors", "lizard", "alien"];
var humanChoice = document.querySelector(".human-choice");
var computerChoice = document.querySelector(".computer-choice")
var weaponChoice = document.querySelector(".weapon-choice");
var game;

window.addEventListener("load", game);

clickToPlayEasy.addEventListener("click", function () {
  game.gameType = "classic";
  toggle(clickToPlayEasy);
  toggle(clickToPlayHard);
  toggle(chooseWeapon);
});

clickToPlayHard.addEventListener("click", function () {
  game.gameType = "advanced";
  showWeapons(weaponButtons);
  toggle(clickToPlayEasy);
  toggle(clickToPlayHard);
  toggle(chooseWeapon);
});

changeGameBtn.addEventListener("click", function () {
  // for (var i = 0; i < weaponButtons.length; i++) {
  //   hide(weaponButtons[i]);

    toggle(chooseWeapon);
    // toggle()
    toggle(clickToPlayEasy);
    toggle(clickToPlayHard);
  // }
});

chooseWeapon.addEventListener("click", function () {
  playerWeaponChoice(event);
  game.gameMode();
  hide(changeGameBtn)
  game.checkWinner(game.player1.currentWeapon, game.player2.currentWeapon);
  game.displayScore();
  game.compareWeapons()
  setTimeout(roundTwo, 3000);
  show(changeGameBtn)
});

function playerWeaponChoice(event) {
  mouseClick = event.target.className;
  selection = event.target.id;
  for (var i = 0; i < weaponButtons.length; i++) {
    if (weaponButtons[i].className === event.target.className) {
      game.player1.currentWeapon = selection;
    }
  }
}
function classic() {
  for (var i = 0; i < clickToPlay.length; i++) {
    toggle(clickToPlay[i]);
    toggle(weaponButtons[i]);
  }
}

function game() {
  var newPlayer = new Player();
  var computerPlayer = new Player();
  game = new Game(newPlayer, computerPlayer);
}

function toggle(element) {
  element.classList.toggle("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function showWeapons(weapons) {
  for (var i = 0; i < weapons.length; i++) {
    toggle(weapons[i]);
  }
}

function roundTwo() {
      hide(weaponChoice)
      show(chooseWeapon)
      banner.innerText = "Choose Your Weapon!";
    }
