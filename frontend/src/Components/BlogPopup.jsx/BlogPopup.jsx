import React, { useContext, useState } from 'react';
import './BlogModal.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { collegeContext } from '../../Context/College_context';

const BlogModal = () => {
  const { deletepost,editpost,updateview } = useContext(collegeContext);
  const { state } = useLocation();
  const blog = state?.blog;
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    topic: '',
    tag: '',
    content: '',
    userid: localStorage.getItem('user-id')
  });

  if (!blog) return <p>No blog data found.</p>;

  // Load blog data into form when switching to edit mode
  const handleEdit = () => {
    setFormData({
      topic: blog.Title || '',
      tag: blog.Tag || '',
      content: blog.Content || '',
      userid: localStorage.getItem('user-id')
    });
    setEditing(true);
  };
  const handleview=()=>{
    updateview(blog._id);
    console.log(blog);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editpost(blog._id ,formData);
    console.log('Submit edited data:', formData);
    setEditing(false);
  };

  return (
    <div className="modal-backdrop" onClick={() => navigate(-1)}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()} >
        <button className="popup-close-btn" onClick={() => navigate(-1)}>×</button>

        {!editing ? (
          <>
            <h2 className="popup-heading">{blog.Title}</h2>
            <p className="popup-content">{blog.Content}</p>
            <div className="popup-footer">
              <span className="popup-date">
                Posted on: {new Date(blog.createdAt).toLocaleDateString()}
              </span>
              <div className="popup-actions">
                <div className="popup-like-btn">{blog.Views} Views</div>
                <button className="popup-edit-btn" onClick={handleEdit}>Edit</button>
                <button className="popup-delete-btn" onClick={() => deletepost(blog._id)}>Delete</button>
              </div>
            </div>
          </>
        ) : (
          <form className="inputform" onSubmit={handleSubmit}>
            <h3>Edit Blog</h3>

            <label>Type</label>
            <div className="radio-group">
              {['Blog', 'Notice', 'Interview Experience'].map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name="tag"
                    value={option}
                    checked={formData.tag === option}
                    onChange={handleChange}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>

            <label htmlFor="topic">Title</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Provide topic"
              required
            />

            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Provide content"
              rows="6"
              required
            />

            <div className="form-actions">
              <button type="submit" className="inputform-button">Update</button>
              <button type="button" className="cancel-btn" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BlogModal;
