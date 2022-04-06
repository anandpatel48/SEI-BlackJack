
//declare player and dealer totals to be used in functions
let playerTotal = 0
let dealerTotal = 0

//for the hit button, set allowedToHit equal to true and make it false if playerTotal is at or above 21
let allowedToHit = true

//declaring wager and balance from DOM
const wager = document.querySelector('.wager')
// console.log(wager)
const balance = document.querySelector('.balance')
// console.log(balance)

//creating a variable to get player-info and dealer-info from dom
const playerSection = document.querySelector('.player-info')
console.log(playerSection)
const dealerSection = document.querySelector('.dealer-info')
console.log(dealerSection)

//declaring a function to open game so it can be called when the reset button is hit
function openGame(){
    makeDeck()
    shuffle()
    wager.innerHTML = 100;
    balance.innerHTML = 900;
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
//console log makeDeck() to make sure it works
// console.log(makeDeck())

// console.log(makeDeck())

// console.log(test)
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
    console.log(deck)
}

// testing to see if deck.pop retrieves a hand
// console.log(deck.pop())
//pc1 and pc2 are to reflect the images for the players cards

function playerDraw(){
    playerHand = []
    for (let i = 0; i < 2; i++){
        playerHand[i] = deck.pop()
    }
    // console.log(playerHand)
    //add to player total
    let pc1 = document.createElement("img")
    pc1.src = "./cards/" + playerHand[0] + ".png"
    playerSection.append(pc1)
    let pc2 = document.createElement('img')
    pc2.src = "./cards/" + playerHand[1] + ".png"
    playerSection.append(pc2)
    return playerHand
}

function dealerDraw(){
    dealerHand = []
    for (let i = 0; i < 2; i++){
        dealerHand[i] = deck.pop()
    }
    // console.log(dealerHand)
    let dc2 = document.createElement("img")
    dc2.src = "./cards/" + dealerHand[1] + ".png"
    dealerSection.append(dc2)
    
}

function totals(){
    let pv1 = playerHand[0].split("-")[0]
    let pv2 = playerHand[1].split("-")[0]
    let dv1 = dealerHand[0].split("-")[0]
    let dv2 = dealerHand[1].split("-")[0]
    // console.log(pv1)
    // console.log(pv2)
    if(pv1 === "K" || pv1 === "Q" || pv1 === "J"){
        pv1 = 10
    }if(pv2 === "K" || pv2 === "Q" || pv2 === "J"){
        pv2 = 10
    }
    if(dv1 === "K" || dv1 === "Q" || dv1 === "J"){
        dv1 = 10
    }if(dv2 === "K" || dv2 === "Q" || dv2 === "J"){
        dv2 = 10
    }
    playerTotal = parseInt(pv1) + parseInt(pv2)
    dealerTotal = parseInt(dv1) + parseInt(dv2)
    console.log(playerTotal)
    console.log(dealerTotal)
}

totals()
