import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import BlogItem from '../components/BlogItem';
import Navigation from '../components/Navigation';

import {Link} from 'react-router-dom';

const Blogpost = ({store, match}) => {

  const {setPage, blogItems} = store;

  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Blogpost`;
  setPage(page);

  let matchedItem = ``;
  blogItems.forEach(b => {
    if (match.params.id === b.id) {
      matchedItem = b;
    }
  });

  if (matchedItem !== ``) {
    return (
      <ul>
        <BlogItem
          {...matchedItem}
          key={matchedItem.id}
        />
        <Navigation />
      </ul>
    );
  } else {
    return (
      <div>
        <p>Dit blogartikel is niet gevonden</p>
        <Link to='/Blog'>Terug naar Blog</Link>
        <Navigation />
      </div>
    );
  }
};

Blogpost.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Blogpost)
);
