import React from 'react';

import Navigation from '../components/Navigation';
import Bot from './Bot';

import {inject, observer, PropTypes} from 'mobx-react';

const Tourstart = ({store}) => {
  const {artistData} = store;

  return (
    <section className='tourstart'>
      <header className='header'>
        <h1 className='hidden'>MSK tour</h1>
        <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
      </header>
      <div className='ensorBackground'></div>
      <main>
        <header className='artist'>
          <h2 className='artist-name'><span>{artistData.firstname}</span><span>{artistData.name}</span></h2>
          <p className='artist-liveyears'>{artistData.liveyears}</p>
        </header>
        <Bot />
        <Navigation />
      </main>
    </section>
  );
};

Tourstart.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Tourstart)
);
