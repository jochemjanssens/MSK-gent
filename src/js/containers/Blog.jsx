import React from 'react';

import Navigation from '../components/Navigation';
import BlogItem from '../components/BlogItem';

import {inject, observer, PropTypes} from 'mobx-react';

const Blog = ({store}) => {
  const {setPage, blogItems} = store;

  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Blog`;
  setPage(page);

  /* Toon de blogItems*/
  blogItems.forEach(item => {
    console.log(item);
  });

  if (blogItems.length === 0) {
    return (
      <section>
        <p>Er zijn nog geen blogberichten toegevoegd</p>
        <Navigation />
      </section>
    );
  } else {
    return (
      <section>
        <ul>
        {
          blogItems.map(
            b => (
              <BlogItem
                {...b}
                key={b.id}
              />
            )
          )
        }
        </ul>
        <Navigation />
      </section>
    );
  }
};

Blog.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Blog)
);
