import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Router from './router/Router';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

export default function Root() {
  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
}
