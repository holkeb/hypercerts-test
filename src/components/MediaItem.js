// src/components/MediaItem.js

import React from 'react';

const MediaItem = ({ tag, title, titleLink, authors }) => {
  return (
    <div className="media-item" style={{ padding: '10px' }}>
      <p className="greyTag">{tag}</p><br />
      <a href={titleLink} target="_blank" className="heading-font" rel="noopener noreferrer">{title}</a><br />
      {authors.map((author, index) => (
        <div key={index}>
          <a href={author.link} target="_blank" className="author-font" rel="noopener noreferrer">{author.name}</a><br />
        </div>
      ))}
      <hr />
    </div>
  );
};

export default MediaItem;
