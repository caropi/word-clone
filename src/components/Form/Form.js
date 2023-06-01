import React from 'react';
import { NUM_OF_CHARACTERS_ALLOWED, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Form({ guessList, setGuess, answer }) {
  const [inputText, setInputText] = React.useState('');
  const handleGuess = (event) => {
    event.preventDefault();
    if (guessList.length === NUM_OF_GUESSES_ALLOWED) {
      window.alert("You've reached the maximum number of guesses");
      return;
    }

    setGuess([...guessList, { guess: checkGuess(inputText, answer), id: Math.random() }]);
    setInputText('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => handleGuess(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern={`.{${NUM_OF_CHARACTERS_ALLOWED},${NUM_OF_CHARACTERS_ALLOWED}}`}
        maxLength={NUM_OF_CHARACTERS_ALLOWED}
        title="Answer must be 5 characters long"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      {guessList.length === NUM_OF_GUESSES_ALLOWED &&
        "You've reached the maximum number of guesses"}
    </form>
  );
}

export default Form;
