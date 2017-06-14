import React from 'react';

const BlogItem = content => {
  return (
    <article className='blogItem blogItemDetail'>
      <h3 className='blogitem-artist'>{content.artist}</h3>
      <header className='blogItem-title'>
        <h2>{content.title}</h2>
      </header>
      <p className='blogItem-text'>{content.text}</p>
      <img className='blogitem-image' src={content.imageUrl} />
    </article>
  );

};

export default BlogItem;
