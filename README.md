# milestone-project

This game is a casino game.

There are two games that can be played at the casino -- slot machine and poker.

The slot machine format is player vs machine, and the poker format is player vs computer.

The slot machine pays off if 2/3 of the images in the bar are the same image, and pays bonus if all 3 of the images are the same image. You can add credits for the slot machine with the respective button, as well as increase/decrease your bet size per spin. The winning condition here is to double the amount of chips that you initially loaded into the machine. (Hint: the payoffs are high, and unlike real slots, this slot machine is _very_ beatable.) This gaming experience is reasonably close to an actual slot machine.

The poker game is a little...different. You can raise, call, or fold your (limit texas hold-em) dealt hand. The computer will then respond by either calling or folding. If the computer calls, the flop is dealt. Once the flop is dealt...the game ends. The winner is chosen by whoever has the highest hole card(s). Thereafter, you can click "next hand" to continue playing the game. The winning condition is to get all of your opponent's chips. This game demo has clear shortcomings of an actual poker game, which would incorporate hand classes depending on how the player's hole cards interact with the board, as well as additional streets of betting.

One remaining bug is that in the poker game, the pot is not calculated correctly, which leads to the starting stacks of (100, 100) decreasing over time, as the game continues to be played.

The casino was built using raw html, css, and javascript.
