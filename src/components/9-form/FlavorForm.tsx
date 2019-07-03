import React, { useState } from 'react';

export default function FlavorForm(): JSX.Element {
  const [state, setState] = useState({
    value: 'coconut',
  });

  const [multipleState, setMultipleState] = useState({
    value: ['coconut'],
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setState({
      value: event.target.value,
    });
  };

  const handleMultipleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setMultipleState({
      value: [...multipleState.value, event.target.value],
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert(`Your favorite flavor is: ${state.value}`);
    alert(`Your favorite flavor is: ${multipleState.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={state.value} onChange={handleChange} onBlur={(): void => {}}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <label>
        Pick your favorite flavors:
        <select
          multiple={true}
          value={multipleState.value}
          onChange={handleMultipleChange}
          onBlur={(): void => {}}
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
