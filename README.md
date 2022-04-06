# SEI-BlackJack

# Github Repo
## https://github.com/anandpatel48/SEI-BlackJack

# Project Description
The game is BlackJack. The player will play against a dealer. When the game starts, there will be a shuffling of the deck and the dealers cards will appear 1 face up and 1 face down. The player will have both of their cards face up. There will be a wager of 100 per hand and the player will start out with 1000. When the game starts there will be a wager and balance section that will show a wager of 100 and a balance of 900. The player can elect to hit or stay as long as their total is below 21. If they hit and the total goes above 21, they lose, and if they hit and reach 21 or reach 21 with their beginning hand, they win 100. The shown cards will be removed from the deck. At a certain point in the deck, the cards will automatically reshuffle and the game will continue. 

# WireFrames. 

![Screen Shot 2022-04-06 at 11 08 34 AM](https://user-images.githubusercontent.com/101526418/162012584-fa1a33ff-c8a9-4860-aa3a-b2b102f045e2.png)
This will be the screen the player sees when they start the game. Once start game is clicked, the game will start and they will then be able to begin playing. The wager board will show a 100 wager and 900 balance immediately and the dealer hand and player hand will be shown. What it looks like will be shown below. 


![Screen Shot 2022-04-06 at 10 59 41 AM](https://user-images.githubusercontent.com/101526418/162012886-c46da089-471e-4ed6-bb61-33a989338630.png)
The player will be able to hit if their total is below 21, or stay if they like where they are. The dealer will have programs to hit, and whoever is closest to 21 without going over will win the hand. The reset button allows the player to reset the game with the hands shuffled and the wager board reset as well.

# User Stories
1. As a user, I want to be able to hit or stay if my total is below 21, and if I reach 21, I should automatically win. If I go over 21, I automatically lose.
2. As a user, I want to see one of the dealer cards and see what they hit after I go.
3. As a user, I want to keep track of my balance on the screen.
4. As a user, I want to be able to reset the game and have cards reshuffled and my wager board reset.

# MVP Goals
1. Start the game with a shuffled deck of cards. The player gets two cards face up that are removed from the deck, and the dealer gets 1 card face down and 1 card face up that are both removed from the deck. 
2. The player can then elect to hit, in which case another card will be removed from the deck and shown to them. If their total is above 21, they lose, if it is equal to 21, they win the hand, and if it is below 21, they can elect to hit again or stay. If they elect to stay, the dealer decides to hit or stay based on their own cards. Assuming the player has not passed 21, If the dealer hits and they get closer to 21 without passing it, they win. If the dealer passes 21, they lose. If the dealer and player both achieve the same total below 21, the hand is a draw. 
3. The player wagers 100 dollars every round, and has a starting balance of 100. Every hand they win, 100 is added to their balance. Every hand they lose, 100 is removed from their balance. If the hand is a draw, the balance stays the same and a new hand is played. 
4. The game resets if the balance reaches 0, and if the player presses the reset button, the game resets, 
