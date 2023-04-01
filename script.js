// RNG that deals cards:

let PLAYER1 = { name: "fatmast", stack: 100, bet: 2 };
let PLAYER2 = { name: "shuzzza", stack: 100, bet: 1 };
let POT = 0;

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

  const deck = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      deck.push({ value, suit });
    }
  }
  return deck;
}

function clearCards() {
  let attributes = [
    "player1first",
    "player1second",
    "player2first",
    "player2second",
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
  ];
  for (let i = 0; i < attributes.length; i++) {
    const card = document.getElementById(attributes[i]);
    card.className = "";
    card.innerHTML = "";
  }
}
function setUp() {
  clearCards();

  POT = 0;
  PLAYER1.bet = 2;
  PLAYER2.bet = 1;

  const deck = deckBuilder();

  let p1stack = document.getElementById("player1stack");
  let p2stack = document.getElementById("player2stack");
  p1stack.textContent = PLAYER1.stack;
  p2stack.textContent = PLAYER2.stack;

  let p1Bet = document.getElementById("p1Bet");
  let p2Bet = document.getElementById("p2Bet");
  p1Bet.textContent = PLAYER1.bet;
  p2Bet.textContent = PLAYER2.bet;

  let playerOneFirstCard = randomCard(deck, "player1first");
  console.log(playerOneFirstCard);
  let playerOneSecondCard = randomCard(deck, "player1second");

  let playerTwoFirstCard = randomCard(deck, "player2first");
  let playerTwoSecondCard = randomCard(deck, "player2second");

  let card1 = randomCard(deck, "card1");
  let card2 = randomCard(deck, "card2");
  let card3 = randomCard(deck, "card3");
  let card4 = randomCard(deck, "card4");
  let card5 = randomCard(deck, "card5");
}

function randomCard(deck, divId) {
  const random = Math.floor(Math.random() * deck.length);
  const cardValue = deck[random].value;
  const cardSuit = deck[random].suit;
  cardSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");

  const card = document.getElementById(divId);
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
  deck.splice(random, 1);
  return { value: cardValue, suit: cardSuit };
}

// let raiseButton = document.getElementById("raiseButton");
// raiseButton.addEventListener("click", function () {
//   PLAYER1.stack = PLAYER1.stack + 1;
//   let p1stack = document.getElementById("player1stack");
//   let p2stack = document.getElementById("player2stack");
//   p1stack.textContent = PLAYER1.stack;
//   p2stack.textContent = PLAYER2.stack;
//   console.log(PLAYER1.stack);
// });

async function p2Preflop() {
  return new Promise(resolve => {
    let raiseButton = document.getElementById("raiseButton");
    let callButton = document.getElementById("callButton");
    let foldButton = document.getElementById("foldButton");
    raiseButton.addEventListener("click", raiseAction);
    callButton.addEventListener("click", callAction);
    foldButton.addEventListener("click", foldAction);
    let p1stack = document.getElementById("player1stack");
    let p2stack = document.getElementById("player2stack");
    let p1Bet = document.getElementById("p1Bet");
    let p2Bet = document.getElementById("p2Bet");

    function raiseAction() {
      // Do something when the raise button is clicked
      PLAYER2.bet = 4;
      p2Bet.textContent = PLAYER2.bet;
      // End the user's turn
      endTurn();
    }

    function callAction() {
      // Do something when the call button is clicked
      PLAYER2.bet = 2;
      p2Bet.textContent = PLAYER2.bet;
      // End the user's turn
      endTurn();
    }

    function foldAction() {
      // Do something when the fold button is clicked
      PLAYER2.stack = PLAYER2.stack - PLAYER2.bet;
      p2stack.textContent = PLAYER2.stack;
      PLAYER1.stack = PLAYER1.stack + PLAYER2.bet;
      p1stack.textContent = PLAYER1.stack;
      PLAYER2.bet = 0;
      // End the user's turn
      endTurn();
    }

    function endTurn() {
      raiseButton.removeEventListener("click", raiseAction);
      callButton.removeEventListener("click", callAction);
      foldButton.removeEventListener("click", foldAction);
      resolve();
    }
  });
}

function rngVsRaise() {
  const outcomes = ["raise", "call", "fold"];
  const randomIndex = Math.floor(Math.random() * 3);
  return outcomes[randomIndex];
}

function rngVsCall() {
  const outcomes = ["raise", "check"];
  const randomIndex = Math.floor(Math.random() * 2);
  return outcomes[randomIndex];
}

async function p1Preflop() {
  if (PLAYER2.bet == 4) {
    p1Action = rngVsRaise();
    if (p1Action == "raise") {
      PLAYER1.bet = PLAYER2.bet + 2;
      p1Bet.textContent = PLAYER1.bet;
    } else if (p1Action == "call") {
      PLAYER1.bet = PLAYER2.bet;
      p1Bet.textContent = PLAYER1.bet;
    } else if (p1Action == "fold") {
      PLAYER1.stack = PLAYER1.stack - PLAYER1.bet;
      p1stack.textContent = PLAYER1.stack;
      PLAYER2.stack = PLAYER2.stack + PLAYER1.bet;
      p2stack.textContent = PLAYER2.stack;
    }
  }
  if (PLAYER2.bet == 2) {
    p1Action = rngVsCall();
    if (p1Action == "raise") {
      PLAYER1.bet = PLAYER2.bet + 2;
      p1Bet.textContent = PLAYER1.bet;
    } else if (p1Action == "check") {
      PLAYER1.bet = PLAYER2.bet;
      p1Bet.textContet = PLAYER1.bet;
    }
  }
}

function showFlop() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  card1.style.display = "inline-block";
  card2.style.display = "inline-block";
  card3.style.display = "inline-block";
}

async function checkState() {
  if (PLAYER1.bet != PLAYER2.bet) {
    runFunctions();
  } else {
    // deal flop
    showFlop();
  }
}

async function runFunctions() {
  setUp();
  await p2Preflop();
  setTimeout(p1Preflop, 500);
  setTimeout(checkState, 750);
}

runFunctions();
