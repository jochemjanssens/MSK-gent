import React from 'react';

import checkOpening from '../lib/checkOpening.js';

import {inject, observer, PropTypes} from 'mobx-react';

import Navigation from '../components/Navigation';
import BlogItem from '../components/BlogItem';

const Home = ({store}) => {
  const {setPage, artistData, blogItems} = store;

  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Home`;
  setPage(page);

  /* Onboarding enkel eerste keer tonen */
  localStorage.setItem(`onboarding`, `complete`);

  /* Laatste blogpost ophalen */
  if (blogItems.length !== 0) {
    return (
      <section>
        <section>
          <header>
            <p>FOTO ARTIEST</p>
            <h2>{artistData.name}</h2>
            <p>{artistData.text}</p>
          </header>
          <p>{checkOpening()}</p>
          <BlogItem
            {...blogItems[0]}
            key={blogItems[0].id}
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
      </section>
    );
  }

  return (
    <section>
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
    </section>
  );
};

Home.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Home)
);
