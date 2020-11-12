import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const maxguess = 6; 
let game1

 window.addEventListener('keypress', (e) => {
     const guess = String.fromCharCode(e.charCode)
     game1.makeGuess(guess)
     render()
 })

// function generateButtons() {
//     let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
//       `
//         <button
//           class="btn btn-lg btn-primary m-2"
//           id='` + letter + `'
//           onClick="makeGuess('` + letter + `')"
//         >
//           ` + letter + `
//         </button>
//       `).join('');
  
//     document.getElementById('keyboard').innerHTML = buttonsHTML;
//     render()
//   }
  

  

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('DFW')
    game1 = new Hangman(puzzle, maxguess)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
generateButtons()