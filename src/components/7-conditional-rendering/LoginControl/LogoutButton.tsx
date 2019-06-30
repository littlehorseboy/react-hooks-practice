import React from 'react';

interface Props {
  onClick: () => void;
}

export default function LogoutButton(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
