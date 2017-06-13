import React from 'react';

import checkOpening from '../lib/checkOpening.js';

import {inject, observer, PropTypes} from 'mobx-react';

import Navigation from '../components/Navigation';
import BlogItem from '../components/BlogItem';

const Home = ({store}) => {
  const {artistData, blogItems} = store;

  /* Onboarding enkel eerste keer tonen */
  localStorage.setItem(`onboarding`, `complete`);

  /* Laatste blogpost ophalen */
  const latestBlogItem = blogItems.length - 1;

  if (blogItems.length !== 0) {
    return (
      <section className='home'>
        <header className='header'>
          <h1 className='hidden'>MSK tour</h1>
          <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
          <img src='assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
          <p className='header-text'>komt ge nog naar het MSK? Ik ben er al zenne.</p>
        </header>
        <main>
          <section>
            <header>
              <h2>{artistData.name}</h2>
              <p>{artistData.liveyears}</p>
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
      <section className='home'>
        <header className='header'>
          <h1 className='hidden'>MSK tour</h1>
          <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
          <img src='assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
          <p className='header-text'>komt ge nog naar het MSK? Ik ben er al zenne.</p>
        </header>
        <main>
          <section>
            <header>
              <h2>{artistData.name}</h2>
              <p>{artistData.liveyears}</p>
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
