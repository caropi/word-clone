import React from 'react';

function GuessResults({ guessList }) {
  return (
    <section>
      <div className="guess-results">
        {guessList.map((guess) => (
          <p className="guess" key={guess}>
            {guess}
          </p>
        ))}
      </div>
    </section>
  );
}

export default GuessResults;
