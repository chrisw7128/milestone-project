// RNG that deals cards:

let PLAYER1 = { name: "fatmast", stack: 100 };
let PLAYER2 = { name: "shuzzza", stack: 100 };

function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}

const cards = deckBuilder();

function randomCard(cards, div) {
  const random = Math.floor(Math.random() * cards.length);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  cardSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");

  const card = document.getElementById(div);
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    '<span class="card-value-suit top">' +
    cardValue +
    entity +
    "</span>" +
    '<span class="card-value-suit bot">' +
    cardValue +
    entity +
    "</span>";
  cards.splice(random, 1);
  return { value: cardValue, suit: cardSuit };
}

let raiseButton = document.getElementById("raiseButton");
raiseButton.addEventListener("click", function () {
  PLAYER1.stack = PLAYER1.stack + 1;
  let p1stack = document.getElementById("player1stack");
  let p2stack = document.getElementById("player2stack");
  p1stack.textContent = PLAYER1.stack;
  p2stack.textContent = PLAYER2.stack;
  console.log(PLAYER1.stack);
});

let p1stack = document.getElementById("player1stack");
let p2stack = document.getElementById("player2stack");
p1stack.textContent = PLAYER1.stack;
p2stack.textContent = PLAYER2.stack;

let playerOneFirstCard = randomCard(cards, "player1first");
console.log(playerOneFirstCard);
let playerOneSecondCard = randomCard(cards, "player1second");

let playerTwoFirstCard = randomCard(cards, "player2first");
let playerTwoSecondCard = randomCard(cards, "player2second");

let card1 = randomCard(cards, "card1");
let card2 = randomCard(cards, "card2");
let card3 = randomCard(cards, "card3");
let card4 = randomCard(cards, "card4");
let card5 = randomCard(cards, "card5");
