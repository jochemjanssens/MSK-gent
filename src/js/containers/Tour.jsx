import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

import Bot from './Bot';

import {inject, observer, PropTypes} from 'mobx-react';

const Tour = ({store}) => {
  const {artistData} = store;

  return (
    <section>
      <Header page='Tour' />
      <main>
        <img src={`./assets/img/${  artistData.nameValue  }.jpg`} alt={`foto${   artistData.nameValue}`} />
        <Bot />
        <Navigation />
      </main>
    </section>
  );
};

Tour.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Tour)
);
