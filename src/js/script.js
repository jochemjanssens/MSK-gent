/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';

import App from './containers/App';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Provider} from 'mobx-react';

import stores from './stores';

const init = () => {

  render(
    <Provider {...stores}>
      <Router>
        <Route component={App} />
      </Router>
    </Provider>,
    document.querySelector(`.react-mount`)
  );

  console.log(`Mobile browser: ${  detectmob()}`);

};

const detectmob = () => {
  if (navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ) {
    return true;
  }
  else {
    return false;
  }
};

init();
