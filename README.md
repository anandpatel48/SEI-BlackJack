# Anand Patel SEI-Project 1-BlackJack


## Game Description - BlackJack
This is a game of BlackJack. The main goal of the game is to get 21. For the purpose of my game, I made it so that if the player gets 21, a messgae saying "BlackJack!" appears and the player wins the game.
The value of the cards are what their numbers are. In the case of Jack, Queen and King, the value of those cards is 10. In the case of Ace, the card is defaulted to 11, but can be changed to a 1 if the total goes above 21.
The hands are dealt out first, the player having both cards up and the dealer having one card facing up and 1 card facing down. The player can decide to "hit" to get another card if they want to get their total closer to 21. 
The new card is added to the total of the players hand. The player can also decide to stay if they like what their total is. The dealer then goes and tries to beat the player by getting closer to 21. If the player or dealer total
goes above 21, they "bust" and lose the round. For this game, if the player busts they automatically lose. If the player does not bust and the dealer does, the player wins. 

## Game pictures.


## Technologies Used
I used HTML to create the basic display of the game. I used buttons for the hit stay and reset buttons and made a table to display the wager and balance.

I used CSS to style the game, changing font sizes and colors and to give the game a dark green background. I aligned the buttond, the dealer hand, player hand, winner, and balance messages to the center of the screen.

I mainly used Javascript for the functionality of the game. I used loops and conditionals to create the logic of the game. I used a nested loop to create a deck and then used a for loop to shuffle it. I was also able to 
display the cards, change the balance, and display messages through dom manipulation. 

## Link to Game


## Next Steps
There are a few things I plan to do with this game. I would first like to add animations for the cards being dealt out. I would also like to add an animation for the dealer flipping their face down card and an animation for discarding of the cards.
An animation for shuffling would be a nice one to add as well.

I would also like to add more functionality to the game. Instead of their being an automatic wager of zero, I would like to make it so that the player can decide how much they would like to wager by inputting it themselves. The balance would react accordingly
based on whether the player wins or loses. I would also like to add some of the features commonly seen in online BlackJack games. For example, a double down functionality where the player is able to double their bet on the hand if they would like to. Additionaly, 
I would like for more than 1 player to play the game, and for there to be 6 decks per round, as is commonly seen in casino BlackJack. 
