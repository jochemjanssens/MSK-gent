import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Instellingen = ({store}) => {
  const {setPage, setSpeed} = store;
  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Instellingen`;
  setPage(page);

  const handleSpeed = newSpeed => {
    console.log(newSpeed);
    setSpeed(newSpeed);
  };

  return (
    <section>
      <section>
        <header>
          <h2>Snelheid</h2>
        </header>
        <ul>
          <li onClick={() => handleSpeed(0.5)}>0,5x</li>
          <li onClick={() => handleSpeed(0.75)}>0,75x</li>
          <li onClick={() => handleSpeed(1)}>Normaal</li>
          <li onClick={() => handleSpeed(1.25)}>1,25x</li>
          <li onClick={() => handleSpeed(1.5)}>1,5x</li>
        </ul>
      </section>
      <p className='expected'>hier komt de push notificatie</p>
      <p className='expected'>hier komt de locatie deling</p>
      <p className='expected'>hier komt de bug report</p>
      <Navigation />
    </section>
  );
};

Instellingen.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Instellingen)
);
