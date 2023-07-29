/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const number = document.querySelector("#number");

// const botonEliminar = document.querySelector("#eliminar");
// const botonPickOne = document.querySelector("#start");

// variables
const numbers = {
  1: "A",
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  11: "J",
  12: "Q",
  13: "K"
};

const suit = {
  heart: "\u2665",
  spades: "\u2660",
  clubs: "\u2663",
  diamonds: "\u2666"
};
// functions
const generateNumbers = () => {
  let numbersIndex = Math.floor(Math.random() * 13) + 1;
  return numbers[numbersIndex];
};

const values = Object.values(numbers);
for (const value of values) {
  console.log(value);
}

const generateSuit = () => {
  let suitKeys = Object.keys(suit);
  let suitIndex = Math.floor(Math.random() * suitKeys.length);
  return suit[suitKeys[suitIndex]];
};

const displayCard = () => {
  const suit1 = document.getElementById("suit1");
  const suit2 = document.getElementById("suit2");
  const cardNumber = generateNumbers();
  const cardSuit = generateSuit();

  number.innerHTML = cardNumber;

  suit1.innerHTML = cardSuit;
  suit2.innerHTML = cardSuit;

  if (cardSuit === suit.heart || cardSuit === suit.diamonds) {
    suit1.style.color = "red";
    suit2.style.color = "red";
  } else {
    suit1.style.color = "black";
    suit2.style.color = "black";
  }
};

displayCard();

document.getElementById("generateCard").addEventListener("click", displayCard);
