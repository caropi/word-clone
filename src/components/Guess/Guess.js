import React from 'react';

/**
 * 6 instances should be rendered at all times, no matter how many guesses have been submitted.
The Guess component should render 5 spans, each with the class of cell.
Each cell should contain a letter, if the Guess instance has been given a value. If not, the cell should be blank.
Use the NUM_OF_GUESSES_ALLOWED constant, when needed.
No key warnings in the console.
 */

function Guess({ guess, id }) {
  return (
    <p className="guess">
      {guess.map((letter, index) => (
        <span className="cell" key={letter === '' ? index : `${letter}${index}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
