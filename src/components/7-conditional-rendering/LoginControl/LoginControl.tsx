import React, { useState } from 'react';
import { Greeting } from '../Greeting/Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function LoginControl(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = (): void => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = (): void => {
    setIsLoggedIn(false);
  };

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}
