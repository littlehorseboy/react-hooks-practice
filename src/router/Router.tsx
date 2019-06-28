import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HashRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../pages/Home/Home';

const routes = [
  { path: '/', Component: Home },
];

const useStyles = makeStyles({
  page: {
    fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
    transition: 'opacity 250ms ease-in',
    '&-enter': {
      opacity: 0.3,
    },
    '&-enter-done': {
      opacity: 1,
    },
    '&-exit': {
      opacity: 1,
    },
    '&-exit-done': {
      opacity: 0.3,
    },
  },
});

export default function Router() {
  const classes = useStyles();

  return (
    <HashRouter>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames={classes.page}
              unmountOnExit
            >
              <div className={classes.page}>
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </HashRouter>
  );
}
