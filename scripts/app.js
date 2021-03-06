import React from 'react';
import { render } from 'react-dom';

// Router
import { Router, hashHistory } from 'react-router';
import routes from './Router';

// MUI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';

// State
import State from './State';
import { Provider } from 'mobx-react';
const state = new State();

// Touch Events
import('react-tap-event-plugin').then(injectTapEventPlugin => injectTapEventPlugin());

render((
  <Provider state={state}>
    <MuiThemeProvider muiTheme={theme}>
      <Router history={hashHistory} routes={routes}></Router>
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'));