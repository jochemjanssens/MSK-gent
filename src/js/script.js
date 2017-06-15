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

  if (document.querySelector(`main`)) {
    if (document.querySelector(`main`).classList.contains(`photo-parent`)) {
      getImageFromCamera();
    }
  }
};

const fotoPicker = evt => {
  const tgt = evt.target || window.event.srcElement,
    files = tgt.files;
  console.log(files);
 // FileReader support
  if (FileReader && files && files.length) {
    const fr = new FileReader();
    fr.onload = function () {
      document.getElementById(`outImage`).src = fr.result;
    };
    fr.readAsDataURL(files[0]);
  }
};

const getImageFromCamera = () => {
  document.getElementById(`file`).addEventListener(`change`, fotoPicker);
};

init();
