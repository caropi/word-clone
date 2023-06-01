import React from 'react';

function Guess({ guess, id }) {
  return (
    <p className="guess">
      {guess.map((letter, index) => (
        <span
          className={`cell ${letter.status && letter.status}`}
          key={letter === '' ? index : `${letter}${index}`}>
          {letter.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
