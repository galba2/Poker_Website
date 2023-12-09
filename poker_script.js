
//Create card deck 
let deck = [];

for(let i = 1; i < 5; i++){

    for(let j = 2; j < 15; j++){

        deck.push( (i * 100) + j);//mutiplying by 100 so i can be the first in a 3 digit number
    }
}

//Deck Suit Key
// 1 = diamonds
// 2 = clubs
// 3 = hearts
// 4 = spades

console.log(deck);

//Create Seats
const seats = {
    user : [ "User", 7, [102,103,104,105,106] ],
    playerOne : [ "Player One", 10, [102,103,104,105,106] ],
    playerTwo : [ "Player Two", 10, [102,103,104,105,106] ],
    playerThree : [ "Player Three", 10, [102,103,104,105,106] ]
}
console.log('Test 2');
console.log(seats.user[2][0]);
seats.user[2][0] = 407;
console.log(seats.user[2][0]);
console.log( Math.floor(Math.random() * deck.length) );

function buttonPressed() {

    //PLAYER ONE CARDFLICK
    document.getElementById("player-cards-one-first").style.animation = "cardFlickPlayerOneFirst .7s linear 0s normal both";
    document.getElementById("player-cards-one-second").style.animation = "cardFlickPlayerOneSecond .7s ease-out 0s normal both";
    document.getElementById("player-cards-one-third").style.animation = "cardFlickPlayerOneThird .7s linear 0s normal both";
    document.getElementById("player-cards-one-fourth").style.animation = "cardFlickPlayerOneFourth .7s ease-out 0s normal both";
    document.getElementById("player-cards-one-fifth").style.animation = "cardFlickPlayerOneFifth .7s ease-out 0s normal both";

    //PLAYER TWO CARDFLICK
    document.getElementById("player-cards-two-first").style.animation = "cardFlickPlayerTwoFirst .7s linear 0s normal both";
    document.getElementById("player-cards-two-second").style.animation = "cardFlickPlayerTwoSecond .7s ease-out 0s normal both";
    document.getElementById("player-cards-two-third").style.animation = "cardFlickPlayerTwoThird .7s linear 0s normal both";
    document.getElementById("player-cards-two-fourth").style.animation = "cardFlickPlayerTwoFourth .7s ease-out 0s normal both";
    document.getElementById("player-cards-two-fifth").style.animation = "cardFlickPlayerTwoFifth .7s ease-out 0s normal both";

    //PLAYER THREE CARDFLICK
    document.getElementById("player-cards-three-first").style.animation = "cardFlickPlayerThreeFirst .7s linear 0s normal both";
    document.getElementById("player-cards-three-second").style.animation = "cardFlickPlayerThreeSecond .7s ease-out 0s normal both";
    document.getElementById("player-cards-three-third").style.animation = "cardFlickPlayerThreeThird .7s linear 0s normal both";
    document.getElementById("player-cards-three-fourth").style.animation = "cardFlickPlayerThreeFourth .7s ease-out 0s normal both";
    document.getElementById("player-cards-three-fifth").style.animation = "cardFlickPlayerThreeFifth .7s ease-out 0s normal both";
}

function deal(d){
    for(let i = 0; i < 5 ; i++){//5 cards per hand
        seats.user[2][i] = 3;
    }
}