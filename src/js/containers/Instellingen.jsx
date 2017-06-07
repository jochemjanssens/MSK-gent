import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Instellingen = ({store}) => {
  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Instellingen`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <p className='expected'>hier komt de snelheid</p>
      <p className='expected'>hier komt de push notificatie</p>
      <p className='expected'>hier komt de locatie deling</p>
      <p className='expected'>hier komt de bug report</p>
      <Navigation />
    </section>
  );
};

Instellingen.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Instellingen)
);
