import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';

//react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/admin" component={Admin}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();