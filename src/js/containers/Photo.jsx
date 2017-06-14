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
    window.alert(`share on facebook`);
  };

  return (
    <section className='tourstart'>
      <header className='header'>
        <h1 className='hidden'>MSK tour</h1>
        <img src='assets/svg/logo.svg' alt='logoSMK' width='104' height='44' className='header-logo' />
      </header>
      <div className='ensorBackground'></div>
      <main className='photo-parent'>
        <form onSubmit={handleImage}>
          <label htmlFor='file' className='file-label botFoto'>Klik voor een foto</label>
          <input type='file' className='file-input' id='file' accept='image/*' capture='camera' ref={$el => $pictureinput = $el} />
        </form>
        <img src='/assets/img/photoPlaceholder.png' className='img foto' id='outImage' onClick={fbsClick} />
        <Navigation />
      </main>
    </section>
  );
};

export default Photo;
