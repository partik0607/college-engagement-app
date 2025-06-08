import React, { useState } from 'react';
import './Createpost.css';
import { useContext } from 'react';
import CoustomcollegeContext, { collegeContext } from '../../Context/College_context';
function Createpost() {
  const token=localStorage.getItem('auth-token')
  const [formdata, setformdata] = useState({
    topic: "",
    tag: "",
    content: "",
    userid:localStorage.getItem('user-id')
  });
  const {fetchUsers,createpost}=useContext(collegeContext);
  // console.log(fetchUsers);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async(e) => {
    e.preventDefault();
    // try {
    //     const response = await fetch('http://localhost:5005/api/v1/post', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`,

    //       },
    //       body: JSON.stringify(formdata),
    //     });
    
    //     const data = await response.json();
    //     console.log(data);
    //     if (data.success) {
    //       console.log(data);
    //       alert("Post added succesfuly ");
    //       // window.location.replace("/Home");
    //     } else {
    //       alert(data.errors || "Post not added ");
    //     }
    //   } catch (error) {
    //     console.error("Error during adding post:", error);
    //     alert("Something went wrong. Try again!");
    //   }
      // await fetchUsers();
      createpost(formdata);
    // console.log(formdata);
  };

  return (
    <form onSubmit={handlesubmit} className='inputform'>
         <label>Type</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="tag"
            value="Blog"
            checked={formdata.tag === "Blog"}
            onChange={handlechange}
            required
          />
          Blog
        </label>
        <label>
          <input
            type="radio"
            name="tag"
            value="Notice"
            checked={formdata.tag === "Notice"}
            onChange={handlechange}
            required
          />
          Notice
        </label>
        <label>
          <input
            type="radio"
            name="tag"
            value="Interview Experience"
            checked={formdata.tag === "Interview Experience"}
            onChange={handlechange}
            required
          />
          Interview Experience
        </label>
      </div>

      <label htmlFor="topic">Title</label>
      <input
        type="text"
        name="topic"
        value={formdata.topic}
        onChange={handlechange}
        placeholder="Provide Topic"
        required
      />

      <label htmlFor="content">Content</label>
      <textarea
            name="content"
            value={formdata.content}
            onChange={handlechange}
            placeholder="Provide content"
            rows="6"
            required
            />


      <button type="submit" className="inputform-button">
        Create
      </button>
    </form>
  );
}

export default Createpost;
