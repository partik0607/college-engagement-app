import React from 'react';
import './NoticeCard.css';

const NoticeCard = ({ Title, Content, createdAt, author }) => {
  return (
    <div className="noticecard-card">
      <h2 className="noticecard-heading">{Title}</h2>
      <p className="noticecard-content">{Content}</p>
      <div className="noticecard-footer">
        <span className="noticecard-date">Issued on: {new Date(createdAt).toLocaleDateString()}</span>
        {/* <span className="noticecard-author">By: {author}</span> */}
      </div>
    </div>
  );
};

export default NoticeCard;
