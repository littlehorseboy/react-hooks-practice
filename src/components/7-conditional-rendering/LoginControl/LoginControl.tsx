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

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />

      <div>
        This user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>

      {
        isLoggedIn
          ? <LogoutButton onClick={handleLogoutClick} />
          : <LoginButton onClick={handleLoginClick} />
      }
    </div>
  );
}
