let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#sub")
const userInput = document.querySelector("#guessField")
const guessSlots = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".result")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter valid number!!")
    }
    else if(guess < 1){
        alert("Please enter number grater than 1")
    }
    else if(guess > 100){
        alert("Please enter number less than 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over. the number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess){
    if(guess === random){
        displayMessage("You guessed it right")
        endGame()
    }
    else if(guess < random){
        displayMessage("Number is too low")
    }
    else if(guess > random){
        displayMessage("Number is too high")
    }


}
function displayGuess(guess){
    userInput.value = ""
    guessSlots.innerHTML += `${guess} ` 
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`

}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const NewGameButton = document.querySelector("#new_Game")
    NewGameButton.addEventListener("click", function(e){
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlots.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })

}
function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = "<h2 id = 'new_Game'>Start new Game</h2>"
    startOver.appendChild(p)
    playGame = false
    newGame()
}