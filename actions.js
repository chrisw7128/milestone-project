async function p2Preflop() {
  return new Promise(resolve => {
    let raiseButton = document.getElementById("raiseButton");
    let callButton = document.getElementById("callButton");
    let foldButton = document.getElementById("foldButton");
    raiseButton.addEventListener("click", raiseAction);
    callButton.addEventListener("click", callAction);
    foldButton.addEventListener("click", foldAction);

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
  if (PLAYER1.stack === PLAYER2.stack + 2) {
    runFunctions();
  } else {
    // deal flop
    showFlop();
  }
}

async function runFunctions() {
  await p2Preflop();
  setTimeout(p1Preflop, 500);
  setTimeout(checkState, 750);
}

runFunctions();
