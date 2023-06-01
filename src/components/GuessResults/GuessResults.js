import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

/**
 * Render blank grid range
 */

function GuessResults({ guessList }) {
  const rangeArray = range(5);
  const blankGuess = rangeArray.map((item) => '');
  console.log(guessList[rangeArray[0]]?.guess);
  return (
    <section>
      <div className="guess-results">
        {rangeArray.map((item) => (
          <Guess key={item} guess={guessList[item]?.guess || blankGuess} id={guessList[item]?.id} />
        ))}
      </div>
    </section>
  );
}

export default GuessResults;
