
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

//creared img elements in player-section of HTML for card pictures to be displayed. Calling them here so card images can be displayed

const pc1 = document.getElementById("pc1")
const pc2 = document.getElementById("pc2")
const dc2 = document.getElementById("dc2")

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

// testing to see if deck.pop retrieves a hand
// console.log(deck.pop())
//pc1 and pc2 are to reflect the images for the players cards



function playerDraw(){
    playerHand = []
    for (let i = 0; i < 2; i++){
        playerHand[i] = deck.pop()
    }
    playerSum()
    // let pc1 = document.createElement("img")
    pc1.src = "./cards/" + playerHand[0] + ".png"
    // playerSection.append(pc1)
    // let pc2 = document.createElement('img')
    pc2.src = "./cards/" + playerHand[1] + ".png"
    // playerSection.append(pc2)
}

function dealerDraw(){
    dealerHand = []
    for (let i = 0; i < 2; i++){
        dealerHand[i] = deck.pop()
    }
    dealerSum()
    // let dc2 = document.createElement("img")
    dc2.src = "./cards/" + dealerHand[1] + ".png"
    // dealerSection.append(dc2)
    
}


function playerSum(){
    for (let i = 0; i < playerHand.length; i++){
        if(playerHand[i].split("-")[0]=== "K" || playerHand[i].split("-")[0]=== "Q" || playerHand[i].split("-")[0]=== "J") {
            playerTotal += 10;
            // console.log(playerTotal)
        } else if(playerHand[i].split("-")[0]=== "A") {
            playerTotal += 11;
        } else playerTotal+= parseInt(playerHand[i].split("-")[0])
    }
    for (let i = 0; i < playerHand.length; i++){
        if (playerHand[i]==="A" && playerTotal > 21){
            playerTotal-=10
        }
    }
    console.log(playerTotal)
}
function dealerSum(){
    for (let i = 0; i < dealerHand.length; i++){
        if(dealerHand[i].split("-")[0]=== "K" || dealerHand[i].split("-")[0]=== "Q" || dealerHand[i].split("-")[0]=== "J") {
            dealerTotal += 10
        } else if(dealerHand[i].split("-")[0]=== "A") {
            dealerTotal += 11
        } else dealerTotal+= parseInt(dealerHand[i].split("-")[0])
    }
    for (let i = 0; i < dealerHand.length; i++){
        if (dealerHand[i]==="A" && dealerTotal > 21){
            dealerTotal-=10
        }
    }
    console.log(dealerTotal)
}


// playerSum()
// dealerSum()




// console.log(playerTotal)

//getting hit from DOM to create a function for hit button
const hit = document.querySelector('.hit')
//getting message from DOM to signal player is allowed to hit or not allowed
const message = document.querySelector(".message")
// console.log(hit)




let hitButton = document.querySelector('.hit')

hitButton.addEventListener('click', ()=>{
    playerTotal = 0
    if (playerTotal <21){
        let newCard = deck.pop()
        playerHand.push(newCard);
        playerSum()
        // for (let i = 0; i < playerHand.length; i++){
        //     if (playerHand[i]==="A" && playerTotal > 21){
        //         playerTotal-=10
        //     }
        // }
        var cardImg = document.createElement("img")
        cardImg.src = "./cards/" + newCard + ".png"
        playerSection.append(cardImg)
        
    } else {
        dealerMove()
    }  
    
})

const back = document.getElementById("back")

function dealerMove() {
    while (dealerTotal <= playerTotal && dealerTotal <= 21 && playerTotal < 21) {
        dealerTotal = 0
        let newCard = deck.pop()
        dealerHand.push(newCard);
        // if (newCard.split("-")[0]==="K" || newCard.split("-")[0]==="Q" || newCard.split("-")[0]==="J"){
        //     dealerTotal += 10
        // } else if (newCard.split("-")[0]==="A"){
        //     dealerTotal+=11
        // } else dealerTotal+= parseInt(newCard.split("-")[0])
        dealerSum()
        // for (let i = 0; i < dealerHand.length; i++){
        //     if (dealerHand[i]==="A" && dealerTotal > 21){
        //         dealerTotal-=10
        //     }
        // }
        var cardImg = document.createElement("img")
        cardImg.src = "./cards/" + newCard + ".png"
        dealerSection.append(cardImg)
    } 
        winner()
        back.src = "./cards/" + dealerHand[0] + ".png"

}

const stayButton = document.querySelector('.stay')

stayButton.addEventListener('click', ()=>{   
    dealerMove()
})

const winnerMessage = document.querySelector('.winner-message')

function winner(){
    // console.log(playerHand)
    // console.log(playerTotal)
    if (playerTotal<21 && dealerTotal < 21 && playerTotal > dealerTotal){
        winnerMessage.innerHTML = "you win!";
        balance+=100
        balanceDOM.innerHTML = balance
    } else if (playerTotal > 21) {
        // console.log(playerTotal)
        winnerMessage.innerHTML = "you busted";
        balance -= 100
        balanceDOM.innerHTML = balance
    } else if (dealerTotal <= 21 && dealerTotal > playerTotal){
        winnerMessage.innerHTML = "you  lose";
        balance -= 100
        balanceDOM.innerHTML = balance   
    } else if (playerTotal === 21){
        winnerMessage.innerHTML = "BlackJack";
        balance += 100
        balanceDOM.innerHTML = balance
    } else if (dealerTotal > 21 && playerTotal <= 21) {
        winnerMessage.innerHTML = "you win! the dealer busted"
        balance += 100
        balanceDOM.innerHTML = balance
    }
    
    // console.log(deck.length)
    setTimeout(continueGame, 2000)
    // console.log(playerHand)


}

let reset = document.querySelector('.reset')

reset.addEventListener('click', ()=>{
    wagerDOM.innerHTML = wager;
    balanceDOM.innerHTML = balance;
    makeDeck();
    shuffle();
    playerDraw()
    dealerDraw()
    playerSum()
    dealerSum()
})

function continueGame(){
    back.src = "./cards/back.png"
    playerTotal = 0
    dealerTotal = 0
    winnerMessage.innerHTML = ""
    playerDraw();
    dealerDraw();
}
