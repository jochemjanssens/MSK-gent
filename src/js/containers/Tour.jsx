import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Tour = ({store}) => {
  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Tour`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <p className='expected'>hier komt de tour</p>
      <Navigation />
    </section>
  );
};

Tour.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Tour)
);
