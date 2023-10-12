import React from 'react'
import Header from './Header/Header';
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import ScrollService from '../../Utilities/ScrollService';
import Animation from '../../Utilities/Animation';
import './Home.css';

export default function Home(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    fadeInSubscription();
  return (
    <div className="home-container" id={props.id || ""} >
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  )
}
