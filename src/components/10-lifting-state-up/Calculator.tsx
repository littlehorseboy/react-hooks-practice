import React, { useState } from 'react';

interface BoilingVerdictProps {
  celsius: number;
}

function BoilingVerdict(props: BoilingVerdictProps): JSX.Element {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

export default function Calculator(): JSX.Element {
  const [temperature, setTemperature] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTemperature(event.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in Celsius</legend>
      <input value={temperature} onChange={handleChange} />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </fieldset>
  );
}
