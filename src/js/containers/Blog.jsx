import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import BlogItemPreview from '../components/BlogItemPreview';

import {inject, observer, PropTypes} from 'mobx-react';

const Blog = ({store}) => {
  const {blogItems} = store;

  /* Toon de blogItems*/
  blogItems.forEach(item => {
    console.log(item);
  });

  if (blogItems.length === 0) {
    return (
      <section>
        <Header page='blog' />
        <main>
          <p>Er zijn nog geen blogberichten toegevoegd</p>
          <Navigation />
        </main>
      </section>
    );
  } else {
    return (
      <section>
        <Header page='blog' />
        <main>
          <ul>
          {
            blogItems.map(
              b => (
                <BlogItemPreview
                  {...b}
                  key={b.id}
                />
              )
            )
          }
          </ul>
          <Navigation />
        </main>
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
