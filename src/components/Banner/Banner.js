import React from 'react';

/**
 * If the user wins the game, a happy banner should be shown.
If the user loses the game, a sad banner should be shown
When the game is over, the text input should be disabled.
It's up to you to decide how to structure the banner! Feel free to create new component(s) if you think it's warranted.
 */

function Banner({ guessList, answer }) {
  if (guessList.length === 6 && guessList[5] === answer) {
    <div className={`happy banner`}>
      {' '}
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>;
  }
  return (
    <div className={`sad banner`}>
      {' '}
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;
