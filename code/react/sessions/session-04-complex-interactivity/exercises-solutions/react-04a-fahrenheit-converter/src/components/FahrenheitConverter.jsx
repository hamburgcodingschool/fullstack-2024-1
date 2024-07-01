import React, { useState } from 'react';

export default function FahrenheitConverter() {
  const [celsius, setCelsius] = useState('');

  function handleCelsiusChange(event) {
    setCelsius(event.target.value);
  }

  function convertToFahrenheit(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(2);
  }

  const fahrenheit = convertToFahrenheit(celsius);

  return (
    <div>
      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <p>Fahrenheit: {fahrenheit}</p>
    </div>
  );
}
