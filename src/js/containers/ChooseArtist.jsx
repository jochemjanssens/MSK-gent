import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const ChooseArtist = ({store}) => {
  const page = `ChooseArtist`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <header>
        <h2>Wie nodigde jouw uit?</h2>
      </header>
      <p>HIER KOMT DE SLIDER OM ARTIEST TE KIEZEN</p>
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
