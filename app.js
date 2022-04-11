
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

const deckSignal = document.querySelector('.deck-signal')
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





function playerDraw(){
    playerHand = []
    for (let i = 0; i < 2; i++){
        playerHand[i] = deck.pop()
    }
    playerSum()
    document.getElementById("pc1").src = "./cards/" + playerHand[0] + ".png"
    document.getElementById("pc2").src = "./cards/" + playerHand[1] + ".png"
}

function dealerDraw(){
    dealerHand = []
    for (let i = 0; i < 2; i++){
        dealerHand[i] = deck.pop()
    }
    dealerSum()
    document.getElementById("dc2").src = "./cards/" + dealerHand[1] + ".png"
    
}


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

}
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

}


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

const stayButton = document.querySelector('.stay')

stayButton.addEventListener('click', ()=>{ 
    deckSignal.innerHTML = ""  
    dealerMove()
})

const winnerMessage = document.querySelector('.winner-message')

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

let resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', reset)

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



function checkBalance() {
    if (balance === -100){
        creditsMessage.innerHTML = "out of credits, new game starts in 5 seconds"
        setTimeout(reset, 5000)
    }
}
