import React from 'react';
import './UserNamePage.css';
import BACK_ARROW from "../../assets/images/back_arrow.png";
import INFO from "../../assets/images/info.png";
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import BackUpPage from '../BackUpPage/BackUpPage';
import IntroductionPage from '../IntroductionPage/IntroductionPage';
import PROGRESS40 from '../../assets/images/40%.png';
function UserNamePage() {
  return (
    <div className="UserNamePage">
      <div className='UserNamePage_title'>
        <Link component={IntroductionPage}>
          <img className='kanalabs_logo' src={BACK_ARROW} alt="logo" />
        </Link>
        <div className='Wallet_Name'>Name your Wallet</div>
      </div>
      <img className='Progress_UserNamePage' src={PROGRESS40} alt="40%" />
      <div className='username_heading'>
        <div className='Username_Label'>Enter your wallet’s name</div>
        <div  className='info'><img src={INFO} alt="info" /></div>
      </div>
      <form className="UserNamePage_form">
        <input className='Username_Input' type="text" placeholder='Ankita' required />
        <Link className='Continue_button' component={BackUpPage}>Continue</Link>
      </form>
    </div>
  );
}

export default UserNamePage;
//<Link className='Continue_button' component={BackUpPage} >Continue</Link>