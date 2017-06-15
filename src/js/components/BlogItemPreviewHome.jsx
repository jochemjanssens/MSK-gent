import React from 'react';

import {Link} from 'react-router-dom';

const BlogItemPreviewHome = content => {
  return (
    <Link to={`/Blogpost/${content.id}`} className='blogItemHome'>
      <article className='blogItem'>
        <header className='blogItem-title'>
          <h2>{content.title}</h2>
        </header>
        <p className='blogItem-text blogItem-text-preview'>{content.text}</p>
        <div className='buttons'>
           <p className='blogItem-detail'>Lees meer </p>
        </div>
      </article>
<<<<<<< HEAD
    <article className='blogItem desktop-blogs'>
      <header className='blogItem-title'>
        <h2>{content.title}</h2>
      </header>
      <p className='blogItem-text blogItem-text-preview'>{content.text}</p>
      <div className='buttons'>
         <p className='blogItem-detail'>Lees meer </p>
        <Link to={`/Blog`} className='blogItem-all'>Ontdek meer blogs</Link>
      </div>
    </article>
=======
>>>>>>> 60d0be5c36c5214ff15f18e48f52a71ca042c8c7
    </Link>
  );

};

export default BlogItemPreviewHome;
