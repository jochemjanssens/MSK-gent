import React from 'react';

import {Link} from 'react-router-dom';

const BlogItemPreviewHome = content => {
  return (
    <article className='blogItem'>
      <header className='blogItem-title'>
        <h2>{content.title}</h2>
      </header>
      <p className='blogItem-text blogItem-text-preview'>{content.text}</p>
      <div className='buttons'>
        <Link to={`/Blogpost/${content.id}`} className='blogItem-detail'>Lees meer</Link>
        <Link to={`/Blog`} className='blogItem-all'>Ontdek meer blogs</Link>
      </div>
    </article>
  );

};

export default BlogItemPreviewHome;
