import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from './App';

const useStyles = makeStyles({
  hidden: {
    display: 'none',
  },
});

export default function LoginForm(): JSX.Element | null {
  const classes = useStyles();

  const [authState, setAuthState] = useContext<any>(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedBack] = useState('');

  const validateForm = (): boolean => userName.length > 0 && password.length > 0;

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      setAuthState(true);
    } catch (error) {
      setFeedBack(error.message);
    }
  };

  const showFeedback = (): boolean => feedback !== '';

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" value={userName} onChange={handleUserNameChange} />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={handlePasswordChange} />

        <button
          disabled={!validateForm()}
          type="submit"
        >
          Login
        </button>
      </form>

      <div className={classNames({ [classes.hidden]: !showFeedback() })}>{feedback}</div>
    </div>
  );
}
