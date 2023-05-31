import React from 'react';
import Guess from '../Guess/Guess';

function GuessResults({ guessList }) {
  return (
    <section>
      <div className="guess-results">
        {guessList.map((guess) => (
          <Guess key={guess} guess={guess} />
        ))}
      </div>
    </section>
  );
}

export default GuessResults;
