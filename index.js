var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");
let h1 = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
  h1.textContent = "Draw!";
} else if (randomNumber1 < randomNumber2) {
  h1.textContent = "Player 2 Wins! 🚩🚩";
} else {
  h1.textContent = "🚩🚩 Player 1 Wins!";
}
