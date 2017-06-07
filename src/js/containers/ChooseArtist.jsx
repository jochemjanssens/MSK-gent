import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const ChooseArtist = ({store}) => {
  const {setPage, setArtist} = store;

  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `ChooseArtist`;
  setPage(page);

  /* Kies de artiest*/
  let $artistInput;
  const selectArtist = e => {
    e.preventDefault();
    setArtist($artistInput.value);
  };

  return (
    <section>
      <header>
        <h2>Wie nodigde jou uit?</h2>
      </header>
      <p className='expected'>HIER KOMT DE SLIDER OM ARTIEST TE KIEZEN</p>
      <form>
        <select name='artiestKiezer' ref={$el => $artistInput = $el} onChange={selectArtist}>
          <option value='ensor'>James Ensor</option>
          <option value='magritte'>René Magritte</option>
          <option value='vaneyck'>Paul van Eyck</option>
        </select>
      </form>
      <Link to='/Home'>Kies mij</Link>
    </section>
  );
};

ChooseArtist.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(ChooseArtist)
);
