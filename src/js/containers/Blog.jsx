import React from 'react';

import Navigation from '../components/Navigation';
import BlogItemPreview from '../components/BlogItemPreview';

import {inject, observer, PropTypes} from 'mobx-react';

const Blog = ({store}) => {
  const {filteredBlogItems, setFilteredBlogItems, currentBlogArtist, mobileDevice, artistData} = store;

  const handleFilterClick = artist => {
    setFilteredBlogItems(artist);
  };

  if (mobileDevice) {
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
                <li className={(currentBlogArtist === `ensor`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`ensor`)}>Ensor</li>
                <li className={(currentBlogArtist === `magritte`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`magritte`)}>Magritte</li>
                <li className={(currentBlogArtist === `vaneyck`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`vaneyck`)}>Van Eyck</li>
              </ul>
            </div>
            <p className='blog-empty'><span className='blogfilter-artist'>{currentBlogArtist}</span>  heeft nog geen avonturen meegemaakt.</p>
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
                <li className={(currentBlogArtist === `ensor`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`ensor`)}>Ensor</li>
                <li className={(currentBlogArtist === `magritte`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`magritte`)}>Magritte</li>
                <li className={(currentBlogArtist === `vaneyck`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`vaneyck`)}>Van Eyck</li>
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
  } else {
    if (filteredBlogItems.length === 0) {
      return (
        <section className='blog'>
          <header className='header'>
            <h1 className='hidden'>MSK tour</h1>
            <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
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
                  <ul className='bio-text'>
                    <li>James Sidney Edouard baron Ensor</li>
                    <li>Belgische kunstschilder van het symbolisme. </li>
                    <li>Geboren te Oostende</li>
                  </ul>
                </header>
              </article>
              <article className='trigger'>
                <p>Ga naar het MSK</p>
                <img src='assets/img/mobilePreview.png' />
                <p>Open op smartphone voor de volle ervaring</p>
              </article>
            </section>
            <section className='blog-content'>
              <div className='filter'>
                <ul>
                  <li className={(currentBlogArtist === `ensor`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`ensor`)}>Ensor</li>
                  <li className={(currentBlogArtist === `magritte`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`magritte`)}>Magritte</li>
                  <li className={(currentBlogArtist === `vaneyck`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`vaneyck`)}>Van Eyck</li>
                </ul>
              </div>
              <p className='blog-empty'><span className='blogfilter-artist'>{currentBlogArtist}</span>  heeft nog geen avonturen meegemaakt.</p>
            </section>
          </main>
        </section>
      );
    } else {
      return (
        <section className='blog desktop'>
          <header className='header'>
            <h1 className='hidden'>MSK tour</h1>
            <img src='/assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo desktop-logo blog-logo' />
            <Navigation />
          </header>
          <main className='desktop'>
            <section className='sidebar'>
              <article className='bio'>
                <header className='desktop-blog-bio'>
                  <div className='bio-header'>
                    <h2 className='bio-name'>
                      {artistData.firstname} {artistData.name}
                    </h2>
                    <p className='bio-years'>
                      {artistData.liveyears}
                    </p>
                  </div>
                  <ul className='bio-text'>
                    <li>James Sidney Edouard baron Ensor</li>
                    <li>Belgische kunstschilder van het symbolisme. </li>
                    <li>Geboren te Oostende</li>
                  </ul>
                </header>
              </article>
              <article className='trigger'>
                <p>Ga naar het MSK</p>
                <img src='assets/img/mobilePreview.png' className='mobile-preview' />
                <p>Open op smartphone</p>
                <p className='trigger-ervaring'>voor de volle ervaring</p>
              </article>
            </section>
            <section className='blog-content desktop-blog desktop-blog-pos'>
              <div className='filter'>
                <ul className='filter-pos'>
                  <li className={(currentBlogArtist === `ensor`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`ensor`)}>Ensor</li>
                  <li className={(currentBlogArtist === `magritte`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`magritte`)}>Magritte</li>
                  <li className={(currentBlogArtist === `vaneyck`) ? `activeArtist` : `inactive`}onClick={() => handleFilterClick(`vaneyck`)}>Van Eyck</li>
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
            </section>
          </main>
        </section>
      );
    }
  }
};

Blog.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Blog)
);
