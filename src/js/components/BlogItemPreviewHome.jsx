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
    </Link>
  );

};

export default BlogItemPreviewHome;
