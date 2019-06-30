import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

interface Props {
  isLoggedIn: boolean;
}

export function Greeting(props: Props): JSX.Element {
  if (props.isLoggedIn) {
    return (
      <UserGreeting />
    );
  }
  return (
    <GuestGreeting />
  );
}

interface ContainerProps {
  match: {
    params: object;
    isExact: boolean;
    path: string;
    url: string;
  };
}

export default function Container(props: ContainerProps): JSX.Element {
  return (
    <>
      {props.match ? props.match.path : ''}
      <Greeting isLoggedIn={true} />
    </>
  );
}
