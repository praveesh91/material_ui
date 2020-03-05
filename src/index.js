//import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// Styles
import './assets/scss/style.scss'

// Containers
import App from './App.js'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path="/" name="App" component={App}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));
