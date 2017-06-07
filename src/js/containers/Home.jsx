import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import Navigation from '../components/Navigation';

const Home = ({store}) => {
  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Home`;
  const {setPage} = store;
  setPage(page);

  /* Onboarding enkel eerste keer tonen */
  localStorage.setItem(`onboarding`, `complete`);

  return (
    <section>
      <section>
        <header>
          <p>FOTO ARTIEST</p>
          <h2>NAAM ARTIEST</h2>
          <p>korte tekst artiest</p>
        </header>
        <p className='expected'>HIER KOMEN DE OPENINGSUREN</p>
        <p className='expected'>HIER KOMT 1 BLOGITEM</p>
        <p className='expected'>HIER KOMT DE SOCIAL MEDIA</p>
      </section>
      <Navigation />
    </section>
  );
};

Home.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Home)
);
