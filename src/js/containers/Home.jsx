import React from 'react';

import checkOpening from '../lib/checkOpening.js';

import {inject, observer, PropTypes} from 'mobx-react';

import Navigation from '../components/Navigation';
import BlogItemPreviewHome from '../components/BlogItemPreviewHome';

const Home = ({store}) => {
  const {artistData, blogItems, mobileDevice} = store;

  /* Onboarding enkel eerste keer tonen */
  localStorage.setItem(`onboarding`, `complete`);

  /* Laatste blogpost ophalen */
  const latestBlogItem = blogItems.length - 1;

  console.log(mobileDevice);
  if (mobileDevice) {
    if (blogItems.length === 1) {
      return (
          <section className='home'>
            <header className='header'>
              <h1 className='hidden'>MSK tour</h1>
              <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
              <div className='header-comp'>
                <img src='assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
                <p className='header-text'>komt ge nog naar het MSK ? {(checkOpening() === true) ? `Ik ben er al zenne.` : `vandaag zijn we niet open`}</p>
              </div>
            </header>
            <main>
              <section>
                <header className='artist'>
                  <h2 className='artist-name'><span>{artistData.firstname}</span><span>{artistData.name}</span></h2>
                  <p className='artist-liveyears'>{artistData.liveyears}</p>
                </header>
                <div>
                  <header className='title'>
                    <h2>Bekijk mijn avonturen in Gent</h2>
                  </header>
                  <BlogItemPreviewHome
                    {...blogItems[latestBlogItem]}
                    key={blogItems[latestBlogItem].id}
                  />
                </div>

                <article className='socialmedia'>
                  <header className='title'>
                    <h2>Liked of volgt mij ne keer</h2>
                  </header>
                  <ul className='socialmedia-list'>
                    <li>
                      <a href='https://www.facebook.com/mskgent/'><img src='assets/svg/facebook.svg' alt='logo facebook' width='19' height='36' /></a>
                    </li>
                    <li>
                      <a href='https://twitter.com/mskgent?lang=nl'><img src='assets/svg/twitter.svg' alt='logo twitter' width='34' height='29' /></a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/mskgent/'><img src='assets/svg/instagram.svg' alt='logo instagram' width='34' height='34' /></a>
                    </li>
                  </ul>
                </article>
              </section>
              <Navigation />
            </main>
          </section>
      );
    } else if (blogItems.length !== 0) {
      return (
          <section className='home'>
            <header className='header'>
              <h1 className='hidden'>MSK tour</h1>
              <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
              <div className='header-comp'>
                <img src='assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
                <p className='header-text'>komt ge nog naar het MSK ? {(checkOpening() === true) ? `Ik ben er al zenne.` : `vandaag zijn we niet open`}</p>
              </div>
            </header>
            <main>
              <section>
                <header className='artist'>
                  <h2 className='artist-name'><span>{artistData.firstname}</span><span>{artistData.name}</span></h2>
                  <p className='artist-liveyears'>{artistData.liveyears}</p>
                </header>
                <div>
                  <header className='title'>
                    <h2>Bekijk mijn avonturen in Gent</h2>
                  </header>
                  <BlogItemPreviewHome
                    {...blogItems[latestBlogItem]}
                    key={blogItems[latestBlogItem].id}
                  />
                  <div className='secondBlogItem'>
                    <BlogItemPreviewHome
                      {...blogItems[latestBlogItem - 1]}
                      key={blogItems[latestBlogItem - 1].id}
                    />
                  </div>
                </div>

                <article className='socialmedia'>
                  <header className='title'>
                    <h2>Liked of volgt mij ne keer</h2>
                  </header>
                  <ul className='socialmedia-list'>
                    <li>
                      <a href='https://www.facebook.com/mskgent/'><img src='assets/svg/facebook.svg' alt='logo facebook' width='19' height='36' /></a>
                    </li>
                    <li>
                      <a href='https://twitter.com/mskgent?lang=nl'><img src='assets/svg/twitter.svg' alt='logo twitter' width='34' height='29' /></a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/mskgent/'><img src='assets/svg/instagram.svg' alt='logo instagram' width='34' height='34' /></a>
                    </li>
                  </ul>
                </article>
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
              <div className='header-comp'>
                <img src='assets/img/header-ensor.png' alt='beeld Ensor' width='170' height='140' className='header-beeld' />
                <p className='header-text'>komt ge nog naar het MSK ? {(checkOpening() === true) ? `Ik ben er al zenne.` : `vandaag zijn we niet open`}</p>
              </div>
            </header>
            <main>
              <section>
                <header className='artist'>
                  <h2 className='artist-name'><span>{artistData.firstname}</span><span>{artistData.name}</span></h2>
                  <p className='artist-liveyears'>{artistData.liveyears}</p>
                </header>
                <p className='home-noblog'>Nog geen blogitems toegevoegd</p>
                <article className='socialmedia'>
                  <header className='title'>
                    <h2>Liked of volgt mij ne keer</h2>
                  </header>
                  <ul className='socialmedia-list'>
                    <li>
                      <a href='https://www.facebook.com/mskgent/'><img src='assets/svg/facebook.svg' alt='logo facebook' width='19' height='36' /></a>
                    </li>
                    <li>
                      <a href='https://twitter.com/mskgent?lang=nl'><img src='assets/svg/twitter.svg' alt='logo twitter' width='34' height='29' /></a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/mskgent/'><img src='assets/svg/instagram.svg' alt='logo instagram' width='34' height='34' /></a>
                    </li>
                  </ul>
                </article>
              </section>
              <Navigation />
            </main>
          </section>
      );
    }
  } else {
    console.log(blogItems.length);
    if (blogItems.length === 0 || blogItems.length === 1) {
      return (
        <section className='home desktop'>
          <header className='header'>
            <h1 className='hidden'>MSK tour</h1>
            <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
            <Navigation />
          </header>
          <main className='desktop-main'>
            <section className='sidebar'>
              <article className='home-openingsuren'>
                  <p className='desktop-open'>Het MSK is vandaag</p>
                  <p className='desktop-open-check'>{(checkOpening() === true) ? `OPEN` : `gesloten`}</p>
              </article>
                <p className='home-tekst home-tekst-eerste'>Helaba moatje, kzien a geire terug!</p>
                <p className='home-tekst home-tekst-tweede'>Kzal u een rondleiding geven é</p>
                <article className='trigger'>
                  <p>Ga naar het MSK</p>
                  <img src='assets/img/mobilePreview.png' className='mobile-preview' />
                  <p className='trigger-ervaring'>Open op smartphone voor de volle ervaring</p>
                </article>
            </section>
            <section>
              <header className='artist desktop-artist'>
                <h2 className='artist-name desktop-artist-name'><span>{artistData.firstname}</span><span>{artistData.name}</span></h2>
                <p className='artist-liveyears'>{artistData.liveyears}</p>
              </header>
              <div className='home-titles'>
                <header className='title'>
                  <h2>Bekijk mijn avonturen in Gent</h2>
                </header>
                <p className='home-noblog'>Nog geen blogitems toegevoegd</p>
              </div>
              <article className='socialmedia home-titles'>
                <header className='title'>
                  <h2>Liked of volgt mij ne keer</h2>
                </header>
                <ul className='socialmedia-list'>
                  <li>
                    <a href='https://www.facebook.com/mskgent/'><img src='assets/svg/facebook.svg' alt='logo facebook' width='19' height='36' /></a>
                  </li>
                  <li>
                    <a href='https://twitter.com/mskgent?lang=nl'><img src='assets/svg/twitter.svg' alt='logo twitter' width='34' height='29' /></a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/mskgent/'><img src='assets/svg/instagram.svg' alt='logo instagram' width='34' height='34' /></a>
                  </li>
                </ul>
              </article>
            </section>
          </main>
        </section>
      );
    } else {
      return (
        <section className='home desktop'>
          <header className='header'>
            <h1 className='hidden'>MSK tour</h1>
            <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo desktop-logo' />
            <Navigation />
          </header>
          <main className='desktop-main'>
            <section className='sidebar'>
              <article className='home-openingsuren'>
                  <p className='desktop-open'>Het MSK is vandaag</p>
                  <p className='desktop-open-check'>{(checkOpening() === true) ? `OPEN` : `gesloten`}</p>
              </article>
                <p className='home-tekst home-tekst-eerste'>Helaba moatje, kzien a geire terug!</p>
                <p className='home-tekst home-tekst-tweede'>Kzal u een rondleiding geven é</p>
                <article className='trigger'>
                  <p>Ga naar het MSK</p>
                  <img src='assets/img/mobilePreview.png' className='mobile-preview' />
                  <p>Open op smartphone</p>
                  <p className='trigger-ervaring'>voor de volle ervaring</p>
                </article>
            </section>
            <section className='desktop-blog'>
              <header className='artist desktop-artist'>
                <h2 className='artist-name desktop-artist-name'><span>{artistData.firstname}</span><span>{artistData.name}</span></h2>
                <p className='artist-liveyears'>{artistData.liveyears}</p>
              </header>
              <div className='home-titles'>
                <header className='title'>
                  <h2>Bekijk mijn avonturen in Gent</h2>
                </header>
                <BlogItemPreviewHome
                  {...blogItems[latestBlogItem]}
                  key={blogItems[latestBlogItem].id}
                />
                <BlogItemPreviewHome
                  {...blogItems[latestBlogItem - 1]}
                  key={blogItems[latestBlogItem - 1].id}
                />
              </div>
              <article className='socialmedia home-titles'>
                <header className='title'>
                  <h2>Liked of volgt mij ne keer</h2>
                </header>
                <ul className='socialmedia-list'>
                  <li>
                    <a href='https://www.facebook.com/mskgent/'><img src='assets/svg/facebook.svg' alt='logo facebook' width='19' height='36' /></a>
                  </li>
                  <li>
                    <a href='https://twitter.com/mskgent?lang=nl'><img src='assets/svg/twitter.svg' alt='logo twitter' width='34' height='29' /></a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/mskgent/'><img src='assets/svg/instagram.svg' alt='logo instagram' width='34' height='34' /></a>
                  </li>
                </ul>
              </article>
            </section>
          </main>
        </section>
      );
    }
  }
};

Home.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Home)
);
