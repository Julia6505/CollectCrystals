// To begin game:
// -random number must be generated between 19-120 and display on screen
// -wins/losses must be set to 0
// -four crystals must be set to random value between 1-12 
// -score must be set to 0 

// To play game: 
// -User clicks on each crystal
//     - Each click adds to the score, adding the value assigned to each cyrstal at the beginning of the game
// - WIN GAME IF: score equals (but does not exceed) random number displayed on screen 
// -LOSE GAME IF: score exceeds random number displayed on screen 

// WHEN GAME WON:
// -Add 1 to Wins display; reset game so that total score resets to 0, random number assigns new random number, and crystals each get new random value 

// WHEN GAME LOST: 
// -Add 1 to Losses display; reset game so that total score resets to 0, random number assigns new random number, and crystals each get new random value 

//GLOBAL VARIABLES

$(document).ready(function() {  

var randomNumberMain; 
var randomNumberCrystalBlue;
var randomNumberCrystalGreen;
var randomNumberCrystalPink;
var randomNumberCrystalPurple;
var startGame;
var win = 0;
var losses = 0;
var myScore = 0;



//FUNCTIONS

randomNumberMain = function getRandomNumberMain(min, max) {
    return Math.floor(Math.random() * (120 - 19 +1) ) + 19;
};

randomNumberCrystals = function getRandomNumberCrystals(min, max) {
    return Math.floor(Math.random() * (12 - 1 +1) ) + 1;
};




$(".btn").on("click",function(){
    myScore += (randomNumberCrystalBlue, randomNumberCrystalGreen, randomNumberCrystalPink, randomNumberCrystalPurple);
    $("#printscore").html(myScore);
  });
  

$("#testclick").on("click",function(){
    randomNumberCrystalBlue = randomNumberCrystals(1,12);
    randomNumberCrystalGreen = randomNumberCrystals(1,12);
    randomNumberCrystalPink = randomNumberCrystals(1,12);
    randomNumberCrystalPurple = randomNumberCrystals(1,12);
    randomNumberMain(19,120);
    $("#random-number").html(randomNumberMain(19,120));
    });


// if (i = 0, i < randomNumberMain, i++) {






// }
// else if (randomNumberMain === myScore) {}
// else (randomNumberMain > myScore) 



});




// $(".btn").on('click', function (){
//     randomNumberMain = function getRandomNumberMain(min, max) {
//         return Math.floor(Math.random() * (120 - 19 +1) ) + 19;
//     };
// });







//MAIN PROCESS