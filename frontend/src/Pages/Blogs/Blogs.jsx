import React, { useContext, useEffect, useState } from 'react';
import BlogCard from '../../Components/Blog/Blog';
import { collegeContext } from '../../Context/College_context';
import { useNavigate } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
  const { Posts,fetchUsers,updateview } = useContext(collegeContext);
  useEffect(()=>{
    fetchUsers();
  },[])
  const navigate = useNavigate();

  const [filters, setFilters] = useState('');
  const blogs = Posts.filter(post => post.Type === 'Blog');

  const handleClick = (blog) => {
      updateview(blog._id);
    navigate('/view', { state: { blog } });
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.Title.toLowerCase().includes(filters.toLowerCase()) 
  );
  console.log(filteredBlogs);
  return (
    <div className="blogs-container">
      <div className='header'>
        <h2 className="section-heading">Latest Blogs</h2>
        <input
          className="search-bar"
          type="text"
          placeholder="Search blogs..."
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
        />
      </div>
      <hr/>
      {filteredBlogs.length > 0 ? (
        <div className="blogs-grid">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="blog-wrapper"
              onClick={() => handleClick(blog)}
            >
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      ) : (
        <p className="no-blogs-message">No blogs found matching your search.</p>
      )}
    </div>
  );
};

export default Blogs;
