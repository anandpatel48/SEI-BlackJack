# Anand Patel SEI-Project 1-BlackJack


## Game Description - BlackJack
This is a game of BlackJack. The main goal of the game is to get 21. For the purpose of my game, I made it so that if the player gets 21, a messgae saying "BlackJack!" appears and the player wins the game.
The value of the cards are what their numbers are. In the case of Jack, Queen and King, the value of those cards is 10. In the case of Ace, the card is defaulted to 11, but can be changed to a 1 if the total goes above 21.
The hands are dealt out first, the player having both cards up and the dealer having one card facing up and 1 card facing down. The player can decide to "hit" to get another card if they want to get their total closer to 21. 
The new card is added to the total of the players hand. The player can also decide to stay if they like what their total is. The dealer then goes and tries to beat the player by getting closer to 21. If the player or dealer total
goes above 21, they "bust" and lose the round. For this game, if the player busts they automatically lose. If the player does not bust and the dealer does, the player wins. 

## Game pictures.
<img width="1499" alt="Screen Shot 2022-04-12 at 9 51 18 AM" src="https://user-images.githubusercontent.com/101526418/162983485-9a544e3a-e177-4a97-bb28-d198b14c36a3.png">

This is how the game is first displayed. Wager is 100, balance is 900 making for a total of 100. Cards are dealt out and the player can decide to hit or stay. 

<img width="1458" alt="Screen Shot 2022-04-12 at 9 51 50 AM" src="https://user-images.githubusercontent.com/101526418/162982399-1628c97d-c4cd-4332-b9fe-b72e702ad94d.png">

This shows how a winner is determined. In this case, the user lost because the dealer had 21 and the player only had 18, resulting in the message "You lost" and the balance being reduced by 100.

<img width="1476" alt="Screen Shot 2022-04-12 at 9 53 03 AM" src="https://user-images.githubusercontent.com/101526418/162982717-dcfbb67e-ac6b-41fd-aa7c-c91ce167b142.png">

This shows the situation where the player has ran out of credits. The message alerting the player appears, and in 5 seconds the game will reset.

<img width="1484" alt="Screen Shot 2022-04-12 at 9 53 23 AM" src="https://user-images.githubusercontent.com/101526418/162982905-66aa502f-76bd-4018-aea9-64147f9638dd.png">

This shows when the game is reset, the message "New Deck" appears to alert the player that a new shuffled deck is being used. A similar message would appear if the deck ever got to 6 or less cards and the player was in the middle of a round. 



## Technologies Used
I used HTML to create the basic display of the game. I used buttons for the hit stay and reset buttons and made a table to display the wager and balance.

I used CSS to style the game, changing font sizes and colors and to give the game a dark green background. I aligned the buttond, the dealer hand, player hand, winner, and balance messages to the center of the screen.

I mainly used Javascript for the functionality of the game. I used loops and conditionals to create the logic of the game. I used a nested loop to create a deck and then used a for loop to shuffle it. I was also able to 
display the cards, change the balance, and display messages through dom manipulation. 

## Tough Code Parts
function playerSum(){
    for (let i = 0; i < playerHand.length; i++){
        if(playerHand[i].split("-")[0]=== "K" || playerHand[i].split("-")[0]=== "Q" || playerHand[i].split("-")[0]=== "J") {
            playerTotal += 10;

        } else if(playerHand[i].split("-")[0]=== "A") {
            playerTotal += 11;
        } else playerTotal+= parseInt(playerHand[i].split("-")[0])
    }
    for (let i = 0; i < playerHand.length; i++){
        if (playerHand[i].split("-")[0] ==="A" && playerTotal > 21){
            playerTotal-=10
        }
    }
    // console.log(playerTotal)
}

function continueGame(){
    if (deck.length <=6){
        deckSignal.innerHTML = "New Deck"
        makeDeck()
        shuffle()
    }
    checkBalance()
    playerTotal = 0
    dealerTotal = 0
    winnerMessage.innerHTML = ""
    document.querySelector('.dealer-section').innerHTML = ``
    let h2 = document.createElement("h2")
    h2.innerText = "Dealer Hand"
    let dc2 = document.createElement("img")
    dc2.setAttribute("id", "dc2")
    let back = document.createElement("img")
    back.setAttribute("id", "back")
    back.src = "./cards/back.png"
    document.querySelector('.dealer-section').append(h2, back, dc2)
    document.querySelector('.player-section').innerHTML = ``
    let h2Player = document.createElement("h2")
    h2Player.innerText = "Player Hand"
    let pc1 = document.createElement("img")
    pc1.setAttribute("id", "pc1")
    let pc2 = document.createElement("img")
    pc2.setAttribute("id", "pc2")
    document.querySelector('.player-section').append(h2Player, pc1, pc2)
    playerDraw();
    dealerDraw();
}



## Link to Game
https://anandpatel48.github.io/SEI-BlackJack/

## Next Steps
There are a few things I plan to do with this game. I would first like to add animations for the cards being dealt out. I would also like to add an animation for the dealer flipping their face down card and an animation for discarding of the cards.
An animation for shuffling would be a nice one to add as well.

I would also like to add more functionality to the game. Instead of their being an automatic wager of zero, I would like to make it so that the player can decide how much they would like to wager by inputting it themselves. The balance would react accordingly
based on whether the player wins or loses. I would also like to add some of the features commonly seen in online BlackJack games. For example, a double down functionality where the player is able to double their bet on the hand if they would like to. Additionaly, 
I would like for more than 1 player to play the game, and for there to be 6 decks per round, as is commonly seen in casino BlackJack. 
