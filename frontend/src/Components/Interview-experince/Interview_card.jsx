import React from 'react';
import './InterviewExperienceCard.css';  // Separate CSS file

const InterviewExperienceCard = ({ Title, Content, createdAt }) => {
  return (
    <div className="interviewcard-card">
      <h2 className="interviewcard-heading">{Title}</h2>
      <p className="interviewcard-content">{Content}</p>
      <div className="interviewcard-footer">
        <span className="interviewcard-date">Issued on: {new Date(createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default InterviewExperienceCard;

