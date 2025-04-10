const computerChoiceDisplay = document.getElementById('computersChoice')
const palyerChoiceDisplay = document.getElementById('palyersChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice;
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
    userChoice =e.target.id
    palyerChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
     if(randomNumber === 1){
        computerChoice = 'rock'
     }
     if(randomNumber === 2){
        computerChoice = 'paper'
     }
     if(randomNumber === 3){
        computerChoice = 'scissor'
     }
     computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if (computerChoice === userChoice){
        result = 'its draw'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost'
    }
    if (computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'you lost'
    }
    if (computerChoice === 'scissor' && userChoice === 'paper'){
        result = 'you lost'
    }
    if (computerChoice === 'scissor' && userChoice === 'rock'){
        result = 'you win'
    }
    resultDisplay.innerHTML = result
}