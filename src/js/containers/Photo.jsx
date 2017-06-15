import React from 'react';

import Navigation from '../components/Navigation';

const Photo = () => {
  let $pictureinput;

  const handleImage = e => {
    e.preventDefault();
    console.log($pictureinput.value);
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
          <p className='botFoto'>Klik hier voor een foto</p>
          <label htmlFor='file' className='file-label botFoto' id='label'><img src='/assets/img/photoPlaceholder.jpg' className='img foto' id='outImage' /></label>
          <input type='file' className='file-input' id='file' accept='image/*' capture='camera' ref={$el => $pictureinput = $el} />
        </form>

        <Navigation />
      </main>
    </section>
  );
};

export default Photo;
