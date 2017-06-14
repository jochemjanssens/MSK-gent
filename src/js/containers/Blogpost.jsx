import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';
const {observableObject} = PropTypes;
import {object} from 'prop-types';

import BlogItem from '../components/BlogItem';
import Navigation from '../components/Navigation';

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
      <section className='blog'>
        <header className='header'>
          <h1 className='hidden'>MSK tour</h1>
          <div className='blogitem-header'>
            <img src='/assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
            <Link to='/Blog' className='blogitem-back'>Terug</Link>
          </div>
          <img src='/assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
          <h2 className='blog-title'>Blogs</h2>
        </header>
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
      <section className='blog'>
        <header className='header'>
          <h1 className='hidden'>MSK tour</h1>
          <div className='blogitem-header'>
            <img src='/assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
            <p className='blogitem-back'>Terug</p>
          </div>
          <img src='/assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
          <h2 className='blog-title'>Blogs</h2>
        </header>
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
