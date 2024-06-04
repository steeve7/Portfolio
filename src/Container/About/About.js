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
        description:"Front end web with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficency. Strong professional with a BSC willing to be and asset for an organisation.",
        highlights:{
            bullets:[
                "Interactive Front End as per the design",
                "React and Next Js",
                "API Integration",
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
                <a href="ofoegbu.pdf" download="ofoegbu.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                </a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
