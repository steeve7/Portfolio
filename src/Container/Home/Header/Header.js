import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX
} from "../../../Utilities/Commonutils";
import ScrollService from "../../../Utilities/ScrollService";
import { FaBars } from 'react-icons/fa';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOption, setShowHeaderOption] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return
  }
  let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(
    updateCurrentScreen
  );
  if(currentScreenSubscription<0) return

  const getHeaderOptions = () => {
    return (
        TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ))
    )
    
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  const switchScreen = (i, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(i);
    setShowHeaderOption(false);
  };

  return (
    <div>
      <div
        className="header-container classes"
        onClick={() => setShowHeaderOption(!showHeaderOption)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOption(!showHeaderOption)}
          >
          <FaBars className="header-hamburger-bar"/>
          </div>
          <div className="header-logo">
            <span>STEEVE~</span>
          </div>
          <div
            className={
              showHeaderOption
                ? "header-options show-hamburger-options"
                : "header-options " 
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}
