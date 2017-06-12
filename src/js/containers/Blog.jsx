import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import BlogItemPreview from '../components/BlogItemPreview';

import {inject, observer, PropTypes} from 'mobx-react';

const Blog = ({store}) => {
  const {filteredBlogItems, setFilteredBlogItems} = store;

  const handleFilterClick = artist => {
    setFilteredBlogItems(artist);
  };

  if (filteredBlogItems.length === 0) {
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
          <div className='filter'>
            <ul>
              <li onClick={() => handleFilterClick(`ensor`)}>Ensor</li>
              <li onClick={() => handleFilterClick(`magritte`)}>Magritte</li>
              <li onClick={() => handleFilterClick(`vaneyck`)}>Van Eyck</li>
            </ul>
          </div>
          <ul>
          {
            filteredBlogItems.map(
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
