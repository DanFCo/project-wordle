import { range } from '../../utils'

function Guess( { value } ) {

  return (
    <p className="guess">
      {
        range(5).map((num) =>
          <span
            className={value ? `cell ${value[num].status}` : 'cell'}
            key={num}> {value ? value[num].letter : undefined}
          </span>
        )
      }
    </p>
  );

}

export default Guess
