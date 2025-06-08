// src/components/BlogCard.jsx
import React from 'react';
import './BlogCard.css';

const BlogCard = ({ Title, Content, createdAt, author }) => {
  return (
    <div className="blogcard-card">
      <h2 className="blogcard-heading">{Title}</h2>
      <p className="blogcard-content">{Content}</p>
      <div className="blogcard-footer">
        <span className="blogcard-date">Issued on: {new Date(createdAt).toLocaleDateString()}</span>
        {/* <span className="blogcard-author">By: {author}</span> */}
      </div>
    </div>
  );
};

export default BlogCard;
