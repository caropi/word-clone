import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form/Form';
import GuessResults from '../GuessResults/GuessResults';

/**
 * When the user submits their guess, that value should be rendered within this new component.
 * There should be no key warnings in the console!
 */

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  console.log({ guess });
  return (
    <main>
      <section>
        <GuessResults />
        <Form setGuess={setGuess} />
      </section>
    </main>
  );
}

export default Game;
