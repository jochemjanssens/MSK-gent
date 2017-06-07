import React from 'react';

import {Link} from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Info'>Info</Link></li>
        <li><Link to='/Tour'>Start rondleiding</Link></li>
        <li><Link to='/Blog'>blog</Link></li>
        <li><Link to='/Instellingen'>Instellingen</Link></li>
      </ul>
    </nav>
  );

};

export default Navigation;
