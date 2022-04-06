//making a function to make the deck so I can call back to it whenever needed
function makeDeck(){
    //creating a deck of cards
    //creating an array of suits
    let suits = ['h', 'd', 's', 'c']
    //creating array of card values, called cards
    //using strings because some card values are letter
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']
    //creating an empty deck so that a for loop can push card and suit pairs into the deck
    let deck = []
    //nested for loop to create the deck
    for (let i = 0; i < suits.length; i++){
        for(let j = 0; j < cards.length; j++){
            // console.log(cards[j] + suits[i]);
            deck.push(cards[j]+suits[i])
        }
    }
    return deck
}
//console log makeDeck() to make sure it works
// console.log(makeDeck())

// console.log(deck)

// console.log(test)
//create a function to shuffle deck
function shuffle(test){
    for (let i = 0; i <test.length; i++){
        //temp is the card in the deck we are replacing with the random card
        let temp = test[i];
        //randomIndex will generate a random number from 0-51
        let randomIndex  = Math.floor(Math.random() * test.length);
        test[i] = test[randomIndex];
        test[randomIndex] = temp
    }
}

let test = makeDeck()
shuffle(test)
console.log(test)