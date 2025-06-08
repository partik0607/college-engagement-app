import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';


function Navbar() {
  
  return (
        <div className="nav">
        <div className="nav-logo-container">
          <div className="nav-logo">
              <p className="nav-logo">College Engagement</p>
            </div>
      </div>
      <ul  className="nav-menu">
        <li><Link to='/Home' className="no-underline">HOME</Link></li>
        <li><Link to='/Blogs' className="no-underline">Blogs</Link></li>
        <li><Link to='/Notices'className="no-underline">Notice</Link></li>
        <li><Link to='/Interview_Experinces'className="no-underline">Interview-Experience</Link></li>
        <li><Link to='/Create'className="no-underline">Create Post</Link></li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{
          localStorage.removeItem('auth-token');
          localStorage.removeItem('user-id');
          localStorage.removeItem('user-username');
          localStorage.removeItem('user-email');
          window.location.replace("/");
        }}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
      </div>
        </div>

  )
}

export default Navbar