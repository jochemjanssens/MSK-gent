import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

import {inject, observer, PropTypes} from 'mobx-react';

const Tour = ({store}) => {
  const {currentTourItem, updateCurrentTourItem, currentTourText, setCurrentTourText, tourStart, handleTourStart, tourItemDone, handleTourItemDone, nextTourText, setNextTourText, speed} = store;

  const tourData = require(`../../assets/data/tourData.json`);

  const timerValue = 100;

  /*Zorgen dat deze functie niet wordt mee gererenderd als de tekst aanpast*/
  if (tourStart === true) {
    let time = 0;
    /*Start timer om de tekst up te daten*/
    const tourTimer = setInterval(() => {
      /*Update timer value*/
      if (speed === 0) {
        time += timerValue;
      } else {
        time += (timerValue * speed);
      }
      /*Check elk element van dit deel van de tour*/
      for (let i = 0;i < tourData[currentTourItem].text.length;i ++) {
        /*Check of dit het laatste item is*/
        if (i + 1 !== tourData[currentTourItem].text.length) {
          /* Als de starttijd voorbij de huidige tijd is, maar nog voor de tijd van de volgende, toon de tekst*/
          if (tourData[currentTourItem].text[i].starttime <= time && time <= tourData[currentTourItem].text[i + 1].starttime) {
            setCurrentTourText(tourData[currentTourItem].text[i].textItem);
            setNextTourText(tourData[currentTourItem].text[i + 1].textItem);
          }
        } else {
          /*Dit is het laatste item, dus enkel een check of het voorbij de start is*/
          if (time >= tourData[currentTourItem].text[i].starttime) {
            setCurrentTourText(tourData[currentTourItem].text[i].textItem);
            setNextTourText(``);
            clearInterval(tourTimer);
            handleTourItemDone();
          }
        }
      }
    }, timerValue);
    handleTourStart();
  }

  const showNextItem = () => {
    updateCurrentTourItem();
    handleTourItemDone();
  };

  if (tourItemDone) {
    return (
      <section>
        <Header page='Tour' />
        <main>
          <p>welkom bij de tour</p>
          <img src={tourData[currentTourItem].imageUrl} alt='' className='tourImage' />
          <h1>{tourData[currentTourItem].name}</h1>
          <h2>{tourData[currentTourItem].artist}</h2>
          <p>{currentTourText}</p>
          <p className='prev'>{nextTourText}</p>
          <p onClick={showNextItem}>Volgende</p>
          <Navigation />
        </main>
      </section>
    );
  } else {
    return (
      <section>
        <Header page='Tour' />
        <main>
          <p>welkom bij de tour</p>
          <img src={tourData[currentTourItem].imageUrl} alt='' className='tourImage' />
          <h1>{tourData[currentTourItem].name}</h1>
          <h2>{tourData[currentTourItem].artist}</h2>
          <p>{currentTourText}</p>
          <p className='prev'>{nextTourText}</p>
          <Navigation />
        </main>
      </section>
    );
  }

};

Tour.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Tour)
);
