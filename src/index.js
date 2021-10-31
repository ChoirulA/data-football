import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Premier_league from './Premier_League';
import Bundesliga from './Bundesliga';
import Arsenal from './premier_league/Arsenal';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ App }/>
      <Route path="/premier_league" component={ Premier_league }/>
      <Route path="/bundesliga" component={ Bundesliga }/>
      <Route path="/arsenal" component={ Arsenal }/>
    </Switch>      
  </BrowserRouter>, document.getElementById('up')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       {/* <Header /> */}
//       <App />
//     </Router>        
//   </React.StrictMode>,
//   document.getElementById('up')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
