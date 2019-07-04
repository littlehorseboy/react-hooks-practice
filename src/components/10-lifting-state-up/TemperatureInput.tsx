import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';

interface ScaleNamesI {
  [c: string]: string;
  f: string;
}

const scaleNames: ScaleNamesI = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

interface TemperatureInputProps {
  scale: string;
  temperature: string;
  onTemperatureChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TemperatureInput(props: TemperatureInputProps): JSX.Element {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}</legend>
      <input value={props.temperature} onChange={props.onTemperatureChange} />
      <BoilingVerdict celsius={parseFloat(props.temperature)} />
    </fieldset>
  );
}
