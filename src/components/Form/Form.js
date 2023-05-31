import React from 'react';

//TODO
/*
When the form is submitted:
NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.
*/

function Form({ setGuess }) {
  const [inputText, setInputText] = React.useState('');
  const handleGuess = (event) => {
    event.preventDefault();

    setGuess(inputText.toUpperCase());
    setInputText('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => handleGuess(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern=".{5,5}"
        maxLength={5}
        title="Answer must be 5 characters long"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
    </form>
  );
}

export default Form;
