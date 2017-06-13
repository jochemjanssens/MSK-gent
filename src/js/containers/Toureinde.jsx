import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

import {inject, observer, PropTypes} from 'mobx-react';

const Toureinde = ({store}) => {
  const {artistData} = store;

  let $pictureinput;

  const handleImage = e => {
    e.preventDefault();
    console.log($pictureinput.value);
  };

  const fbsClick = () => {
    console.log(`share`);
  };

  return (
    <section>
      <Header page='einde tour' />
      <main>
        <img src={`./assets/img/${  artistData.nameValue  }.jpg`} alt={`foto${   artistData.nameValue}`} />
        <p>Hopelijk vond je de tour interessant</p>
        <Navigation />
      </main>

      <form onSubmit={handleImage}>
        <img src='' className='img' id='outImage' onClick={fbsClick} />
        <input type='file' id='file' accept='image/*' capture='camera' ref={$el => $pictureinput = $el} />
      </form>
    </section>
  );
};

Toureinde.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Toureinde)
);
