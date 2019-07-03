/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React, { useState, useEffect } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import LoginForm from './LoginForm';
import { AuthContext } from './App';

// 參考來源: https://tonylin.idv.tw/dokuwiki/doku.php/web:reactjs:react_hook:usecontext

let authState = false;

function LoginFormComp(): JSX.Element {
  const [state, setState] = useState(false);
  useEffect((): void => {
    authState = state;
  });
  return (
    <AuthContext.Provider value={ [state, setState] }>
      <LoginForm />
    </AuthContext.Provider>
  );
}

describe('LoginForm', (): void => {
  afterEach(cleanup);

  const inputLoginInfo = (utils: any, username: string, password: string): void => {
    const usernameInput = utils.getByLabelText('Username');
    const passwordInput = utils.getByLabelText('Password');

    fireEvent.change(usernameInput, {
      target: { value: username },
    });

    fireEvent.change(passwordInput, {
      target: { value: password },
    });
  };

  const clickLoginBtn = (utils: any): void => {
    const loginButton = utils.getByText('Login');
    fireEvent.click(loginButton);
  };

  const givenAuthSignInSuccessfully = (): void => {
    const authDoNothing = jest.fn();
    authDoNothing.mockImplementation((): void => {});
    // Auth.signIn = authDoNothing.bind(Auth);
  };

  test('Login success', (): void => {
    givenAuthSignInSuccessfully();
    const formComp = render(<LoginFormComp />);

    inputLoginInfo(formComp, 'asd', 'asd');
    clickLoginBtn(formComp);

    expect(authState).toBeTruthy();
  });
});
