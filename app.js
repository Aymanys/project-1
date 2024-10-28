//Constant & Variables
const gameLetters = ['A', 'C', 'D', 'B', 'B', 'A', 'D', 'C']
let firstClick = null
let secondClick = null
let checkingMatch = false

//Start game function
function startGame() {
  const grid = document.getElementById('grid')
  grid.innerHTML = ''
  matchedLetters = 0

  //Creating game boxes for letters
  gameLetters.forEach((letter) => {
    const box = document.createElement('div')
    box.className = 'box'
    box.dataset.letter = letter
    box.addEventListener('click', () => showLetter(box))
    grid.appendChild(box) //
  })
}

//Revealing selected box
function showLetter(box) {
  if (checkingMatch || box.classList.contains('show')) {
    return
  }

  box.textContent = box.dataset.letter
  box.classList.add('show')

  if (!firstClick) {
    firstClick = box
  } else {
    secondClick = box
    checkIfMatching()
  }
}

//Restart button
document.getElementById('restartButton').addEventListener('click', startGame)
startGame()

function checkIfMatching() {
  checkingMatch = true

  //Checking matches
  if (firstClick.dataset.letter === secondClick.dataset.letter) {
    matchedLetters++
    resetGuess()
    if (matchedLetters === gameLetters.length / 2) {
      document.getElementById('gameOverMessage').style.display = 'block'
    }
  } else {
    setTimeout(() => {
      //delay time
      firstClick.textContent = ''
      secondClick.textContent = ''
      firstClick.classList.remove('show')
      secondClick.classList.remove('show')
      resetGuess()
    }, 900)
  }
}

//Reset after each try
function resetGuess() {
  firstClick = null
  secondClick = null
  checkingMatch = false
}
