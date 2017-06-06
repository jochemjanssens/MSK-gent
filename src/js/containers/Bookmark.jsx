import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const Bookmark = ({store}) => {
  const page = `Bookmark`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <p>HIER KOMT DE UITLEG OVER HOE TE BOOKMARKEN</p>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quosAt vero eos et accusamus et iusto odio</p>
      <Link to='/chooseArtist'>Done</Link>
    </section>
  );
};

Bookmark.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Bookmark)
);
