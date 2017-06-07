import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link, Redirect} from 'react-router-dom';

const Bookmark = ({store}) => {
  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Bookmark`;
  const {setPage} = store;
  setPage(page);

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
        <p className='expected'>HIER KOMT DE UITLEG OVER HOE TE BOOKMARKEN</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quosAt vero eos et accusamus et iusto odio</p>
        <Link to='/chooseArtist'>Done</Link>
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
