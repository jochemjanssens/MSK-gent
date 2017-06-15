import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const ChooseArtist = ({store}) => {
  const {setArtist, currentArtistId, updateTourSlider, artistData} = store;

  const artistsList = [
    `magritte`,
    `ensor`,
    `vaneyck`
  ];

  if (artistsList[currentArtistId] !== artistData.nameValue) {
    setArtist(artistsList[currentArtistId]);
  }

  const handleArtistClick = direction => {
    updateTourSlider(direction, artistsList.length - 1);
  };

  let numbers;
  const calculateNumbers = () => {
    if (currentArtistId === 0) {
      numbers = [
        artistsList.length - 1,
        currentArtistId,
        currentArtistId + 1
      ];
    } else if (currentArtistId === artistsList.length - 1) {
      numbers = [
        currentArtistId - 1,
        currentArtistId,
        0
      ];
    }  else if (currentArtistId === artistsList.length) {
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
  };
  calculateNumbers();

  return (
    <section className='chooseArtist'>
      <header className='header'>
        <h1 className='hidden'>MSK tour</h1>
        <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
      </header>
      <main>
        <header className='chooseArtist-title'>
          <h2 className='desctop-keuze-titel'><span>Welke</span><br /><span>kunstenaar</span><span>kies</span><br /><span>je</span><span>?</span></h2>
        </header>
        <p className='chooseArtist-artistName'>{artistData.firstname} {artistData.name}</p>
        <section className='slider'>
          <div onClick={() => handleArtistClick(`back`)} className='slideritem-inactive'>
            <img className='slider-img' src={`assets/img/${artistsList[numbers[0]]}_slider.png`} width='110' height='110' />
          </div>
          <div className='slideritem-active'>
            <img className='slider-img' src={`assets/img/${artistsList[numbers[1]]}_slider.png`} width='150' height='150' />
          </div>
          <div onClick={() => handleArtistClick(`next`)}  className='slideritem-inactive'>
            <img className='slider-img' src={`assets/img/${artistsList[numbers[2]]}_slider.png`} width='110' height='110' />
          </div>
        </section>
        <p className='chooseArtist-artistHandle'>{artistData.handle}</p>
        <p className='chooseArtist-artistBio'>{artistData.bio}</p>
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
