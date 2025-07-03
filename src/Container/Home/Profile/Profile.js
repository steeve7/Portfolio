import React from 'react';
import './Profile.css';
import ScrollService from '../../../Utilities/ScrollService';
// import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
            <div className="colz">
                <div className="colz-icons"> 
                <a href="https://web.facebook.com/profile.php?id=100006683328663">
                <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/__stee.ve/">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://github.com/steeve7">
                <i className="fa fa-github"></i>
                </a>
                </div>
            </div>
            <div className="profile-details-name">
                <span className="primary-text">
                    {""}
                    Hello, I'M <span className="highlited-text">Chidindu</span>
                </span>
            </div>
            <div className="profile-details-row">
                <span className="primary-text">
                    {""}
                    <h1>Front End Developer💻</h1>
                    <span className="profile-role-tagline">
                    Knack of building applicaion with front operations.
                    </span>
                </span>
            </div>
            <div className="profile-option">
                <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                Hire Me
                </button>
                <a href="ofoegbu-chidindu-resume.pdf" download="ofoegbu-chidindu-resume.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                </a>
            </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  )
}
