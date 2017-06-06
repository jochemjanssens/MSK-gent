import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Instellingen = ({store}) => {
  const page = `Instellingen`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <p>pagina</p>
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
