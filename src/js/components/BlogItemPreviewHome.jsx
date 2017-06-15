import React from 'react';

import {Link} from 'react-router-dom';

const BlogItemPreviewHome = content => {
  return (
    <Link to={`/Blogpost/${content.id}`} className='blogItemHome'>
<<<<<<< HEAD
      <article className='blogItem'>
        <header className='blogItem-title'>
          <h2>{content.title}</h2>
        </header>
        <p className='blogItem-text blogItem-text-preview'>{content.text}</p>
        <div className='buttons'>
           <p className='blogItem-detail'>Lees meer </p>
        </div>
      </article>
=======
>>>>>>> abf71b26ffe010f0675ea3a0834c9aed0ffa335e
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
    </Link>
  );

};

export default BlogItemPreviewHome;
