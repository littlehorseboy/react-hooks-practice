import React, { useState } from 'react';

export default function Toggle(): JSX.Element {
  const [state, setState] = useState({
    isToggleOn: true,
  });

  const handleClick = (): void => {
    setState({
      isToggleOn: !state.isToggleOn,
    });
  };

  return (
    <button onClick={handleClick}>
      {state.isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}
