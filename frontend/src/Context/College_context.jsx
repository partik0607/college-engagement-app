import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const collegeContext = createContext(null);

const CoustomcollegeContext = ({ children }) => {
  const navigate = useNavigate();
  const [Posts, SetPosts] = useState([]);
  const [Users, SetUsers] = useState([]);
  const token = localStorage.getItem('auth-token');

  // ✅ Reusable fetchPosts function
  const fetchposts = async () => {
    try {
      const response = await fetch('http://localhost:5005/api/v1/getposts', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        SetPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5005/api/v1/getusers', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        SetUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateview=async (id)=>{
      try {
    console.log(id);
    const response = await fetch(`http://localhost:5005/api/v1/updateview/${id}`, {
      method: 'PUT', // or 'PATCH' depending on your backend
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      console.log(response);
      // Optional: fetch latest posts again
      const updatedPosts = await fetch('http://localhost:5005/api/v1/getposts', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const newPosts = await updatedPosts.json();
      SetPosts(newPosts);
    } else {
      const errorData = await response.json();
      console.error('Update failed:', errorData);
    }
  } catch (error) {
    console.error('Error updating post:', error);
  }

  }
   const deletepost = async (postid) => {
    try {
      const response = await fetch(`http://localhost:5005/api/v1/delete/${postid}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("deleted");
        await fetchposts();    // 🔄 Fetch updated posts after delete
        navigate(-1);          // ⬅️ Go to previous page if needed
      } else {
        const errorData = await response.json();
        console.error('Failed to delete:', errorData);
      }
    } catch (error) {
      console.error('Error during delete:', error);
    }
  };

 const editpost = async (postId, data) => {
  try {
    console.log(postId);
    const response = await fetch(`http://localhost:5005/api/v1/update/${postId}`, {
      method: 'PUT', // or 'PATCH' depending on your backend
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log(response);
      // Optional: fetch latest posts again
      const updatedPosts = await fetch('http://localhost:5005/api/v1/getposts', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const newPosts = await updatedPosts.json();
      SetPosts(newPosts);
    } else {
      const errorData = await response.json();
      console.error('Update failed:', errorData);
    }
  } catch (error) {
    console.error('Error updating post:', error);
  }
};

const createpost=async (formdata)=>{
 try {
        const response = await fetch('http://localhost:5005/api/v1/post', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

          },
          body: JSON.stringify(formdata),
        });
    
        const data = await response.json();
        console.log(data);
        if (data.success) {
          console.log(data);
          alert("Post added succesfuly ");
          // window.location.replace("/Home");
        } else {
          alert(data.errors || "Post not added ");
        }
      } catch (error) {
        console.error("Error during adding post:", error);
        alert("Something went wrong. Try again!");
      }
      await fetchposts();
} 
  useEffect(() => {
    fetchUsers();
    fetchposts();
  }, []);

  // ✅ Updated delete function that refreshes posts



  return (
    <collegeContext.Provider value={{ Users, Posts, SetPosts, deletepost, editpost,fetchUsers,updateview,createpost }}>
      {children}
    </collegeContext.Provider>
  );
};

export default CoustomcollegeContext;
