import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HashRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../pages/Home/Home';
import HelloWorld from '../components/1-hello-world/HelloWorld';
import HelloName from '../components/2-introducing-jsx/HelloName';
import FormatName from '../components/2-introducing-jsx/FormatName';
import Tick from '../components/3-rendering-elements/Tick';
import Welcome from '../components/4-components-props/Welcome';
import Comment from '../components/4-components-props/Comment/Comment';

const routes = [
  { path: '/', Component: Home },
  { path: '/HelloWorld', Component: HelloWorld },
  { path: '/HelloName', Component: HelloName },
  { path: '/FormatName', Component: FormatName },
  { path: '/Tick', Component: Tick },
  { path: '/Welcome', Component: Welcome },
  { path: '/Comment', Component: Comment },
];

const useStyles = makeStyles({
  page: {
    fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
    transition: 'opacity 250ms ease-in',
    '&-enter': {
      opacity: 0.1,
    },
    '&-enter-done': {
      opacity: 1,
    },
    '&-exit': {
      opacity: 1,
    },
    '&-exit-done': {
      opacity: 0.1,
    },
  },
});

export default function Router(): JSX.Element {
  const classes = useStyles();

  return (
    <HashRouter>
      {routes.map(({ path, Component }): JSX.Element => (
        <Route key={path} exact path={path}>
          {({ match }): JSX.Element => (
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
