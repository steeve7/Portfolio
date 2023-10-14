import React, {useEffect} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animation from '../../Utilities/Animation';
import './About.css';

export default function About(props) {
    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return
        Animation.animation.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
      useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
      }, [fadeInSubscription]);

    const SCREEN_CONSTANTS = {
        description:"Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficency. Strong professional with a BSC willing to be and asset for an organisation.",
        highlights:{
            bullets:[
                "Full stack web and mobile development",
                "Interactive Front End as per the design",
                "React and React Native",
                "Redux and State Management",
                "Building REST API",
                "Managing Database",
            ],
            heading:"Here are Few Highlight:"
        }
    }
    const renderHighlight = ()=>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) =>(
                <div className="highlight" key={i}>
                    <div className="highlight-bolb"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
  return (
    <div className="about-me-container screen-container fadeInScreen" id={props.id || ""}>
        <div className="about-me-parent">
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
            <div className="about-me-card">
                <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-desc">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlight">
                        <div className="highlight-heading">
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        {renderHighlight()}
                    </div>
                    <div className="about-me-options">
                    <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                    Hire Me
                </button>
                <a href="Resume (5).pdf" download="chidindu Resume (5).pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                </a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
