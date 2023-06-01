import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form/Form';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuess] = React.useState([]);

  return (
    <main>
      <section>
        <GuessResults guessList={guessList} />

        <Form guessList={guessList} setGuess={setGuess} answer={answer} />
      </section>
    </main>
  );
}

export default Game;
