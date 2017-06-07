import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const ChooseArtist = ({store}) => {
  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `ChooseArtist`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <header>
        <h2>Wie nodigde jouw uit?</h2>
      </header>
      <p className='expected'>HIER KOMT DE SLIDER OM ARTIEST TE KIEZEN</p>
      <Link to='/Home'>Kies mij</Link>
    </section>
  );
};

ChooseArtist.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(ChooseArtist)
);
