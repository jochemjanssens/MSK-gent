import React from 'react';

import checkOpening from '../lib/checkOpening.js';

import {inject, observer, PropTypes} from 'mobx-react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import BlogItem from '../components/BlogItem';

const Home = ({store}) => {
  const {artistData, blogItems} = store;

  /* Onboarding enkel eerste keer tonen */
  localStorage.setItem(`onboarding`, `complete`);

  /* Laatste blogpost ophalen */
  const latestBlogItem = blogItems.length - 1;

  if (blogItems.length !== 0) {
    return (
      <section>
        <Header page='Home' />
        <main>
          <section>
            <header>
              <img src={`./assets/img/${  artistData.nameValue  }.jpg`} alt={`foto${   artistData.nameValue}`} />
              <h2>{artistData.name}</h2>
              <p>{artistData.text}</p>
            </header>
            <p>{checkOpening()}</p>
            <BlogItem
              {...blogItems[latestBlogItem]}
              key={blogItems[latestBlogItem].id}
            />
            <ul>
              <li>
                <a href='#'>Facebook</a>
              </li>
              <li>
                <a href='#'>Twitter</a>
              </li>
              <li>
                <a href='#'>Instagram</a>
              </li>
            </ul>
          </section>
          <Navigation />
        </main>
      </section>
    );
  } else {
    return (
      <section>
        <Header page='Home' />
        <main>
          <section>
            <header>
              <p>FOTO ARTIEST</p>
              <h2>{artistData.name}</h2>
              <p>{artistData.text}</p>
            </header>
            <p>{checkOpening()}</p>
            <p>Blog niet gevonden</p>
            <ul>
              <li>
                <a href='#'>Facebook</a>
              </li>
              <li>
                <a href='#'>Twitter</a>
              </li>
              <li>
                <a href='#'>Instagram</a>
              </li>
            </ul>
          </section>
          <Navigation />
        </main>
      </section>
    );
  }
};

Home.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Home)
);
