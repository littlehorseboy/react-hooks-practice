import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HashRouter, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../pages/Home/Home';
import HelloWorld from '../components/1-hello-world/HelloWorld';
import HelloName from '../components/2-introducing-jsx/HelloName';
import FormatName from '../components/2-introducing-jsx/FormatName';
import Tick from '../components/3-rendering-elements/Tick';
import Welcome from '../components/4-components-props/Welcome';
import Comment from '../components/4-components-props/Comment';
import Clock from '../components/5-state-lifecycle/Clock';
import Toggle from '../components/6-handling-events/Toggle';
import Counter from '../components/6-handling-events/Counter';
import Greeting from '../components/7-conditional-rendering/Greeting/Greeting';
import LoginControl from '../components/7-conditional-rendering/LoginControl/LoginControl';
import Mailbox from '../components/7-conditional-rendering/Mailbox/Mailbox';
import AnotherPage from '../components/7-conditional-rendering/AnotherPage/AnotherPage';
import NumberList from '../components/8-list-and-keys/NumberList';
import ListItem from '../components/8-list-and-keys/ListItem';
import Blog from '../components/8-list-and-keys/Blog';
import App from '../components/useContext/App';
import NameForm from '../components/9-form/NameForm';
import EssayForm from '../components/9-form/EssayForm';
import FlavorForm from '../components/9-form/FlavorForm';
import Reservation from '../components/9-form/Reservation';
import Calculator from '../components/10-lifting-state-up/Calculator';

const routes = [
  { path: '/', Component: Home },
  { path: '/HelloWorld', Component: HelloWorld },
  { path: '/HelloName', Component: HelloName },
  { path: '/FormatName', Component: FormatName },
  { path: '/Tick', Component: Tick },
  { path: '/Welcome', Component: Welcome },
  { path: '/Comment', Component: Comment },
  { path: '/Clock', Component: Clock },
  { path: '/Toggle', Component: Toggle },
  { path: '/Counter', Component: Counter },
  { path: '/Greeting', Component: Greeting },
  { path: '/LoginControl', Component: LoginControl },
  { path: '/Mailbox', Component: Mailbox },
  { path: '/AnotherPage', Component: AnotherPage },
  { path: '/NumberList', Component: NumberList },
  { path: '/ListItem', Component: ListItem },
  { path: '/Blog', Component: Blog },
  { path: '/App', Component: App },
  { path: '/NameForm', Component: NameForm },
  { path: '/EssayForm', Component: EssayForm },
  { path: '/FlavorForm', Component: FlavorForm },
  { path: '/Reservation', Component: Reservation },
  { path: '/Calculator', Component: Calculator },
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

interface Match {
  match: {
    params: object;
    isExact: boolean;
    path: string;
    url: string;
  };
}

export default function Router(): JSX.Element {
  const classes = useStyles();

  return (
    <HashRouter>
      {routes.map(({ path }): JSX.Element => (
        <Link to={path} key={path}>
          <button>{path}</button>
        </Link>
      ))}
      {routes.map(({ path, Component }): JSX.Element => (
        <Route key={path} exact path={path}>
          {({ match }: Match): JSX.Element => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames={classes.page}
              unmountOnExit
            >
              <div className={classes.page}>
                <Component match={match} />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </HashRouter>
  );
}
