/*-------------------------------- Constants --------------------------------*/
const spaceWords = [
  {
    word: 'Galaxy',
    definition:
      'a system of stars, stellar remnants, interstellar gas, dust, and dark matter bound together by gravity.'
  },
  {
    word: 'Astronaut',
    definition: 'a person trained to travel in a spacecraft.'
  },
  {
    word: 'Atmosphere',
    definition:
      'the area of air and gas that envelopes earth and other astronomical objects.'
  },
  {
    word: 'Asteroid',
    definition:
      'a small rocky body orbiting the sun, mostly found in the asteroid belt between Mars and Jupiter.'
  },
  {
    word: 'Pluto',
    definition:
      'a dwarf planet in the Kuiper belt, once considered the ninth planet in our solar system.'
  },
  {
    word: 'Cosmos',
    definition:
      'the leading explanation about how the universe began, starting from a singularity.'
  },
  {
    word: 'Comet',
    definition:
      'a small body of ice, rock, and dust that orbits the sun, often displaying a visible atmosphere.'
  },
  {
    word: 'Gravity',
    definition:
      'a natural phenomenon where objects with mass are attracted to one another.'
  },
  {
    word: 'Universe',
    definition: 'all of space and time and their contents'
  }
]

const maxWrongTries = 7

/*-------------------------------- Variables --------------------------------*/
let selectedWord = ''
let selectedDefinition = ''
let wordDisplay = ''
let wrongGuesses = 0
let guessedLetters = []
let remainedTries = maxWrongTries
let gameActive = true

/*-------------------------------- Cached Element References --------------------------------*/
const wordEl = document.getElementById('word-display')
const triesEl = document.getElementById('remaining-tries')
const messageEl = document.getElementById('game-message')
const hintEl = document.getElementById('hint-display')
const definitionEl = document.getElementById('definition-display')
const hintBtn = document.getElementById('hint-btn')
const guessedEl = document.getElementById('guessed-letters')

/*-------------------------------- Functions --------------------------------*/
function initializeGame() {
  //reset status
  wrongGuesses = 0
  guessedLetters = []
  remainedTries = maxWrongTries
  gameActive = true
  messageEl.textContent = ''
  hintEl.textContent = ''
  definitionEl.textContent = ''
  guessedEl.textContent = ''
}

function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * spaceWords.length)
  selectedWord = spaceWords[randomIndex].word.toUpperCase()
  selectedDefinition = spaceWords[randomIndex].definition
}

function handleGuess(event) {
  if (!gameActive) return

  const guessedLetter = event.key.toUpperCase()

  if (!/[A-Z]/.test(guessedLetter) || guessedLetters.includes(guessedLetter)) {
    return
  }

  guessedLetters.push(guessedLetter)

  if (selectedWord.includes(guessedLetter)) {
    updateWordDisplay(guessedLetter)
  } else {
    wrongGuesses++
    remainedTries--
    triesEl.textContent = `Remaining Tries: ${remainedTries}`

    if (wrongGuesses >= maxWrongTries) {
      gameOver(false)
    }
  }
}

function updateWordDisplay(letter) {
  let updatedWordDisplay = ''

  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === letter) {
      updatedWordDisplay += letter + ' '
    } else if (guessedLetters.includes(selectedWord[i])) {
      updatedWordDisplay += selectedWord[i] + ' '
    } else {
      updatedWordDisplay += '_ '
    }
  }

  wordDisplay = updatedWordDisplay.trim()
  wordEl.textContent = wordDisplay

  if (!wordDisplay.includes('_')) {
    gameOver(true)
  }
}

function gameOver(isWinner) {
  gameActive = false
  if (isWinner) {
    messageEl.textContent = 'Awesome! You guessed the word!'
  } else {
    messageEl.textContent = `Better luck next time! The correct word was: ${selectedWord}`
  }
}

function startNewGame() {
  initializeGame()
  selectRandomWord()
  updateWordDisplay('')
  triesEl.textContent = `Remaining Tries: ${remainedTries}`
}

startNewGame()

/*-------------------------------- Event Listeners --------------------------------*/
document.addEventListener('keydown', handleGuess)
document.getElementById('reset-btn').addEventListener('click', startNewGame)
hintBtn.addEventListener('click', function () {
  hintEl.textContent = selectedDefinition
})
