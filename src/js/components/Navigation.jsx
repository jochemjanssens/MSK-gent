import React from 'react';

import {Link} from 'react-router-dom';

import {inject, observer, PropTypes} from 'mobx-react';

const Navigation = ({store}) => {

  const {mobileDevice} = store;

  if (mobileDevice) {
    return (
      <nav>
        <ul>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/Info'>Info</Link></li>
          <li><Link to='/Tourstart'>Start rondleiding</Link></li>
          <li><Link to='/Blog'>blog</Link></li>
          <li><Link to='/Instellingen'>Instellingen</Link></li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/Info'>Info</Link></li>
          <li><Link to='/Blog'>blog</Link></li>
        </ul>
      </nav>
    );
  }


};

Navigation.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Navigation)
);
