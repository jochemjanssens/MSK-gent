import React from 'react';

const BlogItem = content => {
  return (
    <li>
      <header>
        <h2>{content.title}</h2>
      </header>
      <p>{content.text}</p>
      <img src={content.imageUrl} />
    </li>
  );

};

export default BlogItem;
