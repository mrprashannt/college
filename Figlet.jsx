import React, { useState } from 'react';
import figlet from 'figlet';

const FigletGenerator = () => {
  const [textInput, setTextInput] = useState('');
  const [asciiArt, setAsciiArt] = useState('');

  const generateAsciiArt = () => {
    figlet.text(textInput, { font: 'alligator' }, (error, data) => {
      if (error) {
        console.error('Error generating ASCII art:', error);
        setAsciiArt('Error generating ASCII art');
      } else {
        setAsciiArt(data);
      }
    });
  };

  return (
    <div>
      <h1>Figlet ASCII Art Generator</h1>
      <label>
        Enter Text:
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </label>
      <button onClick={generateAsciiArt}>Generate ASCII Art</button>
      <div>
        <pre>{asciiArt}</pre>
      </div>
    </div>
  );
};

export default FigletGenerator;
