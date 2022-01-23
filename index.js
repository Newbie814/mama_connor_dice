var diceRoll1 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "images/dice" + diceRoll1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImage1);

// var diceRoll2 = Math.floor(Math.random() * 6) + 1;

// document.getElementsByClassName(".img2").src =
//   "images/dice" + diceRoll2 + ".png";

var diceRoll2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "images/dice" + diceRoll2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImage2);

var winner = document.querySelector("h1");

if (diceRoll1 > diceRoll2) {
  winner.textContent = "Mama wins!!";
} else if (diceRoll2 > diceRoll1) {
  winner.textContent = "Connor wins!!";
} else {
  winner.textContent = "It's a draw!!!";
}
