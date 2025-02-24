import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

function GuessResults({values}) {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={values[num]} />
      ))}
    </div>
  );

}

export default GuessResults
