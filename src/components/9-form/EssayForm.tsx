import React, { useState } from 'react';

export default function EssayForm(): JSX.Element {
  const [state, setState] = useState({
    value: 'Please write an essay about your favorite DOM element',
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setState({
      value: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert(`An essay was submitted: ${state.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={state.value} onChange={handleChange}></textarea>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
