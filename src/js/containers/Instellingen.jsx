import React from 'react';

import Navigation from '../components/Navigation';

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
      <header className='header'>
        <h1 className='hidden'>MSK tour</h1>
        <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
      </header>
      <main>
        <section className='infoItem'>
          <header className='infoItem-title'>
            <h2>Snelheid</h2>
          </header>
          <ul className='speedSelector'>
            <li onClick={() => handleSpeed(0.5)}>0,5x</li>
            <li onClick={() => handleSpeed(0.75)}>0,75x</li>
            <li onClick={() => handleSpeed(1)}>Normaal</li>
            <li onClick={() => handleSpeed(1.25)}>1,25x</li>
            <li onClick={() => handleSpeed(1.5)}>1,5x</li>
          </ul>
        </section>
        <div className='push infoItem'>
          <label htmlFor='push' className='infoItem-title'>push notificatie</label>
          <input type='checkbox' name='push' id='push' onClick={handlePushClick} ref={$el => $pushnotificationInput = $el} />
        </div>
        <div className='locatiedeling infoItem'>
          <label htmlFor='locatiedeling' className='infoItem-title'>locatiedeling</label>
          <input type='checkbox' name='locatiedeling' id='locatiedeling' onClick={handleLocationClick} ref={$el => $locationsharingInput = $el} />
        </div>
        <form onSubmit={handleBug} className='infoItem'>
          <label htmlFor='bugReport' className='infoItem-title bug-title'>Bug Report</label>
          <textarea ref={$el => $buginput = $el} id='bugReport' className='bug-area'>

          </textarea>
          <input type='submit' value='verzend' className='bug-submit' />
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
