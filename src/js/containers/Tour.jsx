import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

import {inject, observer, PropTypes} from 'mobx-react';

const Tour = ({store}) => {
  const {artistData, currentTourItem, updateCurrentTourItem} = store;
  console.log(artistData);


  const tourData = require(`../../assets/data/tourData.json`);
  console.log(tourData);

  const showNextItem = () => {
    updateCurrentTourItem();
  };

  return (
    <section>
      <Header page='Tour' />
      <main>
        <p>welkom bij de tour</p>
        <img src={tourData[currentTourItem].imageUrl} alt='' />
        <h1>{tourData[currentTourItem].name}</h1>
        <h2>{tourData[currentTourItem].artist}</h2>
        <p>{tourData[currentTourItem].text}</p>
        <p onClick={showNextItem}>Volgende</p>
        <Navigation />
      </main>
    </section>
  );
};

Tour.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Tour)
);
