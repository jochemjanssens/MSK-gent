import React from 'react';

import Header from '../components/Header';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const Blogadmin = ({store}) => {
  const {newBlogItem, blogAdminImgSrc, addBlogAdminImgSrc} = store;

  /* Nieuw item plaatsen */
  let $titleinput, $artistinput, $textinput, $pictureinput;
  const placeBlogItem = e => {
    e.preventDefault();
    const data = {
      title: $titleinput.value,
      artist: $artistinput.value,
      text: $textinput.value,
      pictureUrl: $pictureinput.value
    };
    if ($titleinput.value === `` || $artistinput.value === `` || $textinput.value === `` || $pictureinput.value === ``) {
      console.log(`niet volledig ingevuld`);
    } else {
      newBlogItem(data);
      $titleinput.value = ``;
      $artistinput.value = ``;
      $textinput.value = ``;
      $pictureinput.value = ``;
    }
  };

  const showPicture = () => {
    const url = $pictureinput.value;
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      addBlogAdminImgSrc($pictureinput.value);
    } else {
      addBlogAdminImgSrc(`http://www.autolocators.ca/images/placeholder.gif`);
    }
  };

  console.log(blogAdminImgSrc);

  return (
    <section>
      <Header page='Blogadmin' />
      <main>
        <header>
          <h2>Plaats een nieuw blogartikel</h2>
        </header>
        <form onSubmit={placeBlogItem}>
          <label htmlFor='title'>Titel:</label>
          <input type='text' id='title' ref={$el => $titleinput = $el} /><br />

          <label htmlFor='artist'>Naam artiest:</label>
          <input type='text' id='artist' ref={$el => $artistinput = $el} /><br />

          <label htmlFor='text'>Tekst:</label>
          <textarea id='text' ref={$el => $textinput = $el}></textarea><br />

          <label htmlFor='picture'>foto url:</label>
          <input type='text' id='picture' onChange={showPicture} ref={$el => $pictureinput = $el} /><br />
          <img src={blogAdminImgSrc} alt='' />

          <input type='submit' />
        </form>
        <Link to='/Blog'>Naar de blog</Link>
      </main>
    </section>
  );
};

Blogadmin.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Blogadmin)
);
