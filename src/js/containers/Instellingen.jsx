import React from 'react';

import Navigation from '../components/Navigation';

import {inject, observer, PropTypes} from 'mobx-react';

const Instellingen = ({store}) => {
  const {setSpeed, setBug, speed, bugText, setBugText} = store;

  const playSpeed = Number(speed);

  const handleSpeed = newSpeed => {
    setSpeed(newSpeed);
  };

  let $buginput;
  const handleBug = e => {
    e.preventDefault();
    const bugText = $buginput.value;
    if ($buginput.value !== ``) {
      setBug(bugText);
    } else {
      setBugText(`Gelieve iets in te vullen`);
    }
    $buginput.value = ``;
  };

  return (
    <section className='opties'>
      <header className='header'>
        <h1 className='hidden'>MSK tour</h1>
        <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
      </header>
      <main>
        <div className='itemsTop'>
          <section className='infoItem infoItemTop'>
            <header className='infoItem-title'>
              <h2>Snelheid</h2>
            </header>
            <ul className='speedSelector'>
              <li className={(playSpeed === 1) ? `activeSpeedNormal` : `nonActiveSpeed speed-normal`} onClick={() => handleSpeed(1)}>Normaal</li>
              <div className='snelheid-flex'>
                <li className={(playSpeed === 0.5) ? `activeSpeed` : `nonActiveSpeed`} onClick={() => handleSpeed(0.5)}>0,5x</li>
                <li className={(playSpeed === 0.75) ? `activeSpeed` : `nonActiveSpeed`} onClick={() => handleSpeed(0.75)}>0,75x</li>
                <li className={(playSpeed === 1.25) ? `activeSpeed` : `nonActiveSpeed`} onClick={() => handleSpeed(1.25)}>1,25x</li>
                <li className={(playSpeed === 1.5) ? `activeSpeed` : `nonActiveSpeed`} onClick={() => handleSpeed(1.5)}>1,5x</li>
              </div>
            </ul>
          </section>
        </div>
        <form onSubmit={handleBug} className='infoItem'>
          <label htmlFor='bugReport' className='infoItem-title bug-title'>Bug Report</label>
          <textarea ref={$el => $buginput = $el} id='bugReport' className='bug-area'>

          </textarea>
          <p className='bugText'>{bugText}</p>
          <input type='submit' value='verzend' className='button bug-btn' />
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
