import "bootstrap";
import "./style.css";

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

let deck = [];

const generateDeck = () => {
  deck = [];
  for (const numberValue of Object.values(numbers)) {
    for (const suitValue of Object.values(suit)) {
      deck.push({ number: numberValue, suit: suitValue });
    }
  }
};

const drawCard = () => {
  if (deck.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * deck.length);
  const drawnCard = deck.splice(randomIndex, 1)[0];
  return drawnCard;
};

const displayCard = () => {
  const suit1 = document.getElementById("suit1");
  const suit2 = document.getElementById("suit2");
  const number = document.getElementById("number");
  const cardContainer = document.querySelector(".card");

  if (deck.length === 0) {
    suit1.innerHTML = "";
    suit2.innerHTML = "";
    number.innerHTML = "Deck Empty";
    cardContainer.classList.add("empty");
    return;
  }

  const card = drawCard();
  number.innerHTML = card.number;
  suit1.innerHTML = card.suit;
  suit2.innerHTML = card.suit;

  if (card.suit === suit.heart || card.suit === suit.diamonds) {
    suit1.style.color = "red";
    suit2.style.color = "red";
  } else {
    suit1.style.color = "black";
    suit2.style.color = "black";
  }

  cardContainer.classList.remove("empty");
};

generateDeck();
displayCard();

document.getElementById("generateCard").addEventListener("click", displayCard);
document.getElementById("generateDeck").addEventListener("click", () => {
  generateDeck();
  displayCard();
});
