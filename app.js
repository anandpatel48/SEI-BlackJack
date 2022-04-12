
//declare player and dealer totals to be used in functions
let playerTotal = 0
let dealerTotal = 0

//for the hit button, set allowedToHit equal to true and make it false if playerTotal is at or above 21
let playerTurn = true

//declaring wager and balance from DOM
const wagerDOM = document.querySelector('.wager')
// console.log(wager)
const balanceDOM = document.querySelector('.balance')
// console.log(balance)

//creating a variable to get player-info and dealer-info from dom
const playerSection = document.querySelector('.player-section')
// console.log(playerSection)
const dealerSection = document.querySelector('.dealer-section')
// console.log(dealerSection)

//declaring starting wager and balance
wager  = 100
balance = 900
wagerDOM.innerHTML = wager;
balanceDOM.innerHTML = balance;

//created img elements in player-section of HTML for card pictures to be displayed. Calling them here so card images can be displayed

const pc1 = document.getElementById("pc1")
const pc2 = document.getElementById("pc2")
const dc2 = document.getElementById("dc2")
const back = document.getElementById("back")
//getting hit from DOM to create a function for hit button
const hit = document.querySelector('.hit')
//getting message from DOM to signal player is allowed to hit or not allowed
const message = document.querySelector(".message")

const hitButton = document.querySelector('.hit')

const creditsMessage = document.querySelector('.out-of-credits')

const stayButton = document.querySelector('.stay')

const deckSignal = document.querySelector('.deck-signal')

const winnerMessage = document.querySelector('.winner-message')

const resetButton = document.querySelector('.reset')



//declaring a function to open game so it can be called when the reset button is hit
function openGame(){
    makeDeck()
    shuffle()
    dealerDraw()
    playerDraw()
}

openGame()


//making a function to make the deck so I can call back to it whenever needed
function makeDeck(){
    //creating a deck of cards
    //creating an array of suits
    let suits = ['H', 'D', 'S', 'C']
    //creating array of card values, called cards
    //using strings because some card values are letter
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    //creating an empty deck so that a for loop can push card and suit pairs into the deck
    deck = []
    //nested for loop to create the deck
    for (let i = 0; i < suits.length; i++){
        for(let j = 0; j < cards.length; j++){
            // console.log(cards[j] + suits[i]);
            deck.push(cards[j] + "-" + suits[i])
        }
    }


}

//create a function to shuffle deck
function shuffle(){
    for (let i = 0; i <deck.length; i++){
        //temp is the card in the deck we are replacing with the random card
        let temp = deck[i];
        //randomIndex will generate a random number from 0-51
        let randomIndex  = Math.floor(Math.random() * deck.length);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = temp
    }
    // console.log(deck)
}




//player draw pops two cards from the deck and stores them to the player hand. 
//The cards that are popped are shown as card pictures through the DOM changing the src of the two cards in html
function playerDraw(){
    playerHand = []
    for (let i = 0; i < 2; i++){
        playerHand[i] = deck.pop()
    }
    playerSum()
    document.getElementById("pc1").src = "./cards/" + playerHand[0] + ".png"
    document.getElementById("pc2").src = "./cards/" + playerHand[1] + ".png"
}


//the dealer does the same thing for its draw but only shows 1 card on the screen where as the other is
//just an image of the back of the card
function dealerDraw(){
    dealerHand = []
    for (let i = 0; i < 2; i++){
        dealerHand[i] = deck.pop()
    }
    dealerSum()
    document.getElementById("dc2").src = "./cards/" + dealerHand[1] + ".png"
    // console.log(dealerHand)
    
}

//player sum adds the total for the hand. If the hand has a king queen, or jack, the total is increased by 10
//if the hand as an ace the default addition is 11. I do a for loop to say that if a card is and
//the total for the hand is above 21, the total is reduced by 10 to essentially make the ace a 1.
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

//dealer sum functionality is basically the same as the player sum functionality. Need to work on this to not make it repetitive.
function dealerSum(){
    for (let i = 0; i < dealerHand.length; i++){
        if(dealerHand[i].split("-")[0]=== "K" || dealerHand[i].split("-")[0]=== "Q" || dealerHand[i].split("-")[0]=== "J") {
            dealerTotal += 10
        } else if(dealerHand[i].split("-")[0]=== "A") {
            dealerTotal += 11;
        } else dealerTotal+= parseInt(dealerHand[i].split("-")[0])
    }
    for (let i = 0; i < dealerHand.length; i++){
        if (dealerHand[i].split("-")[0] ==="A" && dealerTotal > 21){
            dealerTotal-=10
        }
    }
    // console.log(dealerTotal)
}

