import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Blog = ({store}) => {
  const page = `Blog`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <p>pagina</p>
      <Navigation />
    </section>
  );
};

Blog.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Blog)
);
