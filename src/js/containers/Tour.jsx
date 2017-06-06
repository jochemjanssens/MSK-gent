import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Tour = ({store}) => {
  const page = `Tour`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <p>pagina</p>
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
