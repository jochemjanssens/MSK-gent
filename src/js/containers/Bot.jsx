import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

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
      <section>
        {
          botContent.map(
            b => {
              if (b[0] === 1) {
                return (
                  <p key={Math.random()} className='botArtist'>{b[1]}</p>
                );
              } else {
                return (
                  <p key={Math.random()} className='botUser'>{b[1]}</p>
                );
              }
            }
          )
        }
      </section>
      <section>
        <div className='options'>
          <p
            onClick={() => handleResponseClick(1)}>
            {json[currentBotId].response1}
          </p>
          <p
            onClick={() => handleResponseClick(2)}>
            {json[currentBotId].response2}
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
