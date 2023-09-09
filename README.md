NEW README:

# Casino Game

Welcome to the Casino Game, a virtual casino experience where you can try your luck at two exciting games: Slot Machine and Poker. Test your skills and see if you can beat the odds!

## Table of Contents

- [Introduction](#introduction)
- [Slot Machine](#slot-machine)
- [Poker](#poker)
- [Bug Report](#bug-report)
- [Technologies Used](#technologies-used)

## Introduction

In this casino game, you have the opportunity to enjoy two classic casino games: Slot Machine and Poker. Each game offers a unique and entertaining experience.

## Slot Machine

### Overview

- Game Format: Player vs. Machine
- Winning Conditions: Double the amount of initial chips

### How to Play

- Click the "Add Credits" button to add credits for the slot machine.
- Adjust your bet size per spin using the provided controls.
- Spin the reels and try to match the images on the slot machine.
- Win by getting 2/3 of the images in the bar to be the same image.
- Earn a bonus by getting all 3 images to match.
- This slot machine is designed to be beatable, and the payoffs are generous.

## Poker

### Overview

- Game Format: Player vs. Computer (Limit Texas Hold'em)
- Winning Conditions: Get all of your opponent's chips

### How to Play

- Play a hand of Limit Texas Hold'em poker against the computer.
- Choose from actions like Raise, Call, or Fold for your dealt hand.
- The computer will respond with a call or fold.
- If the computer calls, the flop is dealt, and the winner is determined by the highest hole card(s).
- Click "Next Hand" to continue playing and aim to win all your opponent's chips.

**Note**: This poker game has some limitations compared to a real poker game, such as simplified betting and no additional betting rounds beyond the flop.

## Bug Report

One known bug in the poker game is that the pot is not calculated correctly, causing the starting stacks to decrease over time as the game progresses. Please be aware of this issue while playing.

## Technologies Used

This casino game was built using raw HTML, CSS, and JavaScript, providing an authentic gaming experience right in your web browser.

Feel free to explore the game and enjoy the excitement of the casino from the comfort of your device. Good luck and have fun!

---

OLD README:

# milestone-project

This game is a casino game.

There are two games that can be played at the casino -- slot machine and poker.

The slot machine format is player vs machine, and the poker format is player vs computer.

The slot machine pays off if 2/3 of the images in the bar are the same image, and pays bonus if all 3 of the images are the same image. You can add credits for the slot machine with the respective button, as well as increase/decrease your bet size per spin. The winning condition here is to double the amount of chips that you initially loaded into the machine. (Hint: the payoffs are high, and unlike real slots, this slot machine is _very_ beatable.) This gaming experience is reasonably close to an actual slot machine.

The poker game is a little...different. You can raise, call, or fold your (limit texas hold-em) dealt hand. The computer will then respond by either calling or folding. If the computer calls, the flop is dealt. Once the flop is dealt...the game ends. The winner is chosen by whoever has the highest hole card(s). Thereafter, you can click "next hand" to continue playing the game. The winning condition is to get all of your opponent's chips. This game demo has clear shortcomings of an actual poker game, which would incorporate hand classes depending on how the player's hole cards interact with the board, as well as additional streets of betting.

One remaining bug is that in the poker game, the pot is not calculated correctly, which leads to the starting stacks of (100, 100) decreasing over time, as the game continues to be played.

The casino was built using raw html, css, and javascript.
