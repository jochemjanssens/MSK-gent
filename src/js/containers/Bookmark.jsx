import React from 'react';

import {Link, Redirect} from 'react-router-dom';

import Header from '../components/Header';

const Bookmark = () => {

  /* Check of de onboaring eerder gebeurd is;
   Zo ja: Redirect direct naar de home
   Zo nee: voor de onboarding uit
 */
  if (localStorage.getItem(`onboarding`)) {
    return (
      <Redirect to='/home' />
    );
  } else {
    return (
      <section>
        <Header page='Bookmark' />
        <section>
          <p className='expected'>HIER KOMT DE UITLEG OVER HOE TE BOOKMARKEN</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quosAt vero eos et accusamus et iusto odio</p>
          <Link to='/chooseArtist'>Done</Link>
        </section>
      </section>
    );
  }
};

export default Bookmark;
