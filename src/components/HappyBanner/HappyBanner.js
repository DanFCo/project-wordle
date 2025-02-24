function HappyBanner({guessesCount}){


  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {" "}
        <strong>{guessesCount} {guessesCount === 1 ? 'guess' : 'guesses'}</strong>.
      </p>
    </div>
  );
}

export default HappyBanner
