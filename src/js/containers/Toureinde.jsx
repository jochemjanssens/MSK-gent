import React from 'react';

import Navigation from '../components/Navigation';

import Endbot from './Endbot';

import {inject, observer, PropTypes} from 'mobx-react';

const Toureinde = () => {

  return (
    <section className='tourstart'>
      <header className='header'>
        <h1 className='hidden'>MSK tour</h1>
        <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
      </header>
      <div className='ensorBackground'></div>
      <main>
        <Endbot />
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
