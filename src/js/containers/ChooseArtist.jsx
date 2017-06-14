import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const ChooseArtist = ({store}) => {
  const {setArtist, currentArtistId, updateTourSlider} = store;

  const artists = [
    `magritte`,
    `ensor`,
    `vaneyck`
  ];

  setArtist(artists[currentArtistId]);

  const handleArtistClick = direction => {
    updateTourSlider(direction, artists.length - 1);
  };

  let numbers;
  const calculateNumbers = () => {
    console.log(currentArtistId);
    if (currentArtistId === 0) {
      numbers = [
        artists.length - 1,
        currentArtistId,
        currentArtistId + 1
      ];
    } else if (currentArtistId === artists.length - 1) {
      numbers = [
        currentArtistId - 1,
        currentArtistId,
        0
      ];
    }  else if (currentArtistId === artists.length) {
      numbers = [
        currentArtistId,
        0,
        1
      ];
    } else {
      numbers = [
        currentArtistId - 1,
        currentArtistId,
        currentArtistId + 1
      ];
    }
    console.log(numbers);
  };
  calculateNumbers();

  return (
    <section>
      <header className='header'>
        <h1 className='hidden'>MSK tour</h1>
        <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
      </header>
      <main>
        <header>
          <h2>Welke kunstenaar kies je?</h2>
        </header>
        <p>{artists[currentArtistId]}</p>
        <section className='slider'>
          <div onClick={() => handleArtistClick(`back`)}>
            <img src={`assets/img/${artists[numbers[0]]}_slider.png`} width='110' height='110' />
          </div>
          <div>
            <img src={`assets/img/${artists[numbers[1]]}_slider.png`} width='150' height='150' />
          </div>
          <div onClick={() => handleArtistClick(`next`)}>
            <img src={`assets/img/${artists[numbers[2]]}_slider.png`} width='110' height='110' />
          </div>
        </section>
        <p>{artists[currentArtistId]}</p>
        <Link to='/Home' className='button'>Kies mij</Link>
      </main>
    </section>
  );
};

ChooseArtist.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(ChooseArtist)
);
