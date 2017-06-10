import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

import {inject, observer, PropTypes} from 'mobx-react';

const Toureinde = ({store}) => {
  const {artistData} = store;

  return (
    <section>
      <Header page='einde tour' />
      <main>
        <img src={`./assets/img/${  artistData.nameValue  }.jpg`} alt={`foto${   artistData.nameValue}`} />
        <p>Nemen we om de tour af te sluiten samen een foto?</p>
        <Navigation />
      </main>
    </section>
  );
};

Toureinde.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Toureinde)
);
