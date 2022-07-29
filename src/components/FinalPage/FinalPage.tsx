import React from 'react';
import './FinalPage.css';
import BACK_ARROW from "../../assets/images/back_arrow.png";
import MENU1 from "../../assets/images/menu.png";
import MENU2 from "../../assets/images/tools.png";
import SETTING from '../../assets/images/setting.png';
import PIN from '../../assets/images/pin.png';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import PasswordPage from '../PasswordPage/PasswordPage';
import PROGRESS100 from '../../assets/images/100%.png';

function FinalPage() {
  return (
    <div className="FinalPage">
      <div className='FinalPage_title'>
        <Link component={PasswordPage}>
          <img className='kanalabs_logo' src={BACK_ARROW} alt="logo" />
        </Link>
        <div className='FinalPageTitle'>Your wallet is ready</div>
      </div>
      <img className='Progress_FinalPage' src={PROGRESS100} alt="100%" />
      <div className='Description_wallet'>Be sure to pin the extension in your browser to access it easily</div>
      <div className='Follow_below'>Follow the steps below </div>
      <span className='Follow_below'>1. Click on the <span><img className='span_img' src={SETTING} alt="setting" /> </span>in your browser</span>
      <img className='menu1' src={MENU2} alt="logo" />
      <span className='Follow_below'>2. Find Kanalabs Wallet in the list of extensions and click on the  <span><img className='span_img' src={PIN} alt="pin" /> </span>button</span>
      <img className='menu2' src={MENU1} alt="logo" />
      <button className='start' type='submit'>Start</button>
    </div>
  );
}

export default FinalPage;
