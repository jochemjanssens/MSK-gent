import React from 'react';

import {string} from 'prop-types';

const Header = ({page}) => {

  return (
    <header>
      <h1>
        MSK Gent {page}
      </h1>
    </header>
  );

};

Header.propTypes = {
  page: string.isRequired
};

export default Header;
