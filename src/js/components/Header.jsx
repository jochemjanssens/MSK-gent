import React from 'react';

import {string} from 'prop-types';

const Header = ({page}) => {

  return (
    <header>
      <img src='/assets/svg/logo.svg' alt='logoSMK' width='104' height='44' />
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
