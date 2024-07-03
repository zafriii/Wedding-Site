// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import './profile.css'

// function Pronav() {
//   return (
//     <div className='pronav'>
//         <div className='pronav-links'>
//                     <NavLink to="/personal_info" className='active' >Personal Informations</NavLink>
//                     <NavLink to="/notification">Notifications</NavLink>
//                     <NavLink to="/search" >Search Profiles</NavLink>
//         </div>

//     </div>
//   )
// }

// export default Pronav


import React from 'react';
import { NavLink } from 'react-router-dom';
import './profile.css';

function Pronav() {
  return (
    <div className='pronav'>
      <div className='pronav-links'>
        <NavLink to="/personal_info" className={({ isActive }) => (isActive ? 'active' : '')}>
          Personal Information
        </NavLink>
        <NavLink to="/notification" className={({ isActive }) => (isActive ? 'active' : '')}>
          Notifications
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => (isActive ? 'active' : '')}>
          Search Profiles
        </NavLink>
        <NavLink to="/user_own_profile" className={({ isActive }) => (isActive ? 'active' : '')}>
         My Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Pronav;
