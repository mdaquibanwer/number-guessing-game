let computerGuess;
let userGuesses = [];
const Music = new Audio("audio/01.mp3");
const headChange = document.querySelector("h3");
const gameArea = document.querySelector("#gameArea");
const newGameButton = document.querySelector("#newgamebtn");
const gameInputData = document.querySelector("#guessInput");
const attemptsLeft = document.querySelector("#attempts");
const startingPage = document.querySelector("#startPage");
const totalGuessValue = document.querySelector("#guesses");

// initialize when loaded
function initializeGameNumber(){
    computerGuess = Math.floor(Math.random()*301);
    gameArea.style.display = "none"
    newGameButton.style.display = "none"
}

// when game starts function
const startGame = () =>{
    gameArea.style.display = "block"
    startingPage.style.display = "none"
}
// main logic
const compareValue =()=>{
    const userInput = Number(gameInputData.value);
    Music.play();
    userGuesses =[...userGuesses,userInput];
    totalGuessValue.innerHTML = userGuesses
    gameInputData.value = "";

    // checking the value entered whether it is high , low or equals to the random number
    if(userInput === computerGuess){
        headChange.innerHTML = "You Won"
        newGameButton.style.display = "block"
    }else if(userInput > computerGuess){
        headChange.innerHTML = "Your Guess is High"
        maxGuess--;
        attemptsLeft.innerHTML = maxGuess;
    }
    else{
        headChange.innerHTML = "Your Guess is Low"
        maxGuess--;
        attemptsLeft.innerHTML = maxGuess;
    }
    if(maxGuess===0){
        headChange.innerHTML = `Game Over <br> Correct Value is ${computerGuess}`
        newGameButton.style.display = "block"
        console.log("you lose")
        gameInputData.disabled = true;
    }
}

//  onclick functions 
const easyMode =()=>{
    maxGuess = 10;
    attemptsLeft.innerHTML = maxGuess;
    startGame();
}
const hardMode =()=>{
    maxGuess = 5;
    attemptsLeft.innerHTML = maxGuess;
    startGame();
}
const ExtremeMode =()=>{
    maxGuess = 2;
    attemptsLeft.innerHTML = maxGuess;
    startGame();
}

// restart the game 
function newGameBegin(){
    window.location.reload();
}