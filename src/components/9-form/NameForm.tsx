import React, { useState } from 'react';

export default function NameForm(): JSX.Element {
  const [state, setState] = useState({
    value: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ value: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert(`A name was submitted ${state.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={state.value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
