var clickToPlayEasy = document.querySelector(".easy");
var clickToPlayHard = document.querySelector(".hard");
var clickToPlay = document.querySelectorAll(".difficulty-box");
var weaponButtons = document.querySelectorAll(".weapon");
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
var randomWeapon = weaponsArray[getRandomIndex(weaponsArray)];
var emoji = `<img
  class="classic weapon rock"
  id="rock"
  src="./images/happy-rocks.png"
  alt="emoji alien"
/>`
var game;

// gameBox.addEventListener('click', function() {
//   assignGameMode(event)
// })
//
// function assignGameMode() {
//   mouseClick = event.target.className
//   console.log(mouseClick)
//   // for (var i = 0; i < rules.length; i++) {
//     if (mouseClick === clickToPlayEasy.className) {
//     game.gameType = 'classic'
//     console.log(game.gameType)
//   } else if (mouseClick === clickToPlayHard.className) {
//     game.gameType = 'advanced'
//   }
//   }
// }
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
  game.player2.takeTurn();
  game.checkWinner(game.player1.currentWeapon, game.player2.currentWeapon);
  game.displayScore();
  game.compareWeapons()
  // compareWeapons()
  setTimeout(roundTwo, 3000);
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

function getRandomIndex(num) {
  return Math.floor(Math.random() * num);
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

// function compareWeapons() {
//   for (var i = 0; i < weaponButtons.length; i++) {
//     if (
//       weaponButtons[i].id !== game.player1.currentWeapon &&
//       weaponButtons[i].id !== game.player2.currentWeapon
//     ) {
//       hide(weaponButtons[i]);
//     }
//   }
// }

function compareWeapons() {
  hide(chooseWeapon);
  weaponChoice.classList.remove("hidden");
  humanChoice.innerHTML = emoji;
  computerChoice.innerHTML = `game.player2.currentWeapon`;
}

function roundTwo() {
  // for (var i = 0; i < classicWeapons.length; i++) {
  //   if (classicWeapons[i].classList.contains("hidden")) {
  //     show(classicWeapons[i]);
      banner.innerText = "Choose Your Weapon!";
    }
//   }
// }
