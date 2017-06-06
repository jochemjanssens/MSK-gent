import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Info = ({store}) => {
  const page = `Info`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <p>pagina</p>
      <Navigation />
    </section>
  );
};

Info.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Info)
);
