import {useState} from 'react'


function GuessInput({handleSubmitGuess, disable}) {
  const [tentativeGuess, setTentativeGuess] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if(tentativeGuess.length !== 5){
      alert("⚠️ Guess Must have 5 letters ⚠️");
      return
    }

    handleSubmitGuess(tentativeGuess)

    setTentativeGuess('')
  }

  return(
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {handleSubmit(event)}}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {setTentativeGuess(event.target.value.toUpperCase())}}
        minLength={5}
        maxLength={5}
        disabled={disable}
      />
    </form>
  )

}


export default GuessInput;
