import React from 'react';

import {Link, Redirect} from 'react-router-dom';

import {inject, observer, PropTypes} from 'mobx-react';

import Header from '../components/Header';

const Bookmark = ({store}) => {
  const {mobileDevice} = store;

  /* Check of de onboaring eerder gebeurd is;
   Zo ja: Redirect direct naar de home
   Zo nee: voor de onboarding uit
 */

  if (localStorage.getItem(`onboarding`)) {
    return (
      <Redirect to='/home' />
    );
  } else if (mobileDevice === false) {
    return (
      <Redirect to='/chooseArtist' />
    );
  } else {
    return (
      <section>
        <Header page='Bookmark' />
        <section>
          <video src='./assets/video/bookmark_480.mov' autoPlay></video>
          <ol>
            <li>Tik op het deel-icon in de navigatiebalk</li>
            <li>Veeg in de onderste rij van het deel-menu naar links of rechts</li>
            <li>Tik op de optie ‘Voeg toe aan beginscherm’</li>
            <li>Tik op Voeg toe om de webpagina toe te voegen aan het beginscherm</li>
          </ol>
          <Link to='/chooseArtist'>Done</Link>
        </section>
      </section>
    );
  }
};

Bookmark.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Bookmark)
);
