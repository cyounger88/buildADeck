$(document).ready(function(){
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8","9", "10", "jack", "queen", "king", "ace"];
  suits = ["clubs", "diamonds", "spades", "hearts"];
  cards = [];
  suits.forEach(function(suit){
    numbers.forEach(function(number){
      cards.push(number + " of " + suit);
    });
  });

  $("#deck").text(cards);
});
