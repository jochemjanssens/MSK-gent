import React from 'react';

import {NavLink} from 'react-router-dom';

import {inject, observer, PropTypes} from 'mobx-react';

const Navigation = ({store}) => {

  const {mobileDevice} = store;

  if (mobileDevice) {
    return (
      <nav className='main-navigation'>
        <ul>
          <li><NavLink activeClassName='active' to='/Home'><img src='/assets/svg/home.svg' alt='home icon' width='36' height='36' /><span>Home</span></NavLink></li>
          <li><NavLink activeClassName='active' to='/Info'><img src='/assets/svg/info.svg' alt='info icon' width='36' height='36' /><span>Info</span></NavLink></li>
          <li className='tourStartButton'><NavLink activeClassName='active2' to='/Tourstart'><img src='/assets/svg/play.svg' alt='play icon' width='84' height='84' /><span>Tour</span></NavLink></li>
          <li><NavLink activeClassName='active' to='/Blog'><img src='/assets/svg/blog.svg' alt='blog icon' width='36' height='36' /><span>blog</span></NavLink></li>
          <li><NavLink activeClassName='active' to='/Instellingen'><img src='/assets/svg/settings.svg' alt='opties icon' width='36' height='36' /><span>Opties</span></NavLink></li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className='main-navigation'>
        <ul>
          <li><NavLink to='/Home'>Home</NavLink></li>
          <li><NavLink to='/Info'>Info</NavLink></li>
          <li><NavLink to='/Blog'>blog</NavLink></li>
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
