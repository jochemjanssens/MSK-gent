import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import Navigation from '../components/Navigation';

const Home = ({store}) => {
  const page = `Home`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <section>
        <header>
          <p>FOTO ARTIEST</p>
          <h2>NAAM ARTIEST</h2>
          <p>korte tekst artiest</p>
        </header>
        <p>HIER KOMEN DE OPENINGSUREN</p>
        <p>HIER KOMT 1 BLOGITEM</p>
        <p>HIER KOMT DE SOCIAL MEDIA</p>
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
