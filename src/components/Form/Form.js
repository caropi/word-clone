import React from 'react';

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
