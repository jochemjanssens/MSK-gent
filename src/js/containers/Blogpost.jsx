import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';
const {observableObject} = PropTypes;
import {object} from 'prop-types';

import BlogItem from '../components/BlogItem';
import Navigation from '../components/Navigation';

import {Link} from 'react-router-dom';

const Blogpost = ({store, match}) => {

  const {blogItems, artistData, mobileDevice} = store;

  let matchedItem = ``;
  blogItems.forEach(b => {
    if (match.params.id === b.id) {
      matchedItem = b;
    }
  });

  if (mobileDevice) {
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
        <main>
          <ul>
            <BlogItem
              {...matchedItem}
              key={matchedItem.id}
            />
            <Navigation />
          </ul>
        </main>
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
        <main>
          <p>Dit blogartikel is niet gevonden</p>
          <Link to='/Blog'>Terug naar Blog</Link>
          <Navigation />
        </main>
      </section>
      );
    }
  } else {
    if (matchedItem !== ``) {
      return (
        <section className='blog'>
          <header className='header'>
            <h1 className='hidden'>MSK tour</h1>
            <img src='/assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
            <Link to='/Blog' className='blogitem-back'>Terug naar overzicht</Link>
            <Navigation />
          </header>
          <main className='desktop'>
            <section className='sidebar'>
              <article className='bio'>
                <header>
                  <h2 className='bio-name'>
                    {artistData.firstname} {artistData.name}
                  </h2>
                  <p className='bio-years'>
                    {artistData.liveyears}
                  </p>
                </header>
                <article className='social'>
                  <header>
                    <h2>Deel dit artikel</h2>
                  </header>
                  <ul>
                    <li>
                      <a href='https://www.facebook.com/mskgent/'><img src='/assets/svg/facebook.svg' alt='logo facebook' width='19' height='36' /></a>
                    </li>
                    <li>
                      <a href='https://twitter.com/mskgent?lang=nl'><img src='/assets/svg/twitter.svg' alt='logo twitter' width='34' height='29' /></a>
                    </li>
                  </ul>
                </article>
              </article>
              <article className='trigger'>
                <p>Ga naar het MSK</p>
                <img src='/assets/img/mobilePreview.png' />
                <p>Open op smartphone voor de volle ervaring</p>
              </article>
            </section>
            <section className='blogpost-content'>
              <ul>
                <BlogItem
                  {...matchedItem}
                  key={matchedItem.id}
                />
              </ul>
            </section>
          </main>
        </section>
      );
    } else {
      return (
        <section className='blog'>
          <header className='header'>
            <h1 className='hidden'>MSK tour</h1>
            <img src='/assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
            <Link to='/Blog' className='blogitem-back'>Terug naar overzicht</Link>
            <Navigation />
          </header>
          <main className='desktop'>
            <section className='sidebar'>
              <article className='bio'>
                <header>
                  <h2 className='bio-name'>
                    {artistData.firstname} {artistData.name}
                  </h2>
                  <p className='bio-years'>
                    {artistData.liveyears}
                  </p>
                </header>
                <article className='social'>
                  <header>
                    <h2>Deel dit artikel</h2>
                  </header>
                  <ul>
                    <li>
                      <a href='https://www.facebook.com/mskgent/'><img src='/assets/svg/facebook.svg' alt='logo facebook' width='19' height='36' /></a>
                    </li>
                    <li>
                      <a href='https://twitter.com/mskgent?lang=nl'><img src='/assets/svg/twitter.svg' alt='logo twitter' width='34' height='29' /></a>
                    </li>
                  </ul>
                </article>
              </article>
              <article className='trigger'>
                <p>Ga naar het MSK</p>
                <img src='/assets/img/mobilePreview.png' />
                <p>Open op smartphone voor de volle ervaring</p>
              </article>
            </section>
            <section className='blogpost-content'>
              <p>Dit blogartikel is niet gevonden</p>
              <Link to='/Blog'>Terug naar Blog</Link>
            </section>
          </main>
        </section>
      );
    }
  }
};

Blogpost.propTypes = {
  store: observableObject.isRequired,
  match: object.isRequired
};

export default inject(`store`)(
  observer(Blogpost)
);
