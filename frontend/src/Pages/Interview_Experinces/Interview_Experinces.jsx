import React, { useContext, useState } from 'react';
import './Interview_Experinces.css'
import { collegeContext } from '../../Context/College_context';
import InterviewExperienceCard from '../../Components/Interview-experince/Interview_card';
import { useNavigate } from 'react-router-dom';

const Interview_Experiences = () => {
  const navigate = useNavigate();
  const { Posts,updateview } = useContext(collegeContext);

  const [filters, setFilters] = useState('');
  const interviews = Posts.filter(post => post.Type === 'Interview Experience');

  const handleClick = (experience) => {
    updateview(experience._id);
    navigate('/view', { state: { blog: experience } }); // keeping 'blog' key for consistency
  };

  const filteredInterviews = interviews.filter(item =>
    item.Title.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div className="interview-container">
      <div className="interview-header">
        <h2 className="interview-heading">Interview Experiences</h2>
        <input
          className="interview-search-bar"
          type="text"
          placeholder="Search interviews..."
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
        />
      </div>
      <hr />
      {filteredInterviews.length > 0 ? (
        <div className="interview-grid">
          {filteredInterviews.map((item) => (
            <div
              key={item._id}
              className="interview-wrapper"
              onClick={() => handleClick(item)}
            >
              <InterviewExperienceCard {...item} />
            </div>
          ))}
        </div>
      ) : (
        <p className="no-interviews-message">No interview experiences found matching your search.</p>
      )}
    </div>
  );
};

export default Interview_Experiences;
