import React, { useState } from 'react';
import Dialog from './Dialog';

export default function SignUpDialog(): JSX.Element {
  const [state, setState] = useState({
    login: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ login: event.target.value });
  };

  const handleSignUp = (): void => {
    alert(`Welcome aboard, ${state.login}`);
  };

  return (
    <Dialog title="Mars Exploration Program" message="How should we refer to you?">
      <>
        <input value={state.login} onChange={handleChange} />
        <button onClick={handleSignUp}>Sign Me Up!</button>
      </>
    </Dialog>
  );
}
