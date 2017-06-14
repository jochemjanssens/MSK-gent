import React from 'react';

import Navigation from '../components/Navigation';

const Photo = () => {
  let $pictureinput;

  const handleImage = e => {
    e.preventDefault();
    console.log($pictureinput.value);
  };

  const fbsClick = () => {
    console.log(`share`);
  };

  return (
    <section className='photo'>
      <header className='header'>
        <h1 className='hidden'>MSK tour</h1>
        <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
      </header>
      <main className='photo-parent'>
        <form onSubmit={handleImage}>
          <img src='' className='img' id='outImage' onClick={fbsClick} />
          <input type='file' id='file' accept='image/*' capture='camera' ref={$el => $pictureinput = $el} />
        </form>
        <Navigation />
      </main>
    </section>
  );
};

export default Photo;
