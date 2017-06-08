import React from 'react';

import {inject, observer, PropTypes} from 'mobx-react';

import {Link} from 'react-router-dom';

const Blogadmin = ({store}) => {
  const {setPage, newBlogItem} = store;

  /* Zet in de store de page op de huidige page, dit wordt gebruikt om de titel weer te geven in de header*/
  const page = `Blogadmin`;
  setPage(page);

  /* Nieuw item plaatsen */
  let $titleinput, $artistinput, $textinput, $pictureinput;
  const placeBlogItem = e => {
    e.preventDefault();
    const data = {
      title: $titleinput.value,
      arist: $artistinput.value,
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

  return (
    <section>
      <header>
        <h2>Plaats een nieuw blogartikel</h2>
      </header>
      <form onSubmit={placeBlogItem}>
        <label htmlFor='title'>Titel:</label>
        <input type='text' id='title' ref={$el => $titleinput = $el} />

        <label htmlFor='artist'>Naam artiest:</label>
        <input type='text' id='artist' ref={$el => $artistinput = $el} />

        <label htmlFor='text'>Tekst:</label>
        <textarea id='text' ref={$el => $textinput = $el}></textarea>

        <label htmlFor='picture'>foto url:</label>
        <input type='text' id='picture' ref={$el => $pictureinput = $el} />

        <input type='submit' />
      </form>
      <Link to='/Blog'>Naar de blog</Link>
    </section>
  );
};

Blogadmin.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Blogadmin)
);