//this is for the hit button. If the player total from the draw is less than 21, the player is allowed to hit. 
//The player total is set to 0, and the player is allowd to pop a new card from the deck and push it to their hand
//The player sum function is called again and will factor in the new card this time.
//I create an img element in the player-section of the Dom and append an image to it, which is linked to the new card
//if the new playerTotal is over 21, the program defaults to the dealermove function.
//if the playerTotal becomes 21, the program defaults to the dealermove function because the player has BlackJack
//Otherwise, if the playerTotal is less than 21, the player may hit again or decide to stay
hitButton.addEventListener('click', ()=>{
    if (playerTotal <21){
        playerTotal = 0
        let newCard = deck.pop()
        playerHand.push(newCard);
        playerSum()
        let cardImg = document.createElement("img")
        cardImg.src = "./cards/" + newCard + ".png"
        playerSection.append(cardImg)
        if (playerTotal > 21){
            dealerMove()
        } else if (playerTotal === 21){
            dealerMove()
        }
        
    } else {
        dealerMove()
    }  
    deckSignal.innerHTML = ""
})


//a while loop is used to allows the dealer to keep drawing cards while this condition is satisfied
//the dealerTotal has to be less than or equal to the player total, the dealer total has to be less than or
//equal to 21, and the playerTotal has to be less than 21
//then, a similar process to the hit function follows
//the winner function then gets called and the back of card image that shows up at first is changed so that
//the source is linked to the first card in the dealers hand
function dealerMove() {
    while (dealerTotal <= playerTotal && dealerTotal <= 21 && playerTotal < 21) {
        dealerTotal = 0
        let newCard = deck.pop()
        dealerHand.push(newCard);
        dealerSum()
        var cardImg = document.createElement("img")
        cardImg.src = "./cards/" + newCard + ".png"
        dealerSection.append(cardImg)
    } 
        winner()
        document.getElementById("back").src = "./cards/" + dealerHand[0] + ".png"

}


//the stay allows the player to keep their card as long as their total is at or below 21
//The deck signal which signals a new deck's inner html is changed to blank.
//it then instructs the dealer to make its move
stayButton.addEventListener('click', ()=>{ 
    deckSignal.innerHTML = ""  
    dealerMove()
})


//the winner function is called once the dealer is done making moves. The winner is decided
//by going through the following win conditions.
//The winner is displayed through the winnerMessage in the DOM.
//balance is either increased or decreased by 100 depending on if the player won or lost
//Then, after displaying the winner for 4 seconds, the continue game function is called.
function winner(){
    if (playerTotal<21 && dealerTotal < 21 && playerTotal > dealerTotal){
        winnerMessage.innerHTML = "You win!";
        balance+=100
        balanceDOM.innerHTML = balance
    } else if (playerTotal > 21) {
        winnerMessage.innerHTML = "You Busted";
        balance -= 100
        balanceDOM.innerHTML = balance
    } else if (dealerTotal <= 21 && dealerTotal > playerTotal){
        winnerMessage.innerHTML = "You Lose";
        balance -= 100
        balanceDOM.innerHTML = balance   
    } else if (playerTotal === 21){
        winnerMessage.innerHTML = "BlackJack!";
        balance += 100
        balanceDOM.innerHTML = balance
    } else if (dealerTotal > 21 && playerTotal <= 21) {
        winnerMessage.innerHTML = "You Win! The Dealer Busted"
        balance += 100
        balanceDOM.innerHTML = balance
    }
    
    setTimeout(continueGame, 4000)

}


resetButton.addEventListener('click', reset)

//the reset button allows the playet to reset the game.
//The dealer card 1 image is set back to the back of the card
//all messages are set to blank except for New Deck which alerts the player that a new deck is being played
//player and dealer totals are set to 0, and balance and wager are reset.
//Then a deck is made, shuffled, the dealer and player draw their cards and a new game starts
function reset(){
    document.getElementById("back").src = "./cards/back.png"
    creditsMessage.innerHTML = ""
    deckSignal.innerHTML = "New Deck"
    playerTotal = 0
    dealerTotal = 0
    wager = 100
    balance = 900
    wagerDOM.innerHTML = wager;
    balanceDOM.innerHTML = balance;
    makeDeck();
    shuffle();
    playerDraw()
    dealerDraw()
}

//this function is used to continue an ongoing game.
//If the deck length is less than or equal to 6, the player is alerted that a new deck is coming in and a 
//new deck is made and shuffled.
//A check balance function is used to make sure that the player still has enough credits to play, otherwise, the reset
//function is called
//Then there is a series of steps to reset the DOM to how it was originally so the existing cards would leave and new cards
//would show up once the player and dealer draw.
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


//the checkBalance function checks to see if the balance is = to -100. This is because the player starts with 1000,
//but automatically wagers 100. Balance + wager = total. Everytime the player is at 0 balance and 100 wager, that is their
//last hand if they lose, and if they lose balance would become -100.
//In this case, a message displays telling their player they are out of credits and that in 5 seconds a new game would start.
//The reset function is called after 5 seconds.
function checkBalance() {
    if (balance === -100){
        creditsMessage.innerHTML = "out of credits, new game starts in 5 seconds"
        setTimeout(reset, 5000)
    }
}
