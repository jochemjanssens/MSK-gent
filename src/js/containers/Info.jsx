import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Info = ({store}) => {
  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Info`;
  const {setPage} = store;
  setPage(page);

  return (
    <section>
      <article>
        <header>
          <h2>Openingsuren</h2>
        </header>
        <p>
          DINSDAG - VRIJDAG:  9u30 - 17u30
          SCHOOLVAKANTIES:  10u00 - 18u00
          Maandag: gesloten
        </p>
      </article>
      <article>
        <header>
          <h2>Contact</h2>
        </header>
        <p>
          RESERVATIES:
          09 210 10 75
        </p>
      </article>
      <article>
        <header>
          <h2>Locatie</h2>
        </header>
        <p className='expected'>HIER KOMT EEN MAP</p>
      </article>
      <article>
        <header>
          <h2>Social Media</h2>
        </header>
        <p className='expected'>HIER KOMT DE  SOCIAL MEDIA</p>
      </article>
      <article>
        <header>
          <h2>Sponsors</h2>
        </header>
        <p className='expected'>HIER KOMEN DE SPONSORS</p>
      </article>
      <Navigation />
    </section>
  );
};

Info.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Info)
);
