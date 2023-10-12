import React from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animation from "../../Utilities/Animation";
import 'tachyons';
import "./Testimonies.css";
import lady from '../../../src/img/Testimonial/lady.png';
import mike from '../../../src/img/Testimonial/mike.png';
import daisy from '../../../src/img/Testimonial/daisy.jpg';
import shape from '../../../src/img/Testimonial/shape-bg.png';
import man from '../../../src/img/Testimonial/man.png';


export default function Testimonies(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
      loop:true,
      margin:0,
      nav:true,
      animateIn:"bounceInRight",
      animateOut:"bounceOutRight",
      dots:true,
      autoplay:true,
      smartSpeed:1000,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:1
        },
        1000:{
          items:3
        },
      }
    }
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Says About Me"}
      />
      <section className="Testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      I patronize Steeve and when He delivered, i honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                        <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt="no internet connection" />
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      I patronize Steeve and when He delivered, i honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                        <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={mike} alt="no internet connection" />
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      I patronize Steeve and when He delivered, i honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                        <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={daisy} alt="no internet connection" className="br-pill"/>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      I patronize Steeve and when He delivered, i honestly fell
                      in love with the project He is a very honest guy and he
                      delivers ontime.
                        <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={man} alt="no internet connection" className="br-pill"/>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
     <div className="footer-image">
      <img src={shape} alt="no internet connection" />
     </div>
    </div>
  );
}
