import React, { useContext } from 'react';
import './Home.css';
import BlogCard from '../../Components/Blog/Blog';
import NoticeCard from '../../Components/Notice/NoticeCard';
import InterviewExperienceCard from '../../Components/Interview-experince/Interview_card';
import { collegeContext } from '../../Context/College_context';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { Posts,updateview } = useContext(collegeContext);
  const navigate = useNavigate();

  const handleClick = (post) => {
    updateview(post._id)
    navigate('/view', { state: { blog: post } });
  };
  const userid=localStorage.getItem('user-id');
  const myposts=Posts.filter(item=>item.SubmitedBy==userid);
  // Filter posts by type
  const interviews = myposts.filter(post => post.Type === 'Interview Experience');
  const blogs = myposts.filter(post => post.Type === 'Blog');
  const notices = myposts.filter(post => post.Type === 'Notice');
// console.log(Posts);
// console.log(myposts);
  return (
    <>
      <h1>Welcome to College Engagement App</h1>
      <div className="container">

        <h2 className="home-section-heading">Interview Experiences</h2>
        <div className="horizontal-scroll">
          {interviews.map((interview, i) => (
            <div className='card' key={interview._id || i} onClick={() => handleClick(interview)}>
              <InterviewExperienceCard {...interview} />
            </div>
          ))}
        </div>

        <h2 className="home-section-heading">Blog Posts</h2>
        <div className="horizontal-scroll">
          {blogs.map((blog, i) => (
            <div className='card' key={blog._id || i} onClick={() => handleClick(blog)}>
              <BlogCard {...blog} />
            </div>
          ))}
        </div>

        <h2 className="home-section-heading">Notices</h2>
        <div className="horizontal-scroll">
          {notices.map((notice, i) => (
            <div className='card' key={notice._id || i} onClick={() => handleClick(notice)}>
              <NoticeCard {...notice} />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Home;
