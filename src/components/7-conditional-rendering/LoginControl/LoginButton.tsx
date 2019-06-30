import React from 'react';

interface Props {
  onClick: () => void;
}

export default function LoginButton(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
