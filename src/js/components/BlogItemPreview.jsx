import React from 'react';

import {Link} from 'react-router-dom';

const BlogItemPreview = content => {
  return (
    <li>
      <header>
        <h2>{content.title}</h2>
      </header>
      <p>{content.text}</p>
      <img src={content.imageUrl} />
      <Link to={`/Blogpost/${content.id}`}>Lees meer</Link>
    </li>
  );

};

export default BlogItemPreview;
