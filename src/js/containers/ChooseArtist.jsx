import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

import Header from '../components/Header';

const ChooseArtist = ({store}) => {
  const {setArtist, currentArtistId, updateTourSlider} = store;

  const artists = [
    `Magritte`,
    `Ensor`,
    `Vaneyck`
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
      <Header page='Kies artiest' />
      <main>
        <header>
          <h2>Wie nodigde jou uit?</h2>
        </header>
        <section className='slider'>
          <div onClick={() => handleArtistClick(`back`)}>
            <img src={`assets/img/${artists[numbers[0]]}_slider.png`} alt='' />
            <p>
              {artists[numbers[0]]}
            </p>
          </div>
          <div>
            <img src={`assets/img/${artists[numbers[1]]}_slider.png`} alt='' />
            <p>
              {artists[numbers[1]]}
            </p>
          </div>
          <div onClick={() => handleArtistClick(`next`)}>
            <img src={`assets/img/${artists[numbers[2]]}_slider.png`} alt='' />
            <p>
              {artists[numbers[2]]}
            </p>
          </div>
        </section>
        <Link to='/Home'>Kies mij</Link>
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
