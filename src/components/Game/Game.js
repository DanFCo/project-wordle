import { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import HappyBanner from '../HappyBanner'
import SadBanner from '../SadBanner'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [showHappyBanner, setShowHappyBanner] = useState(false)
  const [showSadBanner, setShowSadBanner] = useState(false)

  function handleSubmitGuess(guess) {
    const checkedGuess = checkGuess(guess, answer);
    setGuesses((prevGuesses) => [...prevGuesses, checkedGuess]);

    const uniqueCheckedGuessStatuses = checkedGuess.map((charData) => charData.status)
    const statusesSet =  new Set(uniqueCheckedGuessStatuses)
    const isCorrectAnswer = (statusesSet.size === 1 && statusesSet.has('correct'))

    if(!!isCorrectAnswer){
      setShowHappyBanner(true)
    }


    if(guesses.length + 1 === NUM_OF_GUESSES_ALLOWED){
      setShowSadBanner(true)
    }
  }

  return (
    <>
      <GuessResults values={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disable={showHappyBanner || showSadBanner}
      />
      {showHappyBanner ? <HappyBanner guessesCount={guesses.length}/> : null}
      {showSadBanner ? <SadBanner answer={answer} /> : null}
    </>
  );
}

export default Game
