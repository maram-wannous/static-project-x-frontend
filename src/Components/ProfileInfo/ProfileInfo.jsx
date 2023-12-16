/* eslint-disable react/prop-types */
 
import avatar from './../../assets/avatar.png'
import add from './../../assets/add.png'
import email from './../../assets/email.png'
import block from './../../assets/block.png'
import gallery from './../../assets/gallery.png'
import user from './../../assets/user.png'

import "./ProfileInfo.css";
import { Link } from 'react-router-dom'
// import React from "react";

export default function ProfileInfo({pageProfile}) {

  const emailStorage = localStorage.getItem('bearer');

  const handleLogout = ()=>{
    localStorage.removeItem('bearer');
    window.location.pathname = '/static-project-x-frontend/';
  }
  
  return (
    <div className="sl-info">
        <div className="sl-divimg">
          <img className="sl-img" src={avatar} />
          <div className="sl-img-border"></div>
        </div>
        <p className='fw-bold'>Yash Ghori</p>
        <p>Ahmedabad, Gujarat</p>
        <p>India</p>
        <div className="mr-line"></div>
        <ul>
          <li>
            <img src={user} alt="" />
            <p>UI - Intern</p>
          </li>
          <li>
            <img src={block} alt="" />
            <p>On-Teak</p>
          </li>
          <li className='mr-line'></li>
          <li>
            <img src={add} alt="" />
            <p>+91 7048144030</p>
          </li>
          <li>
            <img src={email} alt="" />
            <p>yghori@asite.com</p>
          </li>
          <li>
            <img src={gallery} alt="" />
            <p>PDT - I</p>
          </li>
          <li className='mr-line'></li>
          {
            pageProfile && (emailStorage === 'admin@gmail.com') && (<li><Link to={'/static-project-x-frontend/dashboard/profile/updateprofile'} className='mr-up-del-btn'>Update Profile</Link></li>)
          }
          <li><button className='mr-up-del-btn mt-3' onClick={handleLogout}>Logout</button></li>
        </ul>
    </div>
  );
}
