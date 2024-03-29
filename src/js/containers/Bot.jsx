import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const Bot = ({store}) => {
  const {currentBotId, setCurrentBotId, botContent, addContentToBot} = store;
  const json = require(`../../assets/data/botData.json`);

  /*Vraag toevoegen aan content van de bot*/
  if (botContent.length === 0) {
    addContentToBot([1, json[currentBotId].question]);
  }

  /*Antwoord toevoegen en zorgen dat de nieuwe vraag gerenderd wordt*/
  const handleResponseClick = response => {
    if (response === 1) {
      addContentToBot(
        [2, json[currentBotId].response1]
      );
      addContentToBot(
        [1, json[json[currentBotId].response1next].question]
      );
      setCurrentBotId(json[currentBotId].response1next);
    } else {
      addContentToBot(
        [2, json[currentBotId].response2]
      );
      addContentToBot(
        [1, json[json[currentBotId].response2next].question]
      );
      setCurrentBotId(json[currentBotId].response2next);
    }
  };

  return (
    <section className='bot'>
      <section className='bot-data'>
        {
          botContent.map(
            b => {
              if (b[0] === 1) {
                return (
                  <p key={Math.random()} className='botItem botArtist'>{b[1]}</p>
                );
              } else {
                return (
                  <p key={Math.random()} className='botItem botUser'>{b[1]}</p>
                );
              }
            }
          )
        }
      </section>
      <section>
        <div className='options'>
          <p
            className='button'
            onClick={() => handleResponseClick(1)}>
            {json[currentBotId].response1}
          </p>
          <p
            className='button'
            onClick={() => handleResponseClick(2)}>
            {(json[currentBotId].response2 === `start` ? <Link to='/Tour'>Start ervaring</Link> : json[currentBotId].response2)}
          </p>
        </div>
      </section>
    </section>
  );
};

Bot.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject(`store`)(
  observer(Bot)
);
