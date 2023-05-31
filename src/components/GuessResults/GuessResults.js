import React from 'react';

function GuessResults({ guessList }) {
  return (
    <section>
      <ul className="guess-results">
        {guessList.map((guess) => (
          <li className="guess" key={guess}>
            {guess}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GuessResults;
