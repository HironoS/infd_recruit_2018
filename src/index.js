import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SideBar from './component/SideBar';
import President from './container/President';
import './index.css';
import { Router, Route, browserHistory, IndexRoute　} from 'react-router';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory}>
      <Route path="/" component={SideBar}>
        <IndexRoute component={App} />
        <Route path="/President" component={President} />
      </Route>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
