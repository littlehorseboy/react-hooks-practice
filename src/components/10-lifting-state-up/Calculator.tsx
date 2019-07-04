import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default function Calculator(): JSX.Element {
  const [temperature, setTemperature] = useState('');

  const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTemperature(event.target.value);
  };

  const handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTemperature(event.target.value);
  };

  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={temperature}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={temperature}
        onTemperatureChange={handleFahrenheitChange}
      />
    </>
  );
}
