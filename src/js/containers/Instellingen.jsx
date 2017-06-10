import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

import {inject, observer, PropTypes} from 'mobx-react';

const Instellingen = ({store}) => {
  const {setSpeed, setBug, setPushnotification, setLocationsharing} = store;

  const handleSpeed = newSpeed => {
    setSpeed(newSpeed);
  };

  let $pushnotificationInput;
  let $locationsharingInput;

  const handlePushClick = () => {
    setPushnotification($pushnotificationInput.checked);
  };

  const handleLocationClick = () => {
    setLocationsharing($locationsharingInput.checked);
  };

  let $buginput;
  const handleBug = e => {
    e.preventDefault();
    const bugText = $buginput.value;
    $buginput.value = ``;
    setBug(bugText);
  };

  return (
    <section>
      <Header page='Instellingen' />
      <main>
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
        <div className='push'>
          <input type='checkbox' name='push' id='push' onClick={handlePushClick} ref={$el => $pushnotificationInput = $el} />
          <label htmlFor='push'>push notificatie</label>
        </div>
        <div className='locatiedeling'>
          <input type='checkbox' name='locatiedeling' id='locatiedeling' onClick={handleLocationClick} ref={$el => $locationsharingInput = $el} />
          <label htmlFor='locatiedeling'>locatiedeling</label>
        </div>
        <form onSubmit={handleBug}>
          <textarea ref={$el => $buginput = $el}>

          </textarea>
          <input type='submit' value='verzenden' />
        </form>
        <Navigation />
      </main>
    </section>
  );
};

Instellingen.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Instellingen)
);
