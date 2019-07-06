import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

const toCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5 / 9;
const toFahrenheit = (celsius: number): number => celsius * 9 / 5 + 32;

const tryCovert = (temperature: string, convert: (n: number) => number): string => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

export default function Calculator(): JSX.Element {
  const [state, setState] = useState({
    temperature: '',
    scale: 'c',
  });

  const handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ scale: 'c', temperature: event.target.value });
  };

  const handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ scale: 'f', temperature: event.target.value });
  };

  const celsius = state.scale === 'f' ? tryCovert(state.temperature, toCelsius) : state.temperature;
  const fahrenheit = state.scale === 'c' ? tryCovert(state.temperature, toFahrenheit) : state.temperature;

  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </>
  );
}
