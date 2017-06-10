import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';
const {observableObject} = PropTypes;
import {object} from 'prop-types';

import BlogItem from '../components/BlogItem';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

import {Link} from 'react-router-dom';

const Blogpost = ({store, match}) => {

  const {blogItems} = store;

  let matchedItem = ``;
  blogItems.forEach(b => {
    if (match.params.id === b.id) {
      matchedItem = b;
    }
  });

  if (matchedItem !== ``) {
    return (
      <section>
        <Header page='Blogpost' />
        <ul>
          <BlogItem
            {...matchedItem}
            key={matchedItem.id}
          />
          <Navigation />
        </ul>
      </section>
    );
  } else {
    return (
      <section>
        <Header page='Blogpost' />
        <div>
          <p>Dit blogartikel is niet gevonden</p>
          <Link to='/Blog'>Terug naar Blog</Link>
          <Navigation />
        </div>
      </section>
    );
  }
};

Blogpost.propTypes = {
  store: observableObject.isRequired,
  match: object.isRequired
};

export default inject(`store`)(
  observer(Blogpost)
);
