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
        <p>Hopelijk vond je de tour interessant</p>
        <Navigation />
      </main>
      <div className='container'>
        <img src='assets/img/guy.png' />
        <video className='video' autoPlay width='640' height='480'></video>
      </div>
    </section>
  );
};

Toureinde.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Toureinde)
);
