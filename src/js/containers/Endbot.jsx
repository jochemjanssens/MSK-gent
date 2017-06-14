import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const Endbot = ({store}) => {
  const {currentEndBotId, setCurrentEndBotId, endBotContent, addContentToEndBot} = store;
  const json = require(`../../assets/data/endBotData.json`);

  /*Vraag toevoegen aan content van de bot*/
  if (endBotContent.length === 0) {
    addContentToEndBot([1, json[currentEndBotId].question]);
  }

  /*Antwoord toevoegen en zorgen dat de nieuwe vraag gerenderd wordt*/
  const handleResponseClick = response => {
    if (response === 1) {
      addContentToEndBot(
        [2, json[currentEndBotId].response1]
      );
      addContentToEndBot(
        [1, json[json[currentEndBotId].response1next].question]
      );
      setCurrentEndBotId(json[currentEndBotId].response1next);
    } else {
      addContentToEndBot(
        [2, json[currentEndBotId].response2]
      );
      addContentToEndBot(
        [1, json[json[currentEndBotId].response2next].question]
      );
      setCurrentEndBotId(json[currentEndBotId].response2next);
    }
  };

  return (
    <section className='bot'>
      <section className='bot-data'>
        {
          endBotContent.map(
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
            {(json[currentEndBotId].response1 === `nee` ? <Link to='/Home'>Terug naar home</Link> : json[currentEndBotId].response1)}
          </p>
          <p
            className='button'
            onClick={() => handleResponseClick(2)}>
            {(json[currentEndBotId].response2 === `ja` ? <Link to='/Photo'>Neem de foto</Link> : json[currentEndBotId].response2)}
          </p>
        </div>
      </section>
    </section>
  );
};

Endbot.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject(`store`)(
  observer(Endbot)
);
