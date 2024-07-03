// import React from 'react'
// import './profile.css'
// import { useAuth0 } from "@auth0/auth0-react";


// function Profile() {

//     const {user, isAuthenticated,  loginWithRedirect , logout} = useAuth0();

//   return (
//     <div className='profile'>

//          <div className="welcome">

//          {isAuthenticated ? (
//           <>
//             <h2>Welcome, {user.name}</h2>
//           </>
//         ) : (
//           <>
            
//           </>
//         )}

//          </div>
        

//     </div>
//   )
// }

// export default Profile





// import React, { useState, useEffect } from 'react';
// import './profile.css';
// import Pronav from './Pronav';

// function Profile() {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const fetchUsername = async () => {
//       try {
//         const response = await fetch('/api/user/', { //Your API Endpoint
//           headers: {
//             'Content-Type': 'application/json',
//             // Add any authentication headers if needed
//             // e.g., Authorization: `Bearer ${accessToken}`
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch username');
//         }
//         const data = await response.json();
//         setUsername(data.username);
//       } catch (error) {
//         console.error('Error fetching username:', error);
//       }
//     };

//     fetchUsername();
//   }, []);



//   return (
//     <div className='profile'>
//       <div className="welcome">
//         {username ? (
//           <h2>Welcome, {username}</h2>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//       <Pronav/>
//     </div>
//   );
// }

// export default Profile;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import Pronav from './Pronav';

function Profile() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch('/api/user/', { // Your API Endpoint
          headers: {
            'Content-Type': 'application/json',
            // Add any authentication headers if needed
            // e.g., Authorization: `Bearer ${accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch username');
        }
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
    
    // Navigate to /personal_info when the component mounts
    navigate('/personal_info');
  }, [navigate]);

  return (
    <div className='profile'>
      <div className="welcome">
        {username ? (
          <h2>Welcome, {username}</h2>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Pronav />
    </div>
  );
}

export default Profile;
