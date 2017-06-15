import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Info = ({store}) => {
  const {mobileDevice} = store;

  if (mobileDevice) {
    return (
      <section className='info'>
        <header className='header'>
          <h1 className='hidden'>MSK tour</h1>
          <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
        </header>
        <main>
          <div className='itemsTop'>
            <article className='infoItem infoItemTop'>
              <header className='infoItem-title'>
                <h2>Openingsuren</h2>
              </header>
              <p className='infoItem-text'>
                DINSDAG - VRIJDAG:  <br /> 9u30 - 17u30
              </p>
              <p className='infoItem-text'>
                SCHOOLVAKANTIES:  <br /> 10u00 - 18u00
              </p>
              <p className='infoItem-text'>
                Maandag: gesloten
              </p>
            </article>
            <article className='infoItem infoItemTop'>
              <header className='infoItem-title'>
                <h2>Contact</h2>
              </header>
              <p className='infoItem-text'>
                RESERVATIES:
                09 210 10 75
              </p>
            </article>
          </div>
          <article className='infoItem'>
            <header className='infoItem-title'>
              <h2>Locatie</h2>
            </header>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.817866896021!2d3.7220399159420237!3d51.037984552736084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371583c188bf3%3A0x98940719d6c7cafc!2sMuseum+voor+Schone+Kunsten!5e0!3m2!1snl!2sbe!4v1496857946187'
            width='350' height='300' frameBorder='0' className='info-map' allowFullScreen>

            </iframe>
          </article>
          <article className='socialmedia infoItem'>
            <header className='infoItem-title'>
              <h2>Social media</h2>
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
          <Navigation />
        </main>
      </section>
    );
  } else {
    return (
      <section className='info'>
        <header className='header info-desktop'>
          <h1 className='hidden'>MSK tour</h1>
          <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo desktop-logo blog-logo' />
          <Navigation />
        </header>
        <main className='desktop'>
          <section className='sidebar'>
            <article className='infoItems'>
              <header className='infoItem-title'>
                <h2 className='info-titel'>Openingsuren</h2>
              </header>
              <p className='infoItem-text'>DINSDAG - VRIJDAG:</p>
              <p className='infoItem-subtext'>9u30 - 17u30</p>
              <p className='infoItem-text'>SCHOOLVAKANTIES:</p>
              <p className='infoItem-subtext'>10u00 - 18u00</p>
              <p className='infoItem-text'>
                Maandag: gesloten
              </p>
            </article>
            <article className='trigger info-trigger'>
              <p>Ga naar het MSK</p>
              <img src='assets/img/mobilePreview.png' className='mobile-preview' />
              <p>Open op smartphone</p>
              <p className='trigger-ervaring'>voor de volle ervaring</p>

            </article>
          </section>
          <section className='info-content '>
            <article className='infoItem desktop-blog-pos infoPos'>
              <header className='infoItem-title'>
                <h2 className='infoColor'>Contact</h2>
              </header>
              <p className='infoItem-text'>
                RESERVATIES:
                09 210 10 75
              </p>
            </article>
            <article className='infoItem infoPos'>
              <header className='infoItem-title'>
                <h2 className='infoColor'>Locatie</h2>
              </header>
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.817866896021!2d3.7220399159420237!3d51.037984552736084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371583c188bf3%3A0x98940719d6c7cafc!2sMuseum+voor+Schone+Kunsten!5e0!3m2!1snl!2sbe!4v1496857946187'
              width='375' height='300' frameBorder='0' className='info-map' allowFullScreen>

              </iframe>
            </article>
            <article className='socialmedia infoItem infoPos'>
              <header className='infoItem-title'>
                <h2 className='infoColor'>Social media</h2>
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

};

Info.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Info)
);
