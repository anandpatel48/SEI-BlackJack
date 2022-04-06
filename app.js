//creating a deck of cards
//creating an array of suits
let suits = ['h', 'd', 's', 'c']
//creating array of card values, called cards
//using strings because some card values are letter
let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']
//creating an empty deck so that a for loop can push card and suit pairs into the deck
let deck = []

//for loop to create the deck
for (let i = 0; i < suits.length; i++){
    for(let j = 0; j < cards.length; j++){
        // console.log(cards[j] + suits[i]);
        deck.push(suits[i]+cards[j])
    }
}
console.log(deck)