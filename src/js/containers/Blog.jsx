import React from 'react';

import Navigation from '../components/Navigation';
import BlogItemPreview from '../components/BlogItemPreview';

import {inject, observer, PropTypes} from 'mobx-react';

const Blog = ({store}) => {
  const {filteredBlogItems, setFilteredBlogItems} = store;

  const handleFilterClick = artist => {
    setFilteredBlogItems(artist);
  };

  if (filteredBlogItems.length === 0) {
    return (
      <section className='blog'>
        <header className='header'>
          <h1 className='hidden'>MSK tour</h1>
          <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
          <img src='assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
          <h2 className='blog-title'>Blogs</h2>
        </header>
        <main>
          <div className='filter'>
            <ul>
              <li onClick={() => handleFilterClick(`ensor`)}>Ensor</li>
              <li onClick={() => handleFilterClick(`magritte`)}>Magritte</li>
              <li onClick={() => handleFilterClick(`vaneyck`)}>Van Eyck</li>
            </ul>
          </div>
          <p>Er zijn nog geen blogberichten toegevoegd</p>
          <Navigation />
        </main>
      </section>
    );
  } else {
    return (
      <section className='blog'>
        <header className='header'>
          <h1 className='hidden'>MSK tour</h1>
          <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
          <img src='assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
          <h2 className='blog-title'>Blogs</h2>
        </header>
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
