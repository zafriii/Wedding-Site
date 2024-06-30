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
