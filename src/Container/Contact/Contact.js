import React, {useState} from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animation from '../../Utilities/Animation';
import scroll from '../../../src/images/up-arrow.png'
import './Contact.css'

export default function Contact(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    // fadeInSubscription();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [bool, setBool] = useState(false);
const [banner, setBanner] = useState('')

const handleName = (e) => {
  setName(e.target.value);
};
const handleEmail = (e) => {
  setEmail(e.target.value);
};
const handleMessage = (e) => {
  setMessage(e.target.value);
};

const submitForm = async (e) => {
  e.preventDefault();
  try {
    let data = {
    name,
    email,
    message
  };
  setBool(true)
  const res = await axios.post(`/contact`, data);
  if (name.length === 0 || email.length === 0 || message.length === 0){
    setBanner(res.data.msg)
    toast.error(res.data.msg)
    setBool(false)
  }else if(res.status === 200){
    setBanner(res.data.msg)
    toast.success(res.data.msg)
    setBool(false)

    setName("");
    setEmail("");
    setMessage("");
  }

  } catch (error) {
    console.log(error)
    
  }
}

  return (
    <div className="main-containe" id={props.id || ""}>
      <ScreenHeading
        subHeading={"Lets Keep In Touch"}
        title={"Contact Me"}
      />
      <div className="central-form">
        <div className="col">
            <h2 className='title'>
             Get In Touch 📧
            </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="img not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" 
              onChange={handleName}
              value={name}
            />

            <label htmlFor="email">Email</label>
            <input type="email"
            onChange={handleEmail}
            value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea type="text"
            onChange={handleMessage}
            value={message}
            />

            <div className="send-btn">
              <button type='submit'>
                Send 
                <i className='fa fa-paper-plane'/>
                {bool ?(<b className='load'>
                  <img src={load1} alt="no internet" />
                </b>):("")}
              </button>
            </div>
          </form>
        </div>
        
      </div>
      <div className="icons"  onClick={() => ScrollService.scrollHandler.scrollToHome()}>
        <img src={scroll} alt="home scroll"/>
      </div>
    </div>
  )
}
