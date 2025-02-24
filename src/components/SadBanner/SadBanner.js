function SadBanner({answer}){
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      {/* <button border='solid' onClick={() => window.location.reload(true)}>New Game</button> */}
    </div>
  );
}

export default SadBanner
