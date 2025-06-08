import React, { useContext, useState } from 'react';
import './Notices.css';
import { collegeContext } from '../../Context/College_context';
import NoticeCard from '../../Components/Notice/NoticeCard';
import { useNavigate } from 'react-router-dom';

const Notices = () => {
  const navigate = useNavigate();
  const { Posts,updateview } = useContext(collegeContext);

  const [filters, setFilters] = useState('');

  const handleClick = (notice) => {
    updateview(notice._id);
    navigate('/view', { state: { blog: notice } }); // shared viewer
  };

  const filteredNotices = Posts
    .filter(post => post.Type === 'Notice')
    .filter(notice =>
      notice.Title.toLowerCase().includes(filters.toLowerCase())
    );

  return (
    <div className="notice-container">
      <div className="notice-header">
        <h2 className="notice-heading">Notices</h2>
        <input
          className="notice-search-bar"
          type="text"
          placeholder="Search notices..."
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
        />
      </div>
      <hr />
      {filteredNotices.length > 0 ? (
        <div className="notice-grid">
          {filteredNotices.map((notice) => (
            <div
              key={notice._id}
              className="notice-wrapper"
              onClick={() => handleClick(notice)}
            >
              <NoticeCard {...notice} />
            </div>
          ))}
        </div>
      ) : (
        <p className="no-notice-message">No notices found matching your search.</p>
      )}
    </div>
  );
};

export default Notices;
