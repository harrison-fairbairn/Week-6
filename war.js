

/*                         !WAR WAR WAR WAR WAR!
For the final project you will be creating an automated version of the classic card game WAR.
Think about how you would build this project and write your plan down. Consider classes such
as Card, Deck, and Player and what fields and methods they might each have. 
You can implement the game however you’d like (i.e. printing to the console, using alert,
or some other way). The completed project should, when ran, do the following:
Deal 26 Cards to two Players from a Deck. 
Iterate through the turns where each Player plays a Card
The Player who played the higher card is awarded a point
Ties result in zero points for either Player
After all cards have been played, display the score.
Write Unit Tests using Mocha and Chai for each of the functions you write
*/


let playersTurns = [];   
let dealersTurns = [];

let userscore = 26;
let dealerscore = 26;

function getCardNumber() {
    return Math.floor(Math.random() * 13 + 2);
}
loto
function lotocards() {

    var usercard = getCardNumber(); 
    playersTurns.push(usercard);

    var usercardoutput = "";
    if(usercard === 11) {
        usercardoutput = "J"
    } else if(usercard === 12) {
        usercardoutput = "Q";
    } else if(usercard === 13) {
        usercardoutput = "K";
    } else if(usercard === 14) {
        usercardoutput = "A";
    } else {
        usercardoutput = usercard;
    }

    document.getElementById("usercardnum").innerHTML = usercardoutput;

    var dealercard = Math.floor(Math.random() * 13 + 2);
    dealersTurns.push(dealercard);

    var dealercardoutput = "";
    if(dealercard === 11) {
        dealercardoutput = "J"
    } else if(dealercard === 12) {
        dealercardoutput = "Q";
    } else if(dealercard === 13) {
        dealercardoutput = "K";
    } else if(dealercard ===14) {
        dealercardoutput = "A";
    } else {
        dealercardoutput = dealercard;
    }

    document.getElementById("dealercardnum").innerHTML = dealercardoutput;

    // Character elements for suit of card
    var dealerCharacter = Math.floor(Math.random() * 4 + 1);

    switch(dealerCharacter) {
        case 1:
            dealerCharacter = "&hearts;";
            document.getElementById("dealerchar").style.color = "red";
            document.getElementById("dealerbigchar").style.color = "red";
        break;

        case 2:
            dealerCharacter = "&spades;";
            document.getElementById("dealerchar").style.color = "black";
            document.getElementById("dealerbigchar").style.color = "black";
        break;

        case 3:
            dealerCharacter = "&diams;";
            document.getElementById("dealerchar").style.color = "red";
            document.getElementById("dealerbigchar").style.color = "red";
        break;
        
        case 4:
            dealerCharacter = "&clubs;";
            document.getElementById("dealerchar").style.color = "black";
            document.getElementById("dealerbigchar").style.color = "black";
        break;
    }
    document.getElementById("dealerchar").innerHTML = dealerCharacter;
    document.getElementById("dealerbigchar").innerHTML = dealerCharacter;

    // user chars:
    var userchar = Math.floor(Math.random() * 4 + 1);

    switch(userchar) {
        case 1:
            userchar = "&hearts;";
            document.getElementById("userchar").style.color = "red";
            document.getElementById("userbigchar").style.color = "red";
        break;

        case 2:
            userchar = "&spades;";
            document.getElementById("userchar").style.color = "black";
            document.getElementById("userbigchar").style.color = "black";
        break;

        case 3:
            userchar = "&diams;";
            document.getElementById("userchar").style.color = "red";
            document.getElementById("userbigchar").style.color = "red";
        break;
        
        case 4:
            userchar = "&clubs;";
            document.getElementById("userchar").style.color = "black";
            document.getElementById("userbigchar").style.color = "black";
        break;
    }
    document.getElementById("userchar").innerHTML = userchar;
    document.getElementById("userbigchar").innerHTML = userchar;

    // scores:
    if(usercard === dealercard) {
        ifqual();
        document.getElementById("pointer").innerHTML = "=";
    } else if(usercard > dealercard) {
        userscore++;
        dealerscore--;
        document.getElementById("pointer").innerHTML = "►";
    } else if(dealercard > usercard) {
        dealerscore++;
        userscore--;
        document.getElementById("pointer").innerHTML = "◄";
    }

    if(userscore < 10) {
        document.getElementById("userscore").style.color = "red";
    } else {
        document.getElementById("userscore").style.color = "black";
    }

    if(dealerscore < 10) {
        document.getElementById("dealerscore").style.color = "red";
    } else {
        document.getElementById("dealerscore").style.color = "black";
    }

    // Display Scores:
    document.getElementById("dealerscore").innerHTML = dealerscore;
    document.getElementById("userscore").innerHTML = userscore;        

    // Display Turns:
    var dealerturns = "";
    var i;
    for(i = 0; i < dealersTurns.length; i++) {
        dealerturns = dealerturns + dealersTurns[i] + ", ";
        document.getElementById("dealerturns").innerHTML = dealerturns
    }

    var userturns = "";
    var j;
    for(j = 0; j < playersTurns.length; j++) {
        userturns = userturns + playersTurns[j] + ", ";
        document.getElementById("userturns").innerHTML = userturns
    }

    checkScores();
}

function ifqual() {
    var usercard = Math.floor(Math.random() * 13 + 2);
    playersTurns.push(usercard);

    var dealercard = Math.floor(Math.random() * 13 + 2);
    dealersTurns.push(dealercard);

    if(usercard === dealercard) {
        ifqual();
        document.getElementById("pointer").innerHTML = "=";
    } else if(usercard > dealercard) {
        userscore = userscore +4;
        dealerscore = dealerscore -4;
        document.getElementById("pointer").innerHTML = "►";
    } else if(dealerscore > userscore) {    
        dealerscore = dealerscore +4;
        userscore = userscore -4;
        document.getElementById("pointer").innerHTML = "◄";
    }
}

function checkScores() {
    if(userscore <= 0) {
        userscore = 0;
        alert("Dealer Win!");
        document.getElementById("mainbtn").disabled = true;
    } else if(dealerscore <= 0) {
        userscore = 0;
        alert("User Win!");
        document.getElementById("mainbtn").disabled = true;
    }
}


