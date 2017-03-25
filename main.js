var cards = ["queen", "king", "queen", "king"];



var cardsInPlay = [];

var gameBoard = document.getElementById("game-board");

var createCards = function (){

    for (var i = 0; i < cards.length; i++) {
        var newCards = document.createElement('div');
        newCards.className = 'card';
        
        newCards.setAttribute('data-card',cards[i]);
        
        
        //add cards to gameboard one by one
        gameBoard.appendChild(newCards);
        
        
        newCards.addEventListener('click', isTwoCards);
        
        
        
        
    }

    
};



//
function isTwoCards(){
    
    //
    cardsInPlay.push(this.getAttribute('data-card'));
    
    
    //checks if data-card is queen or king depensing on card click
    if(this.getAttribute('data-card') === "king") {
        this.innerHTML = '<img src="images/king.gif">';
    } else if (this.getAttribute('data-card') === "queen"){
        this.innerHTML = '<img src="images/queen.png">';
    }
    
    
    //resets back cards
    if (cardsInPlay.length === 2) {
        
//whenIsMacth();
        
        
    
    



    if (cardsInPlay[0] === cardsInPlay[1] ) {
        alert("Is a Match!!");
    } else {
        alert("Try Again");
                cardsInPlay = [];

    }

}

}
createCards();
